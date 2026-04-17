# Sales Tax Solutions Website

## File Structure

```
sts-site/
├── index.html              ← Homepage
├── pages/
│   ├── services.html       ← All 6 services (with anchor links)
│   ├── about.html          ← About page
│   ├── contact.html        ← Contact + consultation form
│   └── thank-you.html      ← Post-form submission confirmation
├── css/
│   └── style.css           ← All styles
├── js/
│   └── layout.js           ← Shared nav + footer injection
├── robots.txt              ← Search engine directives
├── sitemap.xml             ← XML sitemap for Google
└── netlify.toml            ← Netlify hosting config
```

---

## Deploying to Netlify (Free — Recommended)

### Option A: Drag and Drop (fastest, ~2 minutes)

1. Go to https://app.netlify.com
2. Create a free account (use your email)
3. On your dashboard, drag the entire `sts-site` folder into the deploy drop zone
4. Netlify instantly publishes the site with a random URL (e.g. `amazing-fox-123.netlify.app`)
5. Done — your site is live

### Option B: GitHub + Netlify (best for future updates)

1. Create a free GitHub account at https://github.com
2. Create a new repository called `sts-site`
3. Upload all files from this folder to the repository
4. Go to https://app.netlify.com → "Add new site" → "Import from Git"
5. Connect your GitHub repo
6. Every time you push changes to GitHub, Netlify auto-deploys

---

## Connecting Your Domain (salestaxsolutions.com)

After deploying to Netlify:

1. In Netlify dashboard → Site Settings → Domain Management
2. Click "Add custom domain" → enter `salestaxsolutions.com`
3. Netlify will show you DNS records to add
4. Log into your domain registrar (GoDaddy, Namecheap, etc.)
5. Update DNS records as instructed — usually takes 5–60 minutes to go live
6. Netlify automatically provisions a free SSL certificate (https://)

---

## Contact Form Setup

The contact form uses **Netlify Forms** (free, built-in).

- Forms appear automatically in your Netlify dashboard under "Forms"
- Go to Site Settings → Forms → enable email notifications
- Netlify emails you every submission at your registered email

No backend code, no database, no monthly fee.

---

## Professional Email

To get info@salestaxsolutions.com:
- Google Workspace: ~$6/month → https://workspace.google.com
- After signup, add the DNS records Google provides to your domain registrar
- Update `info@salestaxsolutions.com` references in footer and contact page

---

## SEO Checklist

Once live, do these:

1. **Google Search Console** — https://search.google.com/search-console
   - Add your property (salestaxsolutions.com)
   - Submit sitemap: `https://www.salestaxsolutions.com/sitemap.xml`

2. **Google Business Profile** — https://business.google.com
   - Create/claim your listing
   - Category: "Tax Consultant" or "Tax Advisor"
   - Add your website URL

3. **PageSpeed check** — https://pagespeed.web.dev
   - Enter your URL — aim for 90+ on all metrics

---

## Making Future Edits

All content is in plain HTML files. Open any `.html` file in a text editor (even Notepad) to edit text. For larger changes, you can paste any file back to me and I'll update it for you.
