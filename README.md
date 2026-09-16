# Laser Restore NI — static website

Canonical site: **https://laserrestoreni.co.uk** (DNS pending at registrar)  
**Live now:** https://laserrestoreni.co.uk/  
Repo: https://github.com/tenderhunter-ni/laser-restore-ni

Mobile-first static site. Primary CTA: **send photos for a quote**.

## Contact
- Phone: [07734 307174](tel:+447734307174)
- Email: [jamie@laserrestoreni.co.uk](mailto:jamie@laserrestoreni.co.uk)

## Pages
- `index.html` — home (sectors + guide prices + how quotes work)
- `automotive.html` · `engineering.html` · `agricultural.html` · `heritage.html`
- `gallery.html` — placeholders only (no fake stock work)
- `about.html` — safety & forbidden claims
- `quote.html` — form → prefilled mailto:jamie@laserrestoreni.co.uk

## Assets
- `css/styles.css` · `js/site.js` · `img/logo-primary.png` (header/brand, same as Facebook) · favicons · hero/gallery brand covers
- `robots.txt` · `sitemap.xml` · `vercel.json`

## Local preview
```bash
cd website && python3 -m http.server 8765
```
Open http://127.0.0.1:8765/

## Custom domain
- `CNAME` → `laserrestoreni.co.uk` (GitHub Pages)

## Deploy notes
See `/workspace/laser-restore-ni/WEBSITE_STATUS.md` for DNS records and Vercel auth blockers.
