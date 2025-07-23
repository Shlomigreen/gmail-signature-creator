document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = {
        fullName: document.getElementById('fullName'),
        jobTitle: document.getElementById('jobTitle'),
        company: document.getElementById('company'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        websiteUrl: document.getElementById('websiteUrl'),
        websiteLabel: document.getElementById('websiteLabel'),
        logoHyperlink: document.getElementById('logoHyperlink'),
        logoUrl: document.getElementById('logoUrl'),
        template: document.getElementById('template'),
        websiteAlignment: document.getElementById('websiteAlignment'),
        showLinkedin: document.getElementById('showLinkedin'),
        linkedin: document.getElementById('linkedin'),
        showTwitter: document.getElementById('showTwitter'),
        twitter: document.getElementById('twitter')
    };

    const previewElement = document.getElementById('signaturePreview');
    const copyButton = document.getElementById('copyButton');
    const copyHTMLButton = document.getElementById('copyHTMLButton');
    const copySuccess = document.getElementById('copySuccess');
    const stylingSection = document.getElementById('stylingSection');
    const logoUrlGroup = document.getElementById('logoUrlGroup');
    const linkedinGroup = document.getElementById('linkedinGroup');
    const twitterGroup = document.getElementById('twitterGroup');

    // Helper function to generate logo HTML
    function generateLogo(data, altText) {
        const logoImg = `<img src="static/logo/Black.png" alt="${altText}" />`;
        
        if (data.logoHyperlink && data.logoUrl) {
            return `<a href="${data.logoUrl}" style="text-decoration: none;">${logoImg}</a>`;
        }
        return logoImg;
    }

    // Toggle section visibility
    window.toggleSection = function(sectionId) {
        const content = document.getElementById(sectionId);
        const header = content.previousElementSibling;
        const icon = header.querySelector('.toggle-icon');
        
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            header.classList.remove('collapsed');
        } else {
            content.classList.add('collapsed');
            header.classList.add('collapsed');
        }
    };

    // Template generators with descriptive names
    const templates = {
        compact: (data) => `
            <div class="signature-style1">
                ${data.fullName ? `<div class="name">${data.fullName}</div>` : ''}
                ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
                ${(data.websiteUrl && data.websiteLabel) ? `<div class="website"><a href="${data.websiteUrl}" style="color: #0066cc; text-decoration: underline;">${data.websiteLabel}</a></div>` : ''}
                ${data.phone ? `<div class="phone">${data.phone}</div>` : ''}
                ${data.company ? `
                    <div class="company-logo">
                        ${generateLogo(data, data.company)}
                    </div>
                ` : ''}
            </div>
        `,
        
        balanced: (data) => `
            <div class="signature-style2">
                <div class="main-content">
                    <div class="left-column">
                        ${data.fullName ? `<div class="name">${data.fullName}</div>` : ''}
                        ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
                        ${data.phone ? `<div class="contact-item"><strong>Mobile:</strong> ${data.phone}</div>` : ''}
                        ${data.email ? `<div class="contact-item"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #000; text-decoration: none;">${data.email}</a></div>` : ''}
                        ${(data.showLinkedin && data.linkedin) ? `<div class="contact-item"><strong>Linkedin:</strong> <a href="https://linkedin.com/in/${data.linkedin}" style="color: #000; text-decoration: none;">${data.linkedin}</a></div>` : ''}
                        ${(data.showTwitter && data.twitter) ? `<div class="contact-item"><strong>X:</strong> <a href="https://x.com/${data.twitter}" style="color: #000; text-decoration: none;">@${data.twitter}</a></div>` : ''}
                    </div>
                    <div class="right-column">
                        ${data.company ? `<div class="company-logo">${generateLogo(data, data.company)}</div>` : ''}
                    </div>
                </div>
                ${(data.websiteUrl && data.websiteLabel) ? `<div class="website" style="text-align: ${data.websiteAlignment || 'center'}"><a href="${data.websiteUrl}" style="color: #000; text-decoration: none; font-weight: bold;">${data.websiteLabel}</a></div>` : ''}
            </div>
        `,
        
        corporate: (data) => `
            <div class="signature-style3">
                ${data.company ? `<div class="company-logo">${generateLogo(data, data.company)}</div>` : ''}
                ${data.fullName ? `<div class="name">${data.fullName}</div>` : ''}
                ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
                ${data.phone ? `<div class="contact-item"><strong>Mobile:</strong> ${data.phone}</div>` : ''}
                ${data.email ? `<div class="contact-item"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #000; text-decoration: none;">${data.email}</a></div>` : ''}
                ${(data.showLinkedin && data.linkedin) ? `<div class="contact-item"><strong>Linkedin:</strong> <a href="https://linkedin.com/in/${data.linkedin}" style="color: #000; text-decoration: none;">${data.linkedin}</a></div>` : ''}
                ${(data.showTwitter && data.twitter) ? `<div class="contact-item"><strong>X:</strong> <a href="https://x.com/${data.twitter}" style="color: #000; text-decoration: none;">@${data.twitter}</a></div>` : ''}
                ${(data.websiteUrl && data.websiteLabel) ? `<div class="website"><a href="${data.websiteUrl}" style="color: #000; text-decoration: none; font-weight: bold;">${data.websiteLabel}</a></div>` : ''}
            </div>
        `,
        
        modern: (data) => `
            <div class="signature-style4">
                <div class="header-section">
                    <div class="personal-info">
                        ${data.fullName ? `<div class="name">${data.fullName}</div>` : ''}
                        ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
                    </div>
                    ${(data.showLinkedin && data.linkedin) || (data.showTwitter && data.twitter) ? `
                        <div class="social-links">
                            ${(data.showLinkedin && data.linkedin) ? `<a href="https://linkedin.com/in/${data.linkedin}" class="social-icon" style="text-decoration: none;"><img src="static/socials/Linkedin-Logo--Streamline-Logos-Block.png" alt="LinkedIn" /></a>` : ''}
                            ${(data.showTwitter && data.twitter) ? `<a href="https://x.com/${data.twitter}" class="social-icon" style="text-decoration: none;"><img src="static/socials/X-Twitter-Logo--Streamline-Logos-Block.png" alt="X" /></a>` : ''}
                        </div>
                    ` : ''}
                </div>
                <div class="contact-info">
                    ${data.phone ? `<div class="contact-item"><strong>Mobile:</strong> ${data.phone}</div>` : ''}
                    ${data.email ? `<div class="contact-item"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #000; text-decoration: none;">${data.email}</a></div>` : ''}
                </div>
                ${data.company ? `<div class="company-logo">${generateLogo(data, data.company)}</div>` : ''}
            </div>
        `
    };

    // Get form data
    function getFormData() {
        return {
            fullName: form.fullName.value.trim(),
            jobTitle: form.jobTitle.value.trim(),
            company: form.company.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            websiteUrl: form.websiteUrl.value.trim(),
            websiteLabel: form.websiteLabel.value.trim(),
            logoHyperlink: form.logoHyperlink.checked,
            logoUrl: form.logoUrl.value.trim(),
            template: form.template.value,
            websiteAlignment: form.websiteAlignment.value,
            showLinkedin: form.showLinkedin.checked,
            linkedin: form.linkedin.value.trim(),
            showTwitter: form.showTwitter.checked,
            twitter: form.twitter.value.trim()
        };
    }

    // Show/hide styling section based on template
    function toggleStylingSection() {
        const selectedTemplate = form.template.value;
        if (selectedTemplate === 'balanced') {
            stylingSection.style.display = 'block';
        } else {
            stylingSection.style.display = 'none';
        }
    }

    // Show/hide logo URL field based on checkbox
    function toggleLogoUrlField() {
        if (form.logoHyperlink.checked) {
            logoUrlGroup.style.display = 'block';
        } else {
            logoUrlGroup.style.display = 'none';
        }
    }

    // Show/hide social network fields based on checkboxes
    function toggleSocialFields() {
        if (form.showLinkedin.checked) {
            linkedinGroup.style.display = 'block';
        } else {
            linkedinGroup.style.display = 'none';
        }
        
        if (form.showTwitter.checked) {
            twitterGroup.style.display = 'block';
        } else {
            twitterGroup.style.display = 'none';
        }
    }

    // Update preview
    function updatePreview() {
        const data = getFormData();
        const template = templates[data.template] || templates.modern;
        previewElement.innerHTML = template(data);
        toggleStylingSection();
        toggleLogoUrlField();
        toggleSocialFields();
    }

    // Copy to clipboard
    async function copyToClipboard() {
        try {
            // Create a clean HTML version with inline styles for Gmail compatibility
            const signatureHTML = previewElement.innerHTML;
            
            // Create a temporary container with all styles inlined
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = signatureHTML;
            
            // Apply computed styles inline for better email compatibility
            const elementsToStyle = tempContainer.querySelectorAll('*');
            elementsToStyle.forEach(element => {
                const computedStyle = window.getComputedStyle(previewElement.querySelector('.' + element.className));
                let inlineStyle = '';
                
                // Copy important styles that emails support
                const stylesToCopy = [
                    'font-family', 'font-size', 'font-weight', 'color', 
                    'margin', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right',
                    'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
                    'border', 'border-bottom', 'text-decoration', 'display',
                    'vertical-align', 'text-align'
                ];
                
                stylesToCopy.forEach(prop => {
                    const value = computedStyle.getPropertyValue(prop);
                    if (value && value !== 'initial' && value !== 'normal') {
                        inlineStyle += `${prop}: ${value}; `;
                    }
                });
                
                if (inlineStyle) {
                    element.style.cssText = inlineStyle;
                }
            });
            
            const cleanHTML = tempContainer.innerHTML;
            
            // Try modern clipboard API first
            if (navigator.clipboard && window.ClipboardItem) {
                const htmlBlob = new Blob([cleanHTML], { type: 'text/html' });
                const textBlob = new Blob([previewElement.textContent], { type: 'text/plain' });
                
                const clipboardItem = new ClipboardItem({
                    'text/html': htmlBlob,
                    'text/plain': textBlob
                });
                
                await navigator.clipboard.write([clipboardItem]);
            } else {
                // Fallback: use selection and execCommand
                const selection = window.getSelection();
                const range = document.createRange();
                
                // Create a temporary div with the styled content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = cleanHTML;
                tempDiv.style.position = 'absolute';
                tempDiv.style.left = '-9999px';
                tempDiv.style.top = '-9999px';
                document.body.appendChild(tempDiv);
                
                range.selectNodeContents(tempDiv);
                selection.removeAllRanges();
                selection.addRange(range);
                
                // Copy the selection
                document.execCommand('copy');
                
                // Clean up
                selection.removeAllRanges();
                document.body.removeChild(tempDiv);
            }
            
            // Show success message
            copySuccess.classList.add('show');
            setTimeout(() => {
                copySuccess.classList.remove('show');
            }, 3000);
            
        } catch (err) {
            console.error('Failed to copy signature:', err);
            
            // Ultimate fallback: copy visible content using selection
            try {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(previewElement);
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                selection.removeAllRanges();
                
                copySuccess.textContent = 'Signature copied (may need manual formatting)!';
                copySuccess.classList.add('show');
                setTimeout(() => {
                    copySuccess.classList.remove('show');
                    copySuccess.textContent = 'Signature copied to clipboard!';
                }, 3000);
            } catch (fallbackErr) {
                console.error('All copy methods failed:', fallbackErr);
                copySuccess.textContent = 'Copy failed - please select and copy manually';
                copySuccess.classList.add('show');
                setTimeout(() => {
                    copySuccess.classList.remove('show');
                    copySuccess.textContent = 'Signature copied to clipboard!';
                }, 3000);
            }
        }
    }

    // Add event listeners
    Object.values(form).forEach(element => {
        element.addEventListener('input', updatePreview);
        element.addEventListener('change', updatePreview);
    });

    // Special event listener for logo hyperlink checkbox
    form.logoHyperlink.addEventListener('change', toggleLogoUrlField);
    
    // Special event listeners for social network checkboxes
    form.showLinkedin.addEventListener('change', toggleSocialFields);
    form.showTwitter.addEventListener('change', toggleSocialFields);

    // Copy HTML source code to clipboard
    async function copyHTMLSource() {
        try {
            const signatureHTML = previewElement.innerHTML;
            
            // Create inline-styled version for better email compatibility
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = signatureHTML;
            
            // Convert relative paths to absolute paths for images
            const images = tempContainer.querySelectorAll('img');
            images.forEach(img => {
                if (img.src.startsWith('static/')) {
                    img.src = window.location.origin + '/' + img.src;
                }
            });
            
            const htmlCode = tempContainer.innerHTML;
            
            // Copy HTML source
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(htmlCode);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = htmlCode;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            copySuccess.textContent = 'HTML code copied to clipboard!';
            copySuccess.classList.add('show');
            setTimeout(() => {
                copySuccess.classList.remove('show');
                copySuccess.textContent = 'Signature copied to clipboard!';
            }, 3000);
            
        } catch (err) {
            console.error('Failed to copy HTML:', err);
            copySuccess.textContent = 'Failed to copy HTML code';
            copySuccess.classList.add('show');
            setTimeout(() => {
                copySuccess.classList.remove('show');
                copySuccess.textContent = 'Signature copied to clipboard!';
            }, 3000);
        }
    }

    copyButton.addEventListener('click', copyToClipboard);
    copyHTMLButton.addEventListener('click', copyHTMLSource);

    // Initialize with sample data matching screenshot
    form.fullName.value = 'Shlomi Green';
    form.jobTitle.value = 'Head of AI';
    form.company.value = 'Engini';
    form.email.value = 'shlomi.g@engini.io';
    form.phone.value = '+972-506-0030';
    form.websiteUrl.value = 'https://www.engini.io';
    form.websiteLabel.value = 'www.engini.io';
    form.linkedin.value = 'shlomigreen';
    
    // Initial preview update
    updatePreview();
});