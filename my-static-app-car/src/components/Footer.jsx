// components/Footer.js
import { fb, insta, twitter, linkedin } from "../assets";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-[-4px] py-16">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between mb-8 px-8">
          <div className="flex-1">
            <h4 className="text-white font-semibold">For Business</h4>
            <a
              href="/employer"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Employer</p>
            </a>
            <a
              href="/Carsplan"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Cars Plan</p>
            </a>
            <a
              href="/individual"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Individual</p>
            </a>
          </div>

          <div className="flex-1">
            <h4 className="text-white font-semibold">Resources</h4>
            <a
              href="/resource"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Resource center</p>
            </a>
            <a
              href="/resource"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Testimonials</p>
            </a>
            <a
              href="/resource"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">STV</p>
            </a>
          </div>

          <div className="flex-1">
            <h4 className="text-white font-semibold">Partners</h4>
            <a
              href="/employer"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Mercedes</p>
            </a>
          </div>

          <div className="flex-1">
            <h4 className="text-white font-semibold">Company</h4>
            <a
              href="/about"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">About</p>
            </a>
            <a
              href="/press"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Press</p>
            </a>
            <a
              href="/career"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Career</p>
            </a>
            <a
              href="/contact"
              className="text-gray-500 hover:text-fuchsia-600 transition block"
            >
              <p className="font-semibold">Contact</p>
            </a>
          </div>

          <div className="flex-1">
            <h4 className="text-white font-semibold">Coming soon on</h4>
            <div className="flex">
              <img src={fb} alt="Facebook" className="w-8 h-8 mr-2" />
              <img src={twitter} alt="Twitter" className="w-8 h-8 mr-2" />
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 mb-8" />

        <div className="flex justify-between items-start">
          <div className="text-white">
            <p className="font-semibold">
              &copy;{new Date().getFullYear()} Afarmach Hakim. All rights
              reserved
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/terms" className="text-white">
              <p className="font-semibold">Terms & conditions</p>
            </a>
            <a href="/privacy" className="text-white">
              <p className="font-semibold">Privacy</p>
            </a>
            <a href="/security" className="text-white">
              <p className="font-semibold">Security</p>
            </a>
            <a href="/cookie" className="text-white">
              <p className="font-semibold">Cookie Declaration</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
