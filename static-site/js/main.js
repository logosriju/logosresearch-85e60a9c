// ============================================
// LOGOS Research Technologies - Static Site JS
// ============================================

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.toggle('open');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }
}

// Toast Notification System
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !message) {
      showToast('Error', 'Please fill in all required fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Error', 'Please enter a valid email address', 'error');
      return;
    }

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast('Message Sent!', 'Thank you for contacting us. We\'ll get back to you soon.');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

// Certificate Verification System
let certificates = [];

async function loadCertificates() {
  try {
    const response = await fetch('certificates.csv');
    const csvText = await response.text();
    certificates = parseCSV(csvText);
    console.log('Loaded', certificates.length, 'certificates');
  } catch (error) {
    console.error('Failed to load certificates:', error);
    showToast('Error', 'Failed to load certificate data', 'error');
  }
}

function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const cert = {};
    headers.forEach((header, index) => {
      cert[header] = values[index] || '';
    });
    return cert;
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function initCertificateVerify() {
  const form = document.getElementById('verify-form');
  const resetBtn = document.getElementById('reset-btn');
  const resultContainer = document.getElementById('verify-result');

  if (!form) return;

  loadCertificates();

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('search-name').value.trim();
    const course = document.getElementById('search-course').value.trim();
    const location = document.getElementById('search-location').value.trim();

    if (!name) {
      showToast('Error', 'Please enter the participant name', 'error');
      return;
    }

    const result = certificates.find(cert => {
      const nameMatch = cert.participantName.toLowerCase().includes(name.toLowerCase());
      const courseMatch = !course || cert.courseName.toLowerCase().includes(course.toLowerCase());
      const locationMatch = !location || cert.location.toLowerCase().includes(location.toLowerCase());
      return nameMatch && courseMatch && locationMatch;
    });

    if (result) {
      displayVerifySuccess(result, resultContainer);
    } else {
      displayVerifyError(resultContainer);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      form.reset();
      resultContainer.innerHTML = '';
    });
  }
}

function displayVerifySuccess(cert, container) {
  container.innerHTML = `
    <div class="card verify-success">
      <div class="verify-header">
        <div class="verify-icon verify-icon-success">
          <svg class="icon-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h3 class="verify-title">Certificate Verified</h3>
          <p class="verify-subtitle">This certificate is authentic and valid</p>
        </div>
      </div>
      <div class="cert-details">
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Certificate Number</p>
            <p class="cert-detail-value">${cert.certificateNumber}</p>
          </div>
        </div>
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Participant Name</p>
            <p class="cert-detail-value">${cert.participantName}</p>
          </div>
        </div>
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Course Name</p>
            <p class="cert-detail-value">${cert.courseName}</p>
          </div>
        </div>
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Location</p>
            <p class="cert-detail-value">${cert.location}</p>
          </div>
        </div>
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Date of Issue</p>
            <p class="cert-detail-value">${formatDate(cert.dateOfIssue)}</p>
          </div>
        </div>
        <div class="cert-detail-item">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <p class="cert-detail-label">Duration</p>
            <p class="cert-detail-value">${cert.duration}</p>
          </div>
        </div>
        ${cert.remarks ? `
          <div style="border-top: 1px solid var(--border); padding-top: 1rem; margin-top: 0.5rem;">
            <p class="cert-detail-label">Remarks</p>
            <p style="color: var(--foreground);">${cert.remarks}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function displayVerifyError(container) {
  container.innerHTML = `
    <div class="card verify-error">
      <div class="verify-header">
        <div class="verify-icon verify-icon-error">
          <svg class="icon-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h3 class="verify-title">Certificate Not Found</h3>
          <p class="verify-subtitle">No matching certificate found. Please verify the details and try again.</p>
        </div>
      </div>
      <div class="info-box">
        <p style="font-size: 0.875rem; color: var(--muted-foreground);">
          If you believe this is an error, please contact us at 
          <a href="mailto:info@logosresearch.tech" style="color: var(--primary);">info@logosresearch.tech</a>
        </p>
      </div>
    </div>
  `;
}

// Brochure Download Handler
function handleBrochureDownload(filename) {
  // In production, link to actual PDF files
  alert(`Download: ${filename}\n\nNote: Please upload actual PDF files to your server.`);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initContactForm();
  initCertificateVerify();
});
