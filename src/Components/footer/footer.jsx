import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import footerData from "../../data/footer.json";




const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="relative">
                <h3 className="text-white text-lg font-semibold mb-2">{section.title}</h3>
                <div className="w-12 h-0.5 bg-red-500"></div>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Section */}
          <div className="space-y-4">
            <div className="relative">
              <h3 className="text-white text-lg font-semibold mb-2">{footerData.socialMedia.title}</h3>
              <div className="w-12 h-0.5 bg-red-500"></div>
            </div>
            <div className="flex space-x-3">
              {footerData.socialMedia.platforms.map((platform, index) => {
                const IconComponent = socialIcons[platform.icon]
                return (
                  <a
                    key={index}
                    href={platform.href}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    aria-label={platform.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
