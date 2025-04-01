
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              K-Zen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by K-Zen. This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or use chat features on our website.
            </p>
            <p>
              <strong>2.1 Personal Information</strong>: When you visit our website, we may collect certain information about you, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and other contact details</li>
              <li>Billing information and transaction details</li>
              <li>Company name and job title</li>
              <li>User preferences and settings</li>
              <li>Feedback and survey responses</li>
            </ul>
            
            <p>
              <strong>2.2 Log Data</strong>: We automatically collect information that your browser sends whenever you visit our website. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to our processing of your personal information</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals due to the following reasons:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>By email: kzenbusinesses@gmail.com</li>
              <li>By phone: +91 9729921189</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
