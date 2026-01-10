# LOGOS Research Technologies - Static Website

A 100% static website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no backend required.

## Features

- ✅ **100% Static** - Pure HTML, CSS, JavaScript
- ✅ **No Backend Required** - Works on any static hosting
- ✅ **No Build Process** - Just upload and serve
- ✅ **Responsive Design** - Works on all devices
- ✅ **Certificate Verification** - CSV-based, easily updatable
- ✅ **Contact Form** - Client-side validation (integrate with FormSpree/EmailJS for actual sending)

## File Structure

```
static-site/
├── index.html           # Home page
├── services.html        # Services page
├── brochures.html       # Brochures download page
├── verify.html          # Certificate verification
├── contact.html         # Contact form
├── certificates.csv     # Certificate data (editable)
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # All JavaScript
└── images/
    └── logo.png         # Your logo (add this!)
```

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files from `static-site/`
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main → / (root)
5. Your site will be live at `https://username.github.io/repo-name/`

### Blogger / Google Sites
1. Create pages for each HTML file
2. Copy the content into the HTML editor
3. Upload CSS/JS to Google Drive and link them

### Any Static Hosting (Netlify, Vercel, Hostinger, etc.)
1. Upload the entire `static-site/` folder contents
2. Set the root directory if needed
3. Done!

### Shared Hosting (cPanel, etc.)
1. Connect via FTP
2. Upload to `public_html/` or `www/`
3. Done!

## Updating Certificates

1. Open `certificates.csv` in Excel or Google Sheets
2. Add/edit rows with certificate data
3. Save as CSV (UTF-8)
4. Upload the updated file to your hosting

### CSV Format
```csv
certificateNumber,participantName,courseName,location,dateOfIssue,duration,remarks
LOGOS-2024-FDM-001,Rahul Sharma,FDM 3D Printing Fundamentals,IIT Delhi,2024-03-15,3 Days,Successfully completed
```

**Important:**
- Keep column headers exactly as shown (case-sensitive)
- Date format: YYYY-MM-DD
- Avoid commas in data fields

## Adding Your Logo

1. Replace `images/logo.png` with your logo
2. Keep the filename or update references in all HTML files

## Contact Form Integration

The contact form currently shows a success message but doesn't send emails. To enable:

### Option 1: FormSpree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. In `contact.html`, change the form to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add EmailJS script and configure in `main.js`

## Adding PDF Brochures

1. Create your PDF files:
   - `LOGOS_Training_Brochure.pdf`
   - `LOGOS_RnD_Brochure.pdf`
   - `LOGOS_Printing_Services_Brochure.pdf`

2. Upload to `brochures/` folder (create it)

3. Update the `handleBrochureDownload` function in `main.js`:
```javascript
function handleBrochureDownload(filename) {
  window.open('brochures/' + filename, '_blank');
}
```

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary: hsl(221, 83%, 53%);
  --background: hsl(210, 20%, 98%);
  /* ... etc */
}
```

### Content
Edit the HTML files directly. All content is inline.

## Browser Support

Works on all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

© 2026 LOGOS Research Technologies. All rights reserved.
