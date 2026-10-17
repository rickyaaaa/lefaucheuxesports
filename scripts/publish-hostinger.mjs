import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, unlinkSync, rmdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';

// Publish only built static files. Never change the checked-out branch or force-push.
const remote = process.env.HOSTINGER_DEPLOY_REMOTE || 'origin';
const branch = 'hostinger';
const git = (args, options = {}) => execFileSync('git', args, {
  encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], ...options,
}).trim();
const root = git(['rev-parse', '--show-toplevel']);
const dist = resolve(root, 'dist');
if (!existsSync(join(dist, 'index.html')) || !existsSync(join(dist, '.htaccess'))) {
  throw new Error('Build the static website first: npm run build');
}
if (existsSync(join(dist, 'package.json')) || existsSync(join(dist, 'src'))) {
  throw new Error('Refusing to publish source files as a website.');
}
const gitDir = git(['rev-parse', '--absolute-git-dir']);
const sourceCommit = git(['rev-parse', 'HEAD']);
const temporary = mkdtempSync(join(tmpdir(), 'lfx-hostinger-index-'));
const index = join(temporary, 'index');
const env = {
  ...process.env,
  GIT_INDEX_FILE: index,
  GIT_AUTHOR_NAME: 'github-actions[bot]',
  GIT_AUTHOR_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
  GIT_COMMITTER_NAME: 'github-actions[bot]',
  GIT_COMMITTER_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
};
try {
  const staged = args => git([`--git-dir=${gitDir}`, `--work-tree=${dist}`, ...args], { cwd: dist, env });
  staged(['read-tree', '--empty']);
  staged(['add', '--all', '--force', '--', '.']);
  const tree = staged(['write-tree']);
  const ref = `refs/heads/${branch}`;
  const remoteRef = git(['ls-remote', '--heads', remote, ref]);
  let parent;
  if (remoteRef) {
    git(['fetch', '--no-tags', remote, ref]);
    parent = git(['rev-parse', 'FETCH_HEAD']);
    if (git(['rev-parse', `${parent}^{tree}`]) === tree) {
      console.log('Hostinger branch already contains this build.');
      process.exitCode = 0;
    }
  }
  if (!parent || git(['rev-parse', `${parent}^{tree}`]) !== tree) {
    const commit = git(['commit-tree', tree, ...(parent ? ['-p', parent] : [])], {
      env, input: `Deploy static website from ${sourceCommit}\n`,
    });
    git(['push', remote, `${commit}:${ref}`]);
    console.log(`Published ${commit} to ${branch} from ${sourceCommit}.`);
  }
} finally {
  if (existsSync(index)) unlinkSync(index);
  rmdirSync(temporary);
}
