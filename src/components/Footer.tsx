// import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer">
        <div className="footer-details">
          <div className="footer-details--offers">
            <div className="supplierOffer">
              <p>
                List your Company <br />
                <span>For Free</span>
              </p>

              <button>Join as Supplier</button>
            </div>
            <div className="buyerOffer">
              <p>
                Looking to <br />
                <span>Source Products?</span>
              </p>

              <button>Post Buying Request</button>
            </div>
          </div>
          <div className="footer-details--lists">
            <div className="mb-3">
              <ul>
                <h4 className="listHeading">Get you know Us</h4>
                <li>About Pepagora</li>
                <li>Leadership & Advisors</li>
                <li>Impact at Pepagora</li>
                <li>Innovation at Pepagora</li>
                <li>Media & Press</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                <h4 className="listHeading">Trust Center</h4>
              </ul>
              <ul>
                <h4 className="listHeading">Blog</h4>
                <li>Sales</li>
                <li>Sourcing</li>
                <li>Marketing</li>
                <li>Product Updates</li>
              </ul>
            </div>
            <div className="mb-3">
              <ul>
                <h4 className="listHeading">Industries</h4>
                <li>Apparel & Fashion</li>
                <li>Industrial Equipment & Machinery</li>
                <li>Home & Lifestyle</li>
                <li>Health & Personal Care</li>
                <li>Construction & Real Estate</li>
                <li>Electronics & Electrical</li>
                <li>Automotive & Transport</li>
                <li>Raw Materials & Chemicals</li>
                <li>Sports & Entertainment</li>
                <li>Tools & Hardware</li>
                <li>Packaging & Printing</li>
                <li>Office Supplies & Equipment</li>
                <li>Service & Support</li>
              </ul>
            </div>
            <div className="mb-3">
              <ul>
                <h4 className="listHeading">Business Tools</h4>
                <li>Post Sell Offer</li>
                <li>Create your Business Website</li>
                <li>Manage Your Leads</li>
                <li>Manage your Customers</li>
                <li>Post a Buying Request (RFQ)</li>
                <li>Get Instant Supplier Match</li>
                <li>Become a Verified Member</li>
              </ul>
              <ul>
                <h4 className="listHeading">Partners</h4>
                <li>Affiliate Program</li>
                <li>Channel Partner </li>
              </ul>
            </div>
            <div className="mb-3">
              <ul>
                <h4 className="listHeading">Pricing <span>Starting from 10$ per month</span></h4>
              </ul>
              <ul>
                <h4 className="listHeading">
                  Help & Legal
                </h4>
                <li>Help Center</li>
                <li>FAQ’s</li>
                <li>Refund & Cancellation</li>
                <li>Data Protection Guidelines</li>
                <li>Terms & Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="logoFooter">
          <Image
            src="/images/footerlogo.png"
            alt="Logo"
            width={381}
            height={73}
          />
        </div>

        <div className="footerBottom">
          <div className="footerBottom-links">
            <div className="footerBottom-links--sites">
              <ul className="socialMedia">
                <li>
                  <Image
                    src="/icons/Facebook.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/icons/Twitter.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/icons/YouTube.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/icons/Instagram.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/icons/LinkedIn.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </li>
              </ul>

              <ul className="language flex items-center flex-wrap text-gray-700 text-sm">
                <li className="font-semibold mr-2">Global sites:</li>
                {[
                  "English",
                  "Español",
                  "Deutsch",
                  "Français",
                  "Português",
                  "Bahasa",
                  "Indonesia",
                  "العربية",
                ].map((lang, index, arr) => (
                  <li key={lang} className="flex items-center cursor-pointer">
                    <span>{lang}</span>
                    {index !== arr.length - 1 && (
                      <span className="mx-2 text-gray-400">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footerBottom-links--info">
              <p>Get tips, trends & trade updates straight to your inbox. </p>
              <div className="newsletterSubscription">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footerBottom-ends">
            <div className="footerBottom-ends--serving">
              <Image
                src="/icons/star-footer.svg"
                alt="Logo"
                width={16}
                height={16}
              />
              <span>Serving : India</span>
            </div>
            <div className="footerBottom-ends--copyrights">
              <p>
                Copyrights © {currentYear} Pepagora.com All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
