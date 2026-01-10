# Deployment Instructions for LOGOS Research Technologies Website

## Overview
This website is built with React + Vite and builds to static files that can be hosted on any web server.

## Building for Production

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The built files will be in the `dist/` folder.

## Deploying to Shared Hosting

### Option 1: Direct Upload
1. Build the project locally
2. Upload all contents of the `dist/` folder to your web server's `public_html` or `www` folder
3. Ensure your server serves `index.html` for all routes (see .htaccess below)

### Option 2: Using FTP
1. Connect to your hosting via FTP (FileZilla, etc.)
2. Navigate to your public directory
3. Upload all files from `dist/`

## Required .htaccess for Apache (SPA Routing)

Create a `.htaccess` file in your root directory with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Certificate Verification System

### How It Works
The certificate verification uses a **CSV file** (`public/certificates.csv`) that you can easily edit with Excel, Google Sheets, or any spreadsheet software.

### Updating Certificate Data (Easy Method)

1. **Open Excel or Google Sheets**
2. Create columns with these exact headers (first row):
   - `certificateNumber`
   - `participantName`
   - `courseName`
   - `location`
   - `dateOfIssue` (format: YYYY-MM-DD, e.g., 2024-03-15)
   - `duration`
   - `remarks`

3. Add one certificate per row
4. **Save as CSV** (In Excel: File → Save As → CSV UTF-8)
5. Upload to `public/certificates.csv` on your server (or `dist/certificates.csv` after build)

### Example CSV Format
```csv
certificateNumber,participantName,courseName,location,dateOfIssue,duration,remarks
LOGOS-2024-FDM-001,Rahul Sharma,FDM 3D Printing Fundamentals,IIT Delhi,2024-03-15,3 Days,Successfully completed
LOGOS-2024-ADV-002,Priya Patel,Advanced Additive Manufacturing,NIT Trichy,2024-04-20,5 Days,Completed with practical project
```

### Important Notes
- **No rebuild required!** Just replace the CSV file on your server
- Column headers must match exactly (case-sensitive)
- Don't include commas in your data (or the parsing will break)
- Date format: YYYY-MM-DD (e.g., 2024-03-15 for March 15, 2024)

### Alternative: PHP Backend (for easier updates)
If you prefer PHP-based updates without rebuilding:

1. Create `api/certificates.json` on your server
2. Create `api/verify.php`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$data = file_get_contents('certificates.json');
echo $data;
?>
```

3. Update the frontend to fetch from `/api/verify.php`

## Adding PDF Brochures

1. Create PDF files for each service:
   - `LOGOS_Training_Brochure.pdf`
   - `LOGOS_RnD_Brochure.pdf`
   - `LOGOS_Printing_Services_Brochure.pdf`

2. Upload to `/brochures/` folder on your server

3. Update the download links in `src/pages/Brochures.tsx`

## Contact Form Integration

The contact form currently shows a success message but doesn't send emails. To enable email:

### Option 1: FormSpree (Recommended for simplicity)
1. Sign up at formspree.io
2. Create a new form
3. Update the form action in Contact.tsx

### Option 2: EmailJS
1. Sign up at emailjs.com
2. Set up email service and template
3. Install EmailJS: `npm install emailjs-com`
4. Update Contact.tsx with EmailJS integration

### Option 3: PHP Endpoint
Create `api/contact.php`:

```php
<?php
header('Content-Type: application/json');

$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

$to = "info@logosresearch.tech";
$headers = "From: $email\r\nReply-To: $email\r\n";
$body = "Name: $name\nEmail: $email\n\n$message";

if(mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
```

## Folder Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── (other static files)
```

## Recommended Hosting Providers

- Hostinger (₹99/month)
- Bluehost
- SiteGround
- GoDaddy
- Any cPanel-based hosting

## SSL Certificate

Ensure your hosting provides free SSL (Let's Encrypt) for HTTPS access.

## Support

For technical support, contact your hosting provider or a web developer.
