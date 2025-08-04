import PoliciesPage from "../../components/PoliciesPage";
export default function PrivacyPolicyPage() {
  return (
    <PoliciesPage title="Privacy Policy" backLink="/policies">
      <p className="mb-8 text-zinc-400 text-sm"><em>Effective: August 4, 2025</em></p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">1. About Our Company</h2>
      <p className="mb-5 text-zinc-200">
        We at <strong>Your Company Name Pvt. Ltd.</strong> (“we”, “our”, or “us”) are committed to protecting your privacy and keeping your information confidential, safe, and secure. This Privacy Policy describes how we collect, use, and protect information about you when you use our website and related services (“Service”).
      </p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">2. Information We Collect</h2>
      <ul className="list-disc pl-7 mb-5 text-zinc-200">
        <li>
          <strong>Personal Information:</strong> Name, email, contact details, or other identifiers provided via forms or registration.
        </li>
        <li>
          <strong>Usage & Technical Data:</strong> IP address, browser type, device data, time and duration of website use, pages visited (via cookies or analytics tools).
        </li>
        <li>
          <strong>Cookies:</strong> Small files stored on your device to improve your experience, analyze site traffic, and remember preferences. You can configure your browser to reject cookies.
        </li>
      </ul>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">3. How We Use Your Information</h2>
      <ul className="list-disc pl-7 mb-5 text-zinc-200">
        <li>To provide, update, and maintain the website and its services.</li>
        <li>To respond to your requests, communicate with you, and send important updates.</li>
        <li>To improve site performance, analyze traffic, and enhance user experience.</li>
        <li>To protect against fraud, illegal activity, and to comply with legal obligations.</li>
      </ul>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">4. Sharing & Disclosure</h2>
      <ul className="list-disc pl-7 mb-5 text-zinc-200">
        <li>We may share data with trusted service providers as needed (e.g., analytics, hosting), under strict confidentiality agreements.</li>
        <li>We may disclose information if required by law or to protect our rights and safety.</li>
        <li>We do <strong>not</strong> sell your personal information to third parties.</li>
      </ul>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">5. Data Security & Retention</h2>
      <p className="mb-5 text-zinc-200">
        We use industry-standard security measures to protect your data. We only retain information as long as necessary for the purposes described, or as required by law. No internet service is 100% secure, so please use strong passwords and protect your credentials.
      </p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">6. Your Choices & Rights</h2>
      <ul className="list-disc pl-7 mb-5 text-zinc-200">
        <li>You may access, correct, or request deletion of your personal information by contacting us.</li>
        <li>You can disable cookies in your browser, but some website functionality may be affected.</li>
      </ul>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">7. Children’s Privacy</h2>
      <p className="mb-5 text-zinc-200">
        Our website is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided us personal information, please contact us for removal.
      </p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">8. Links to Other Websites</h2>
      <p className="mb-5 text-zinc-200">
        Our site may contain links to third-party sites. We are not responsible for the privacy practices of those sites. Please review their privacy policies separately.
      </p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">9. Changes to this Policy</h2>
      <p className="mb-5 text-zinc-200">
        We may update this Privacy Policy from time to time. We will post any changes on this page, and changes are effective as of the “Effective” date above.
      </p>
      <h2 className="mt-10 mb-3 text-xl font-semibold text-primary">10. Contact Us</h2>
      <p className="text-zinc-200">
        For questions, concerns, or requests regarding your privacy, contact us at: <br />
        <a href="mailto:privacy@yourcompany.com" className="underline text-primary">privacy@yourcompany.com</a>
      </p>
    </PoliciesPage>
  );
}
