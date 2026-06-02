# NexaDataFlow Website

Static marketing site for [nexadataflow.com](https://nexadataflow.com) — clinical lab data workflow automation and medical billing.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080

## Configuration

Edit `assets/js/config.js` to update:

- Email and phone
- Phone number (`phone` display format and `phoneTel` for tel: links, e.g. Google Voice)

## Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `zeiasyed/nexadataflow`).
2. Push this folder to the `main` branch.
3. In repo **Settings → Pages → Build and deployment**, set source to **GitHub Actions**.
4. After the workflow runs, the site is live at `https://zeiasyed.github.io/nexadataflow/`.

## Custom domain (nexadataflow.com)

1. Ensure `CNAME` contains `nexadataflow.com`.
2. In **Settings → Pages**, enter custom domain `nexadataflow.com` and enable **Enforce HTTPS**.
3. At your DNS provider, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | zeiasyed.github.io |

DNS may take up to 24 hours to propagate.

## Pages

- Home, The Problem, Industry Impact, Services, Medical Billing, How It Works, Contact
