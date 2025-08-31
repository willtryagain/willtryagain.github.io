# Minimal profile (Jekyll)

This is a minimal profile site built with Jekyll and the `jekyll-theme-minimal` theme. Edit a simple markdown file to update your profile.

## Edit content

- Main content: edit `index.md`
- Site title/description: edit `_config.yml`

## Local preview

You can preview without installing anything by opening the built site via Docker (optional) or using GitHub Pages directly after pushing.

If you have Ruby locally and want to preview:

```bash
gem install jekyll jekyll-seo-tag
jekyll serve --livereload
# open http://127.0.0.1:4000
```

## Deploy to GitHub Pages

Pushing to `main` triggers the Actions workflow to build the site and publish to Pages. The URL will appear in the workflow run under the Deploy step, or in Settings → Pages.

## Notes

- No custom JS or CSS is needed; the theme provides defaults.
- You can add more pages by creating more `.md` files.
