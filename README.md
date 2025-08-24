# Portfolio

Static portfolio site for GitHub Pages.

## Local preview

- Option 1: Open `index.html` directly in a browser
- Option 2: Serve with a local server (recommended for routing and assets):

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

## Deploy to GitHub Pages (via Actions)

This repository includes an Actions workflow that deploys the site on every push to `main`.

Steps:

1. Create a new GitHub repository and push this code.
2. Ensure Actions are enabled for the repository.
3. The workflow will build and publish to GitHub Pages automatically.
4. Check the deployment URL in the Actions run summary or in Settings → Pages.

If your repository is named `<username>.github.io`, the site will be available at `https://<username>.github.io/`.

## Customize

- Edit content in `index.html`
- Update styles in `styles.css`
- JS behavior (theme toggle, navigation) in `script.js`


