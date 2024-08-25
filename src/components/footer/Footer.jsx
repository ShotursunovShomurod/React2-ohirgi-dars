import { FaHeadphonesAlt, FaTelegramPlane } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import paymentGatewayImage from "@/assets/app2.png";
import googlePlayImage from "@/assets/app1.png";
import headerImage from "@/assets/Logo.png";
import { CiClock1 } from "react-icons/ci";
import appStoreImage from "@/assets/app.png";

const Footer = () => {
  return (
    <footer className="container mt-10">
      <div>
        <img className="mb-5" src={headerImage} alt="Header" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6  mb-8">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] text-[#253D4E]">
            Awesome grocery store website template
          </p>
          <ContactInfo
            icon={<IoLocationOutline />}
            text="Address: 5171 W Campbell Ave"
          />
          <ContactInfo
            icon={<FaHeadphonesAlt />}
            text="undefined Kent, Utah 53127 United State"
          />
          <ContactInfo
            icon={<FaTelegramPlane />}
            text="Email: sale@Nest.com"
          />
          <ContactInfo
            icon={<CiClock1 />}
            text="Hours: 10:00 - 18:00, Mon - Sat"
          />
        </div>

        <FooterColumn title="About Us" links={["Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center", "Careers"]} />

        <FooterColumn className="lg:flex hidden" title="Account" links={["Sign In", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details", "Compare Products"]} />

        <FooterColumn className="md:flex lg:flex hidden" title="Corporate" links={["Become a Vendor", "Affiliate Program", "Farm Business", "Help Ticket", "Farm Careers", "Our Suppliers"]} />

        <div className="flex flex-col gap-5">
          <b className="text-[22px] text-[#253D4E] font-[700]">Install App</b>
          <p className="text-[14px] text-[#253D4E]">From App Store or Google Play</p>
          <div className="flex gap-2">
            <img className="w-[90px]" src={appStoreImage} alt="App Store" />
            <img className="w-[90px]" src={googlePlayImage} alt="Google Play" />
          </div>
          <p className="text-[14px] text-[#253D4E]">Secured Payment Gateways</p>
          <div>
            <img src={paymentGatewayImage} alt="Payment Gateways" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-start gap-[8px]">
    <span className="pt-[5px]">{icon}</span>
    <p className="text-[#253D4E] text-[14px]">{text}</p>
  </div>
);

const FooterColumn = ({ title, links, className }) => (
  <div className={`flex flex-col gap-5 ${className}`}>
    <b className="text-[22px] text-[#253D4E] font-[700]">{title}</b>
    {links.map((link, index) => (
      <p key={index} className="text-[14px] text-[#253D4E]">{link}</p>
    ))}
  </div>
);

export default Footer;