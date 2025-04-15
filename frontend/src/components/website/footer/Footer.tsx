import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t-2 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Company Logo */}
        <div>
          <img
            src="/logo/ES_logo.png"
            alt="YourCompany Logo"
            className="h-16 w-auto"
          />
          <p className="mt-2 text-sm">Innovate. Automate. Elevate.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/helpcenter" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/professionals" className="hover:underline">
                Product Updates
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:underline">
                Become an Affiliate
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/integrations" className="hover:underline">
                Integrations
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>

            <li>
              <Link to="/terms-of-services" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} Equip Scale Strategies LLC. All Rights
        Reserved.
      </div>
    </footer>
  )
}
