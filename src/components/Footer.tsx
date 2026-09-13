import logoText from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-10 w-auto"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-4">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">PRODUCT</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <a href="#technologies" className="hover:text-pink-500">
                Home
              </a>
              <a href="#projects" className="hover:text-pink-500">
                Technologies
              </a>
              <a href="#stack" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">COMPANY</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">LEGAL</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2026 Dev Stack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}