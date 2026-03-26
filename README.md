# Planting Date Calculator

A simple one-page web app that calculates the difference between a planting date and a harvest date. It can also calculate a harvest date when you enter the number of days to maturity.

Built with plain HTML, CSS, and native JavaScript — **no dependencies, no build step**.

---

## Features

- Pick a **planting date** and a **harvest date** to see how many days are between them.
- Enter **days to maturity** and click **Calculate Harvest Date** to automatically fill in the harvest date.
- Fully responsive — works great on phones and desktops.

---

## Running Locally

Because this is a static site with no build step, you can open `index.html` directly in your browser:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or serve it with any local HTTP server, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Hosting for Free

### Option 1 — GitHub Pages (recommended)

1. Push this repository to GitHub (if it isn't there already).
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, choose the branch you want to deploy (e.g. `main`) and select the **root** (`/`) folder.
4. Click **Save**.
5. GitHub will provide a URL like `https://<your-username>.github.io/<repo-name>/` within a minute or two.

No configuration files are needed — GitHub Pages serves `index.html` from the root automatically.

---

### Option 2 — Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in (free tier is more than enough).
2. From the dashboard click **Add new site → Deploy manually**.
3. Drag-and-drop the project folder onto the upload area, **or** connect your GitHub repository for automatic deploys on every push.
4. Netlify instantly gives you a URL like `https://random-name.netlify.app`.
5. (Optional) Click **Domain settings** to add a custom domain.

---

### Option 3 — Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (free tier available).
2. Click **Add New → Project** and import your GitHub repository.
3. Vercel detects a static site automatically — just click **Deploy**.
4. Your site is live at `https://<project-name>.vercel.app`.

---

### Option 4 — Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in (free tier available).
2. Click **Create a project → Connect to Git** and select your repository.
3. Set the **build command** to *(leave blank)* and **output directory** to `/` (root).
4. Click **Save and Deploy**.

