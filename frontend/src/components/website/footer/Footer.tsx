import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Logo */}
        <div>
          <h2 className="text-2xl font-bold">YourCompany</h2>
          <p className="mt-2 text-sm">Innovate. Automate. Elevate.</p>
          <div className="flex space-x-4 mt-4">
            <IconBrandFacebook className="text-xl cursor-pointer hover:text-gray-400" />
            <IconBrandTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            <IconBrandLinkedin className="text-xl cursor-pointer hover:text-gray-400" />
            <IconBrandInstagram className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Blog</li>
            <li>Product Updates</li>
            <li>Demo Tour</li>
            <li>Become an Affiliate</li>
            <li>Careers</li>
            <li>Service Status</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Integrations</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>GDPR</li>
          </ul>
        </div>

        {/* Comparison */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Comparison</h3>
          <ul className="space-y-2 text-sm">
            <li>Ocoya vs Hootsuite</li>
            <li>Ocoya vs Buffer</li>
            <li>Ocoya vs Sprout Social</li>
            <li>Ocoya vs Later</li>
            <li>Ocoya vs MeetEdgar</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
}
