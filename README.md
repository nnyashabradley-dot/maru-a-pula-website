# Maru-a-Pula School Website

Static website for Maru-a-Pula School, currently in the design phase. See [ROADMAP.md](./ROADMAP.md) for the full build plan.

## Live site

Deployed via GitHub Pages, auto-updated on every push to `main`:
`https://<your-username>.github.io/<repo-name>/`

## Branches

- `main` — deployed branch. Every push here triggers the GitHub Actions workflow and auto-publishes the live site.
- `develop` — active working branch. Build and preview pages here, then merge into `main` when ready to go live.

## Local development

This is a plain HTML/CSS site — no build step. Open any `.html` file directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` — homepage
- `about.html` — about / our story page
- `ROADMAP.md` — full project roadmap and page checklist
- `.github/workflows/deploy.yml` — CI/CD workflow that publishes `main` to GitHub Pages
