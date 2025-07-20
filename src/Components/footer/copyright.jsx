export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="border-t border-gray-700 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright Text */}
          <div className="text-gray-400 mb-2 text-sm">© {currentYear} <b>LumaShop</b>. All rights reserved.</div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
