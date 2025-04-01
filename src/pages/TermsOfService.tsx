
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and K-Zen ("we," "us," or "our"), concerning your access to and use of our website and services. You agree that by accessing the website and/or services, you have read, understood, and agree to be bound by all of these Terms of Service.
            </p>
            <p>
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE WEBSITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
            <p>
              K-Zen provides various technology services including but not limited to AI & Machine Learning, Business Intelligence, Data Management, Cybersecurity, Cloud Solutions, and Custom Development. By engaging our services, you acknowledge that results may vary based on your specific requirements, existing systems, and other factors outside our control.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. User Representations</h2>
            <p>
              By using the website and services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You have the legal capacity to accept these Terms of Service;</li>
              <li>You are at least 18 years of age;</li>
              <li>You will not access the website through automated or non-human means;</li>
              <li>You will not use the website for any illegal or unauthorized purpose;</li>
              <li>Your use of the website will not violate any applicable law or regulation.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
            <p>
              The Content and Marks are provided on the website "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. User Data</h2>
            <p>
              We will maintain certain data that you transmit to the website for the purpose of managing the performance of the website, as well as data relating to your use of the website. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the website.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Payment Terms</h2>
            <p>
              For services requiring payment, you agree to provide current, complete, and accurate purchase and account information. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cancellation and Refunds</h2>
            <p>
              Service cancellations and refund requests will be handled according to the specific terms outlined in your service contract. General services may be eligible for refunds within 14 days of purchase if the service has not been substantially performed.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE AND SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the website or services, your breach of these Terms of Service, or your violation of any law or the rights of a third party.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. K-Zen and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of these Terms at any time or for any reason at our sole discretion. We will provide notice of any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
