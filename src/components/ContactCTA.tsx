import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png"; // ✅ adjust path if needed

const offices = [
  {
    city: "Agartala (Head Office)",
    address: "Agartala, Tripura 799001, India",
    phone: "+91 70056 82736",
  },
  {
    city: "Udaipur",
    address: "Udaipur, Gomati District, Tripura",
    phone: "+91 98565 52051",
  },
  {
    city: "Dhalai",
    address: "Ambassa, Dhalai District, Tripura",
    phone: "+91 94367 96691",
  },
  {
    city: "North Tripura",
    address: "Dharmanagar, North Tripura",
    phone: "+91 60095 56712",
  },
  {
    city: "Unokoti",
    address: "Kailashahar, Unokoti District",
    phone: "+91 60091 78064",
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="bg-[#1f2933] text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-gray-700">

          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="HR Ignite Innovative India Pvt. Ltd."
              className="w-44 mb-4 transition hover:opacity-90"
            />

            <p className="text-gray-400 leading-relaxed">
              Trusted solar & renewable energy solutions for residential and
              commercial customers. Powering a cleaner and sustainable future.
            </p>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Our Offices
            </h4>

            <ul className="space-y-3">
              {offices.map((office, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex items-center justify-between w-full text-left font-medium hover:text-green-400 transition"
                  >
                    <span>{office.city}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-1 space-y-2 text-sm text-gray-400">
                      <div className="flex gap-2">
                        <MapPin className="w-4 h-4 text-green-400 mt-1" />
                        <span>{office.address}</span>
                      </div>

                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-green-400" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 70056 82736</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 70051 28028</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>igniteinnovativeindialtd.com</span>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Subscribe
            </h4>

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#111827] border border-gray-600 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-green-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 p-2 rounded-md transition">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex items-start gap-2 mt-4 text-sm">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree with the{" "}
                <span className="text-green-400 cursor-pointer">
                  terms & conditions
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} HR Ignite Innovative India Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
