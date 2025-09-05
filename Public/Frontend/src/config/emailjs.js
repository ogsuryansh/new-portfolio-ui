// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from https://www.emailjs.com/
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
};

// Email template parameters
export const EMAIL_TEMPLATE_PARAMS = {
  to_email: 'suryansh1885@gmail.com', // Your email address
  from_name: '', // Will be filled from form data
  from_email: '', // Will be filled from form data
  message: '', // Will be filled from form data
  reply_to: '', // Will be filled from form data
};
