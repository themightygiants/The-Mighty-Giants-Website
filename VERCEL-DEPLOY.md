# Deploy Mighty Giants to Vercel

This folder is the **full Next.js app**. Your **live “version 1”** on Vercel will always match whatever you push to GitHub (or deploy from the CLI). You do **not** need a separate copy for updates—use **Git branches** (e.g. `main` = production, `develop` = experiments).

## Path A — GitHub + Vercel (recommended)

1. **Create a new empty repository** on GitHub (e.g. `mighty-giants-site`). Do not add a README if GitHub asks—keep it empty.

2. **Push this project** (first time only). In PowerShell:

   ```powershell
   cd "C:\Users\Silent John\Desktop\THE MIGHTY GIANTS WEBSITE\mighty-giants-site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with yours.

3. In **Vercel** → **Add New** → **Project** → **Import** that repository.

4. **Root Directory**: leave default (repo root *is* the app).

5. Click **Deploy**. Vercel gives you a URL like `https://mighty-giants-site.vercel.app`.

6. **Custom domain** (optional): Vercel → Project → **Settings** → **Domains** → add your GoDaddy domain; then set DNS in GoDaddy as Vercel instructs.

## Path B — Vercel CLI (no GitHub)

```powershell
cd "C:\Users\Silent John\Desktop\THE MIGHTY GIANTS WEBSITE\mighty-giants-site"
npx vercel@latest login
npx vercel@latest
```

Follow the prompts. For production: `npx vercel@latest --prod`.

## Updates later

- With **GitHub**: edit files locally → `git add` → `git commit` → `git push` → Vercel **redeploys automatically**.
- To try changes safely: create a branch, open a **Preview** deployment on Vercel, merge to `main` when ready.

## Note

Deployment must be done **in your browser or your terminal** while logged into **your** Vercel account. The AI cannot log in for you.
