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
- Auto deployment: active; Hostinger watches `hostinger`, not `main`.
- No server-side Node build/start command is needed for this compiled branch.

The deployed branch contains `index.html`, `_astro/`, page directories and
`.htaccess`. It does not contain `src/`, `package.json`, private client documents,
or `node_modules/`. The server configuration uses `index.html` and serves
`404.html` with a 404 status; there is no SPA rewrite.

## Deployment status — 17 October 2026

The site runs on Cloud Startup Hosting. The user resolved the stalled GitHub
authorization by reinstalling the Hostinger GitHub app. The repository is now
connected in hPanel and automatic deployment is active.

The initial Git connection deployed `main` directly and the domain returned
403 because the source tree has no root `index.html`. The site-specific
repository connection was recreated with branch `hostinger` and root
`public_html`; the GitHub provider authorization was retained. hPanel confirmed
deployment completed at 22:49 Asia/Jakarta, and the HTTPS homepage returned 200.

Automatic delivery was verified with content-preserving deployment commit
`b249f9d8777b7e8db934d0e59e98ebc0b5553cd6`. Without a manual redeploy, hPanel
reported that exact commit successfully deployed from `hostinger` at 22:52.
All eight main pages, both sitemaps, representative CSS and division images
returned 200 over HTTPS. A missing path returned 404; `/package.json` and
`/astro.config.mjs` also returned 404 after the source deployment was replaced.

The deployed build originates from source commit
`a71376418a8f86e41d92f29c2d0a4b97149b40c9`. The same build had previously been
uploaded manually while OAuth was blocked, and the domain's older WordPress CDN
cache was flushed. That manual fallback is no longer the update mechanism.

Normal delivery is now: push source to `main`, GitHub Actions checks/builds the
site and updates `hostinger`, then Hostinger deploys that branch. A source change
that produces identical build output does not create another deployment commit.
Keep `main` out of the hosting document root.

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
