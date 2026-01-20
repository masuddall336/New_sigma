import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import './navbar.css'
import icon from '../../public/icons/sigma-oil-logo.png'
import { NavLink } from "react-router";
import { useRef, useState } from "react";
const Navbar = () => {
    const [value, setValue] = useState(null);
    const [valueSub, setValueSub] = useState(null);
    const handle_sub_menu = (menu) => {
        setValue(prev => (prev === menu ? null : menu));
    };
    const handle_sub_menu_sub = (menu) => {
        setValueSub(prev => (prev === menu ? null : menu));
    };
    let [openHide, setOpenHight] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0)
    // let hideAndOpenMenu = (value) => {
    //     setOpenHight(value);
    // }
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 70) {
            setOpenHight(false); // swipe left → close
        }
    };


    return (
        <>
            <div id="nav" className="flex items-center justify-between  px-5 bg-[#002776] py-2 ">
                <div onClick={() => setOpenHight(true)} id="Responsive_icon" className="relative ">
                    <IoReorderThreeOutline id="threeLine" />
                </div>
                {/* Overlay (click outside to close) */}
                <div
                    onClick={() => setOpenHight(false)}
                    className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40
                    ${openHide ? "opacity-100 visible" : "opacity-0 invisible"}`}
                ></div>
                {/* Responsive Nav */}
                <div id="responsive_nav" className={`fixed top-0 overflow-scroll left-0 h-screen w-[75%] md:w-[45%] bg-[#032E5B] z-50
                        transform transition-transform duration-500 ease-in-out
                        ${openHide ? "translate-x-0" : "-translate-x-full"}`}>
                    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onClick={() => setOpenHight(false)} id="cross_icon" className="absolute right-3 top-2">
                        <ImCross id="cross_icon" />
                    </div>
                    <div id="responsive_icon" className="w-[40%] mx-auto pt-[5%]">
                        <img src={icon} alt="Compnay logo" />
                    </div>
                    <div className="border-b-1 border-[#4c5f8c] pt-7 w-[95%] mx-auto"></div>
                    <ul className="responsive_ul relative">
                        <li className="h-10"></li>
                        <NavLink to='/automotive'>
                            <li className={`flex  justify-between items-center relative  ${value === "Automotive" ? "" : ""}`}>Automotive
                                <div onClick={() => handle_sub_menu('Automotive')} >
                                    {
                                        value === "Automotive" ? <TiMinus /> : <FaPlus />
                                    }
                                </div>
                            </li>
                        </NavLink>
                        <div>
                            {
                                value === "Automotive" ? <ul id="" className='z-10  bg-[#0A1D31]'>
                                    <li className="relative flex justify-between items-center" >Motorcycle
                                        <div onClick={() => handle_sub_menu_sub('motorcycle')} >
                                            {
                                                valueSub === "motorcycle" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "motorcycle" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Soil
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Sigma</li>
                                                <li>Naf Arab</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative flex justify-between items-center" >Three Wheeler
                                        <div onClick={() => handle_sub_menu_sub('threeWheeler')} >
                                            {
                                                valueSub === "threeWheeler" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "threeWheeler" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Soil
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Sigma</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative flex justify-between items-center" >Passenger Car
                                        <div onClick={() => handle_sub_menu_sub('PassengerCar')} >
                                            {
                                                valueSub === "PassengerCar" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "PassengerCar" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Soil
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Sigma</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative flex justify-between items-center" >Light Duty
                                        <div onClick={() => handle_sub_menu_sub('lightDuty')} >
                                            {
                                                valueSub === "lightDuty" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "lightDuty" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Sigma
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Soil</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative flex justify-between items-center" >Heavy Duty
                                        <div onClick={() => handle_sub_menu_sub('HeavyDuty')} >
                                            {
                                                valueSub === "HeavyDuty" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "HeavyDuty" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Sigma
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Soil</li>
                                            </ul> : ""
                                        }
                                    </div>
                                </ul> : ""
                            }
                        </div>
                        {/* second menu */}
                        <li className={`flex justify-between items-center transition-all duration-300 relative  ${value === "Automotive" ? "" : ""}`}>Industrial
                            <div onClick={() => handle_sub_menu('Industrial')} >
                                {
                                    value === "Industrial" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Industrial" ? <ul id="" className=" z-10 bg-[#0A1D31] w-[100%]">

                                    <li className="relative relative flex justify-between items-center">Soil
                                        <div onClick={() => handle_sub_menu_sub('industrialSoil')} >
                                            {
                                                valueSub === "industrialSoil" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "industrialSoil" ? <ul className="bg-[#245a94]">
                                                <li className="relative">GGO 626
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>GGo-727</li>
                                                <li>HOH Series</li>
                                                <li>Hyraulic Oil</li>
                                                <li>HCO</li>
                                                <li>Hydro Compressor Oil</li>
                                                <li>T & C</li>
                                                <li>Industrial Gear Oil</li>
                                                <li>Heat Transfer Oil</li>
                                                <li>Ornate Do-1000</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative relative flex justify-between items-center">Sigma
                                        <div onClick={() => handle_sub_menu_sub('industrialSigma')} >
                                            {
                                                valueSub === "industrialSigma" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "industrialSigma" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Sigma Super Fleet
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>HOA Series</li>
                                                <li>CO Series</li>
                                                <li>Compressor Oil</li>
                                                <li>Sigma Machine Oil</li>
                                                <li>Industrial Gear Oil</li>
                                                <li>Hydraulic Oil AW</li>
                                            </ul> : ""
                                        }
                                    </div>
                                </ul> : ""
                            }
                        </div>
                        <li className={`flex justify-between items-center relative  transition-all duration-300 ${value === "Industrial" ? '' : ''}`}>Marine
                            <div onClick={() => handle_sub_menu('Marine')} >
                                {
                                    value === "Marine" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Marine" ? <ul id="" className=" z-10 bg-[#0A1D31]">
                                    <li className="relative">Merin Engin Oil
                                        <div id="top_arrow" className="absolute top-[-12px]">
                                            <TiArrowSortedUp />
                                        </div>
                                    </li>
                                    <li>Cylinder Oil</li>
                                    <li className="relative relative flex justify-between items-center">Sigma
                                        <div onClick={() => handle_sub_menu_sub('marine_sigma')} >
                                            {
                                                valueSub === "marine_sigma" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "marine_sigma" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Fleet, SAE-30, 40, 50, API: CF/SF
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                            </ul> : ""
                                        }
                                    </div>
                                </ul> : ""
                            }
                        </div>
                        <li className={`flex justify-between items-center relative transition-all duration-300 ${value === "Marine" ? '' : ''}`}>Agriculture
                            <div onClick={() => handle_sub_menu('Agriculture')} >
                                {
                                    value === "Agriculture" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Agriculture" ? <ul id="" className=" bg-[#0A1D31] relative w-[100%]">
                                    <li className="relative relative flex justify-between items-center">Sigma
                                        <div onClick={() => handle_sub_menu_sub('agriculture_sigma')} >
                                            {
                                                valueSub === "agriculture_sigma" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "agriculture_sigma" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Power HD
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Turbo Super 2020</li>
                                                <li>Active</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative relative flex justify-between items-center">Naf Arab
                                        <div onClick={() => handle_sub_menu_sub('agriculture_NafArab')} >
                                            {
                                                valueSub === "agriculture_NafArab" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "agriculture_NafArab" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Classic
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative relative flex justify-between items-center">Soil
                                        <div onClick={() => handle_sub_menu_sub('agriculture_soil')} >
                                            {
                                                valueSub === "agriculture_soil" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "agriculture_soil" ? <ul className="bg-[#245a94]">
                                                <li className="relative">Ornate Max
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Ornate</li>
                                            </ul> : ""
                                        }
                                    </div>
                                </ul> : ""
                            }
                        </div>
                        <li className={`flex justify-between items-center relative transition-all duration-300 ${value === "Agriculture" ? '' : ''}`}>Gear & Transmission
                            <div onClick={() => handle_sub_menu('Gear')} >
                                {
                                    value === "Gear" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Gear" ? <ul id="" className="z-10 bg-[#0A1D31] w-[100%]">
                                    <li className="relative relative flex justify-between items-center">Soil
                                        <div onClick={() => handle_sub_menu_sub('gear_soil')} >
                                            {
                                                valueSub === "gear_soil" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "gear_soil" ? <ul className="bg-[#245a94]">
                                                <li className="relative">ATF DEX-IIIH
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>MP Gear</li>
                                                <li>Auto Gear DEX-III H</li>
                                                <li>Multipurpose Gear Oil</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li className="relative relative flex justify-between items-center">Sigma
                                        <div onClick={() => handle_sub_menu_sub('gear_sigma')} >
                                            {
                                                valueSub === "gear_sigma" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "gear_sigma" ? <ul className="bg-[#245a94]">
                                                <li className="relative">EP Gear Oil
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>ATF Type-A</li>
                                                <li>ATF DEX-III</li>
                                                <li>Super Gear Oil</li>
                                                <li>Auto Gear Type-A</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li>Naf Arab</li>
                                </ul> : ""
                            }
                        </div>
                        <li className={`flex justify-between items-center relative transition-all duration-300  ${value === "Gear" ? '' : ''}`}>Specialized
                            <div onClick={() => handle_sub_menu('Specialized')} >
                                {
                                    value === "Specialized" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Specialized" ? <ul id="" className="z-10 relative bg-[#0A1D31] w-[100%]">
                                    <li>Naf Arab
                                        <div id="top_arrow" className="absolute top-[-12px]">
                                            <TiArrowSortedUp />
                                        </div>
                                    </li>
                                    <li>Sigma</li>
                                </ul> : ""
                            }
                        </div>
                        <li className={`flex justify-between items-center relative transition-all duration-300  ${value === "Specialized" ? '' : ''}`}>Corporate
                            <div onClick={() => handle_sub_menu('Corporate')} >
                                {
                                    value === "Corporate" ? <TiMinus id="" className="" /> : <FaPlus id="" />
                                }
                            </div>
                        </li>
                        <div>
                            {
                                value === "Corporate" ? <ul id="" className="z-[100%] bg-[#0A1D31] w-[100%]">
                                    <li className="relative relative flex justify-between items-center">Corporate Profile
                                        <div onClick={() => handle_sub_menu_sub('corporateProfile')} >
                                            {
                                                valueSub === "corporateProfile" ? <TiMinus /> : <FaPlus />
                                            }
                                        </div>
                                    </li>
                                    <div>
                                        {
                                            valueSub === "corporateProfile" ? <ul className="bg-[#245a94]">
                                                <li className="relative">History
                                                    <div id="" className="absolute top-[-11px] submenu_top_arrow z-30">
                                                        <TiArrowSortedUp className='' />
                                                    </div>
                                                </li>
                                                <li>Commitment</li>
                                                <li>OUr Philosophy</li>
                                            </ul> : ""
                                        }
                                    </div>
                                    <li>Management Team</li>
                                    <li>Awards & Affiliation</li>
                                    <li>Career Opportunity</li>
                                    <li>Hours & Location</li>
                                    <li>Mission</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul> : ""
                            }
                        </div>
                    </ul>
                </div>


                {/* main nav */}
                <NavLink className="company_logo w-17">
                    <img id="company_logo" src={icon} alt="" />
                </NavLink>
                <nav className=" pr-2 lg:flex-1">
                    <ul id="main_nav" className="flex text-sm justify-end">
                        <NavLink to='automotive' className="flex items-center" >
                            <li id="automotive" className="relative flex items-center py-[29%] px-1">Automotive
                                <ul id="" className="automotive_sub absolute  bg-[#FF6319] text-[#fff] p-[2%] w-[250%]">
                                    <TiArrowSortedUp className="top_arrow absolute top-[-11.5%] left-[29%] text-[#FF6319] text-4xl" />
                                    <NavLink to="/automotive/motorcycle">
                                        <li className="relative motorcycle">Motorcycle
                                            <ul className="motorcycle_sub absolute w-[100%] left-[100%] text-[#fff] top-[-5%] pt-[2px] bg-[#FF6319] hidden p-[0.5%]">
                                                <li>Sigma</li>
                                                <li>Soil</li>
                                                <li>Naf Arab</li>
                                            </ul>
                                        </li>
                                    </NavLink>
                                    <li className="relative three-wheeler">Three Wheeler
                                        <ul className="threewheeler_sub absolute w-[100%] left-[100%] text-[#fff] top-[-1px] bg-[#FF6319] hidden p-[0.5%]">
                                            <li>Sigma</li>
                                            <li>Soil</li>
                                        </ul>
                                    </li>
                                    <li className=" passenger_car relative ">Passenger Car
                                        <ul className="passengercar_sub absolute w-[100%] right-[100%] text-[#fff] top-[-1px] bg-[#FF6319] hidden p-[0.5%]">
                                            <li>Sigma</li>
                                            <li>Soil</li>
                                        </ul>
                                    </li>
                                    <li className="light_duty relative">Light Duty
                                        <ul className="lightduty_sub absolute w-[100%] right-[100%] text-[#fff] top-[-1px] bg-[#FF6319] hidden p-[0.5%]">
                                            <li>Soil</li>
                                            <li>Sigma</li>
                                        </ul>
                                    </li>
                                    <li className="heavy_duty relative">Heavy Duty
                                        <ul className="heavyduty_sub absolute w-[100%] right-[100%] text-[#fff] top-[-1px] bg-[#FF6319] hidden p-[0.5%]">
                                            <li>Soil</li>
                                            <li>Sigma</li>
                                        </ul>
                                    </li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl" />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="industrial" className="flex relative py-[35%] px-1">Industrial
                                <ul id="industrial_sub" className="absolute bg-[#FF6319] text-[#fff] p-[2%] pt-[3%] w-[250%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" industirall_top_arrow absolute text-[#FF6319] top-[-27%] left-[26%] opacity-0 text-4xl" />
                                    <li className="industrial_soil relative">Soil
                                        <ul className="industrial_soil_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>GGO 626</li>
                                            <li>GGo-727</li>
                                            <li>HOH Series</li>
                                            <li>Hyraulic Oil</li>
                                            <li>HCO</li>
                                            <li>Hydro Compressor Oil</li>
                                            <li>T & C</li>
                                            <li>Industrial Gear Oil</li>
                                            <li>Heat Transfer Oil</li>
                                            <li>Ornate Do-1000</li>
                                        </ul>
                                    </li>
                                    <li className="industrial_sigma relative">Sigma
                                        <ul className="industrial_sigma_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>Sigma Super Fleet</li>
                                            <li>HOA Series</li>
                                            <li>CO Series</li>
                                            <li>Compressor Oil</li>
                                            <li>Sigma Machine Oil</li>
                                            <li>Industrial Gear Oil</li>
                                            <li>Hydraulic Oil AW</li>
                                        </ul>
                                    </li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl industrial_top_arrow" />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="merin" className="flex relative py-[49%] px-1">Marine
                                <ul id="marin_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[3%] w-[350%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" marin_top_arrow absolute top-[-19%] left-[20%] text-[#FF6319] opacity-0 text-4xl" />
                                    <li>Merin Engin Oil</li>
                                    <li>Cylinder Oil</li>
                                    <li className="marine_sigma relative">Sigma
                                        <ul className="marine_sigma_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>Fleet, SAE-30, 40, 50, API: CF/SF</li>
                                        </ul>
                                    </li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="Agriculture" className="flex relative py-[31%] px-1">Agriculture
                                <ul id="agriculture_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[2%] w-[250%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" agriculture_top_arrow absolute top-[-18%] opacity-0 left-[28%] text-[#FF6319]  text-4xl" />
                                    <li className="agriculture_sigma relative">Sigma
                                        <ul className="agriculture_sigma_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>Power HD</li>
                                            <li>Turbo Super 2020</li>
                                            <li>Active</li>
                                        </ul>
                                    </li>
                                    <li className="agriculture_nafarab relative">Naf Arab
                                        <ul className="agriculture_nafarab_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>Classic</li>
                                        </ul>
                                    </li>
                                    <li className="agriculture_soil relative">Soil
                                        <ul className="agriculture_soil_sub absolute right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] bg-[#FF6319] text-[#fff] hidden">
                                            <li>Ornate Max</li>
                                            <li>Ornate</li>
                                        </ul>
                                    </li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex gap-0 items-center  " >
                            <li id="gear_transmission" className="flex relative py-[19%] p-1">Gear & Transmission
                                <ul id="gear_sub" className=" absolute bg-[#FF6319] text-[#fff] pl-[1%] pr-[1%] pt-[1.5%] pb-[1%] w-[150%] top-[100%] left-0">
                                    <TiArrowSortedUp className=" gear_top_arrow absolute  left-[47%] top-[-18.5%] text-[#FF6319] opacity-0  text-4xl" />
                                    <li className="gear_soil relative">Soil
                                        <ul className="gear_soil_sub absolute bg-[#FF6319] right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] text-[#fff] hidden">
                                            <li>ATF DEX-IIIH</li>
                                            <li>MP Gear</li>
                                            <li>Auto Gear DEX-III H</li>
                                            <li>Multipurpose Gear Oil</li>
                                        </ul>
                                    </li>
                                    <li className="gear_sigma relative">Sigma
                                        <ul className="gear_sigma_sub absolute bg-[#FF6319] right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] text-[#fff] hidden">
                                            <li>EP Gear Oil</li>
                                            <li>ATF Type-A</li>
                                            <li>ATF DEX-III</li>
                                            <li>Super Gear Oil</li>
                                            <li>Auto Gear Type-A</li>
                                        </ul>
                                    </li>
                                    <li>Naf Arab</li>
                                </ul>
                            </li>
                            <MdKeyboardArrowDown className="text-xl " />
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="specialized" className="flex px-1 py-[31%] relative">Specialized
                                <ul id="specialized_sub" className="absolute left-0 top-[100%] bg-[#FF6319] w-[200%] p-[1%] text-[#fff]">
                                    <TiArrowSortedUp className=" specialized_top_arrow absolute  left-[37%] top-[-29.5%] opacity-0 text-[#FF6319]  text-4xl" />
                                    <li>Naf Arab</li>
                                    <li>Sigma</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl " />
                            </li>
                        </NavLink>
                        <NavLink className="flex items-center" >
                            <li id="corporate" className="flex px-1 py-[33%] relative">Corporate
                                <ul id="corporate_sub" className="absolute text-[#fff] p-[1%] pt-[2%] bg-[#FF6319] top-[100%] right-0 w-[250%]">
                                    <TiArrowSortedUp className=" corporate_top_arrow absolute left-[57%] top-[-7.2%] text-[#FF6319]  text-4xl" />
                                    <li className="corporate_corporateprofile relative">Corporate Profile
                                        <ul className="corporate_corporateprofile_sub absolute bg-[#FF6319] right-[100%] top-[-4%] w-[100%] pt-[0.5%] p-[1%] text-[#fff] hidden">
                                            <li>History</li>
                                            <li>Commitment</li>
                                            <li>OUr Philosophy</li>
                                        </ul>
                                    </li>
                                    <li>Management Team</li>
                                    <li>Awards & Affiliation</li>
                                    <li>Career Opportunity</li>
                                    <li>Hours & Location</li>
                                    <li>Mission</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                                <MdKeyboardArrowDown className="text-xl" />
                            </li>
                        </NavLink>
                    </ul>
                </nav>

                <div className="flex  items-center justify-end gap-3  border-l-1 pl-2 mr-3 border-dotted">
                    <a id="call_icon" href="tel:+88-01700-760430">
                        <div className=" bg-[#FF6319] p-2 rounded">
                            <IoCallSharp />
                        </div>
                    </a>
                    <div id="call" className="flex flex-col">
                        <h2>Call Us Today</h2>
                        <a href="tel:+88-01700-760430" aria-label="Phone Number"> <span>+88-01700-760430</span></a>
                    </div>
                    <div id="social_icons" className="flex flex-col gap-3">
                        <a href="https://www.facebook.com/sigmaoilindustriesltd/" target="_black"><FaFacebookF className="social_icons " /></a>
                        <a href="https://www.youtube.com/@soil_bd" target="_blank"> <FaYoutube className="social_icons  " /></a>

                    </div>
                </div>
            </div >
        </>

    )
}

export default Navbar
