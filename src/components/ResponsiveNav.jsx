import { TiArrowSortedUp } from "react-icons/ti";

import { NavLink } from 'react-router'

import icon from '../../public/icons/sigma-oil-logo.png'

const ResponsiveNav = () => {
    // let [Name, setMenuName] = useState("");
    const handleClick = (plus_icon, minus_icon, submenu) => {
        // setMenuName(menuName);
        let menuNames = document.getElementById(minus_icon);
        let plus_icons = document.getElementById(plus_icon);
        let sub = document.getElementById(submenu);
        console.log(sub);

        plus_icons.classList.toggle('hidden');
        menuNames.classList.toggle('hidden');

        sub.classList.toggle('hidden');
        sub.classList.toggle('automotive_sub');
    }

    let hideResponsiveNav = () => {
        document.getElementById('responsive_navbar').classList.add('responsive_Nav');
    }

    return (
        <div id="responsive_navbar" className="bg-[#032E5B] p-3 h-full">
            <div onClick={hideResponsiveNav} id="cross_icon" className="absolute top-2 right-2 cursor-pointer">
                <ImCross id="cross_icon" />
            </div>
            <div id="icon" className="">
                <img className="mx-auto" src={icon} width='50%' alt="" />
            </div>
            <span id="border" className="border-b-1 py-2 border-[#4c5f8c] block"></span>
            <nav className="">
                <ul id="main_nav_reszponsvie" className="text-sm justify-end">
                    <NavLink lassName="flex items-center">
                        <li className="relative py-[5%] px-1 flex gap-20 items-center justify-between">Home</li>
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="automotive" className="relative py-[5%] px-1 flex gap-20 items-center justify-between">Automotive

                            <ul id="automotive_sub_responsive" className=" absolute p-[1%] pt-[1.5%]  bg-[#FF6319] text-[#fff]  w-[103%] z-10 hidden ">
                                <TiArrowSortedUp className="top_arrow absolute top-[-11%] left-[29%] text-[#FF6319] text-4xl" />
                                <li className="">Motorcycle</li>
                                <li>Three Wheeler</li>
                                <li>Passenger Car</li>
                                <li>Light Duty</li>
                                <li>Heavy Duty</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_automotive', 'minus_icon_automotive', 'automotive_sub_responsive')} id="plus_icon_automotive" />
                            <TiMinus onClick={() => handleClick('plus_icon_automotive', 'minus_icon_automotive', 'automotive_sub_responsive')} id="minus_icon_automotive" className="hidden" />
                        </li>
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="industrial" className="flex gap-24 items-center justify-between  relative py-[5%] px-1">Industrial
                            <ul id="industrial_sub" className="absolute bg-[#FF6319] text-[#fff] p-[2%] w-[250%] top-[100%] left-0">
                                <TiArrowSortedUp className=" industirall_top_arrow absolute text-[#FF6319] top-[-28%] left-[26%] opacity-0 text-4xl" />
                                <li>Soil</li>
                                <li>Sigma</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_industrial', 'minus_icon_industrial')} id="plus_icon_industrial" />
                            <TiMinus onClick={() => handleClick('plus_icon_industrial', 'minus_icon_industrial')} id="minus_icon_industrial" className="hidden" />
                        </li>
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="merin" className="flex gap-28 items-center justify-between relative py-[5%] px-1">Marine
                            <ul id="marin_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[3%] w-[350%] top-[100%] left-0">
                                <TiArrowSortedUp className=" marin_top_arrow absolute top-[-19%] left-[20%] text-[#FF6319] opacity-0 text-4xl" />
                                <li>Merin Engin Oil</li>
                                <li>Cylinder Oil</li>
                                <li>Sigma</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_marine', 'minus_icon_marine')} id="plus_icon_marine" />
                            <TiMinus onClick={() => handleClick('plus_icon_marine', 'minus_icon_marine')} id="minus_icon_marine" className="hidden" />
                        </li>
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="Agriculture" className="flex gap-21 items-center justify-between relative py-[5%] px-1">Agriculture
                            <ul id="agriculture_sub" className=" absolute bg-[#FF6319] text-[#fff] p-[2%] w-[250%] top-[100%] left-0">
                                <TiArrowSortedUp className=" agriculture_top_arrow absolute top-[-18%] opacity-0 left-[28%] text-[#FF6319]  text-4xl" />
                                <li>Sigma</li>
                                <li>Naf Arab</li>
                                <li>Soil</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_agriculture', 'minus_icon_agriculture')} id="plus_icon_agriculture" />
                            <TiMinus onClick={() => handleClick('plus_icon_agriculture', 'minus_icon_agriculture')} id="minus_icon_agriculture" className="hidden" />
                        </li>
                    </NavLink>
                    <NavLink className="flex gap-3 items-center  " >
                        <li id="gear_transmission" className="flex gap-21 items-center justify-betweenrelative py-[5%] p-1">Gear & Transmission
                            <ul id="gear_sub" className=" absolute bg-[#FF6319] text-[#fff] pl-[1%] pr-[1%] pt-[1.5%] pb-[1%] w-[150%] top-[100%] left-0">
                                <TiArrowSortedUp className=" gear_top_arrow absolute  left-[47%] top-[-18.5%] text-[#FF6319] opacity-0  text-4xl" />
                                <li>Soil</li>
                                <li>Sigma</li>
                                <li>Naf Arab</li>
                            </ul>
                        </li>
                        <FaPlus onClick={() => handleClick('plus_icon_grar', 'minus_icon_gear')} id="plus_icon_grar" />
                        <TiMinus onClick={() => handleClick('plus_icon_grar', 'minus_icon_gear')} id="minus_icon_gear" className="hidden" />
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="specialized" className="flex gap-20 items-center justify-between px-1 py-[5%] relative">Specialized
                            <ul id="specialized_sub" className="absolute left-0 top-[100%] bg-[#FF6319] w-[200%] p-[1%] text-[#fff]">
                                <TiArrowSortedUp className=" specialized_top_arrow absolute  left-[37%] top-[-29.5%] opacity-0 text-[#FF6319]  text-4xl" />
                                <li>Naf Arab</li>
                                <li>Sigma</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_specialized', 'minus_icon_specialized')} id="plus_icon_specialized" />
                            <TiMinus onClick={() => handleClick('plus_icon_specialized', 'minus_icon_specialized')} id="minus_icon_specialized" className="hidden" />
                        </li>
                    </NavLink>
                    <NavLink className="flex items-center" >
                        <li id="corporate" className="flex gap-22 items-center justify-between px-1 py-[5%] relative">Corporate
                            <ul id="corporate_sub" className="absolute text-[#fff] p-[1%] pt-[2%] bg-[#FF6319] top-[100%] right-0 w-[250%]">
                                <TiArrowSortedUp className=" corporate_top_arrow absolute left-[57%] top-[-7.2%] text-[#FF6319]  text-4xl" />
                                <li>Corporate Profile</li>
                                <li>Management Team</li>
                                <li>Awards & Affiliation</li>
                                <li>Career Opportunity</li>
                                <li>Hours & Location</li>
                                <li>Mission</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                            <FaPlus onClick={() => handleClick('plus_icon_corporate', 'minus_icon_corporate')} id="plus_icon_corporate" />
                            <TiMinus onClick={() => handleClick('plus_icon_corporate', 'minus_icon_corporate')} id="minus_icon_corporate" className="hidden" />
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default ResponsiveNav
