# Hostinger Git deployment

Domain: https://lefaucheuxesports.com/
Repository: https://github.com/rickyaaaa/lefaucheuxesports

The existing hPanel Advanced → Git integration deploys repository files. Connect
the compiled `hostinger` branch, not the Astro source on `main`.

## Build delivery

The GitHub Actions workflow builds on pushes to `main` and can be run manually.
It installs the lockfile with Node 24, runs Astro checks/build, and publishes only
the contents of `dist/` to the `hostinger` branch. The job's GitHub token can write
repository contents; it has no Hostinger password, API key or SSH credential.
Publishing uses ordinary fast-forward pushes, keeps branch history, and does not
change the developer's checked-out branch or staging area. Build failure leaves
the last successful deployment branch intact.

## hPanel settings

- Provider/repository: GitHub, `rickyaaaa/lefaucheuxesports` only.
- Branch: `hostinger`.
- Website root: `public_html` for the requested domain.
- Auto deployment: enable after the first successful preview/verification.
- No server-side Node build/start command is needed for this compiled branch.

The deployed branch contains `index.html`, `_astro/`, page directories and
`.htaccess`. It does not contain `src/`, `package.json`, private client documents,
or `node_modules/`. The server configuration uses `index.html` and serves
`404.html` with a 404 status; there is no SPA rewrite.

## Current hosting inspection — 17 October 2026

The authenticated hPanel showed Cloud Startup Hosting. File Manager showed only
`default.php` in this domain's `public_html`; no WordPress installation was
present there. No remote files were deleted or replaced during preparation.
The Git provider was still disconnected. Initiating its GitHub OAuth connection
was blocked pending action-time approval for granting Hostinger repository access.

## Acceptance and recovery

Before deployment, recheck the target folder and preserve any files that have
appeared since the inspection. Retain the provider backup/default file outside
the document root if hPanel requires an empty deployment folder. Do not delete
an existing website or database to connect Git.

After connecting, verify HTTPS, Home, `/esports/`, `/join-us/`, direct page reloads,
the sitemap, image loading and a nonexistent URL returning HTTP 404. If a change
fails, revert its source commit on `main` and publish the rebuilt result; the
deployment branch retains previous build commits for recovery.

Official references:
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
- https://docs.astro.build/en/guides/deploy/hostinger/
