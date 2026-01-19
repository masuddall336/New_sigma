import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { GiFactory } from "react-icons/gi";
import './footer.css'


import footer_logo from '../../public/logo/sigma-oil-footer-logo.png'
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className="footer_wrapper">
        <div id="top" className="flex flex-wrap gap-10 xl:gap-0 justify-left sm:justify-center md:justify-between  py-5 w-[95%] mx-auto">
          <div id="first_part_top" className="my-auto">
            <img className="w-[80%]" src={footer_logo} alt="" />
            <div className="flex gap-2 py-5 items-center">
              <h3 className="text-xl mr-1">Follow us:</h3>
              <div id="social_icons" className="flex items-center gap-5">
                <a className="" href=""><FaFacebookF /></a>
                <a href=""><CiLinkedin /></a>
                <a href=""><FaSquareInstagram /></a>
                <a href=""> <FaYoutube /></a>
              </div>
            </div>
          </div>
          {/* ===== */}
          <div id="second_part_top">
            <h2 className="font-bold pb-3 text-xl">Our Oil</h2>
            <ul className=" flex flex-col gap-2 pl-5 marker:text-[#FF6319] marker:content-['■']">
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Automotive</li></NavLink>
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Industrial</li></NavLink>
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Marine</li></NavLink>
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Agriculture</li></NavLink>
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Gear & Transmission</li></NavLink>
              <NavLink><li className="pl-2 text-[#bebebe] hover:text-[#fff] transition-4000 transition-all">Specialized</li></NavLink>
            </ul>
          </div>
          {/* ====== */}
          <div id="third_part">
            <h2 className="font-bold pb-3 text-xl">Head OFFICE</h2>
            <div id="location_head_office" className="flex gap-1">
              <CiLocationOn />
              <a className="text-[#bebebe] hover:text-[#fff] transition-4000 transition-all" href="https://g.page/SOIL_BD?share" rel="nofollow noopener" target="_blank">Sena Kalyan Bhaban, 14th Floor,
                <br />
                195, Motijheel C/A, Dhaka-1000,
                <br />
                Bangladesh</a>
            </div>
            <div id="call_num" className="flex  pt-5 gap-1">
              <IoCall />
              <div className="flex flex-col   gap-4">
                <a className="text-[#bebebe] hover:text-[#fff] transition-4000 transition-all" href="tel:+88-01700-760430" title="Call Us Now" rel="unfollow">+88-01700-760430</a>
                <a className="text-[#bebebe] hover:text-[#fff] transition-4000 transition-all" href="tel:+88-02-223382144" title="Call Us Now" rel="unfollow">+88-02-223382144</a>
                <a className="text-[#bebebe] hover:text-[#fff] transition-4000 transition-all" href="tel:+88-02-223382446" title="Call Us Now" rel="unfollow">+88-02-223382446</a>
              </div>
            </div>
          </div>
          {/* ====== */}
          <div id="foth_par">
            <h2 className="font-bold pb-3 text-xl">FACTORY LOCATION</h2>
            <div id="factory_location" className="flex gap-1">
              <GiFactory />
              <a className="text-[#bebebe] hover:text-[#fff] transition-4000 transition-all" href="https://goo.gl/maps/grXXa3tLw2GtWoLPA" rel="nofollow noopener" target="_blank">Kobaga
                (Asian Highway Road)
                <br />
                Mahajzampur, Sonargaon
                <br />
                Narayangonj, Bangladesh</a>
            </div>
          </div>
        </div>
        <div id="bottom" className="flex flex-wrap gap-5 xl:gap-40 items-center justify-center border-t-1  py-1 xl:py-5 w-[95%] mx-auto">
          {/* Left side */}
          <div>
            <ul id="footer_last_ul" className="flex flex-wrap justify-center gap-5">
              <NavLink className='text-[#bebebe] hover:text-[#fff] transition-4000 transition-all'><li className="">Corporate</li></NavLink>
              <NavLink className='text-[#bebebe] hover:text-[#fff] transition-4000 transition-all'><li>Contact Us</li></NavLink>
              <NavLink className='text-[#bebebe] hover:text-[#fff] transition-4000 transition-all'><li>Privacy Policy</li></NavLink>
              <NavLink className='text-[#bebebe] hover:text-[#fff] transition-4000 transition-all'><li>Webmail</li></NavLink>
              <NavLink className='text-[#bebebe] hover:text-[#fff] transition-4000 transition-all'><li>Sitemap</li></NavLink>
            </ul>
          </div>
          {/* Right side */}
          <div className="text-center lg:text-left">
            <details>
              <summary className="cursor-pointer">Copyright © 2026 Sigma Oil Industries Ltd | All rights reserved.</summary>
              <p>All the content and creatives on this website are the property of Sigma Oil</p>
            </details>
            <p>Developed by <a className="text-sm text-[#686161]" href="">Abdullah Al - Masud</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
