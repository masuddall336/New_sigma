import React, { useState } from 'react'
import banner from "../../../../public/automotive/automotive.jpg"
import best_automotive_engine_oil from "../../../../public/automotive/best-automotive-engine-oil-in-bangladesh.webp"
import motorcycle_engine_oil_sm from "../../../../public/automotive/motorcycle-engine-oil-sm.jpg"
import three_wheeler_engine_oil from "../../../../public/automotive/three-wheeler-engine-oil.png"
import passenger_car_engine_oil from "../../../../public/automotive/passenger-car-engine-oil.jpg"
import light_duty_engine_oil from "../../../../public/automotive/light-duty-engine-oil.jpg"
import heavy_duty_engine_oil from "../../../../public/automotive/heavy-duty-engine-oil.jpg"
// icon
import { IoHome } from "react-icons/io5";
import { NavLink } from 'react-router';
import { FaArrowRightLong } from "react-icons/fa6";

const Automotive = () => {
    const [toggleQuc, setToggoleQuc] = useState('first');
    const handleToggleQuc = (targeted_quc) => {
        setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

        requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY })
        })
    }
    return (
        <>
            <div>
                <div className='h-[15vh] md:h-[40vh]'>
                    {/* header Part Banner */}
                    <section id='header' className='relative h-[15vh]  md:h-[40vh] ' style={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',   // stops repeat
                        backgroundSize: 'cover',         // make it cover full section
                        backgroundPosition: 'center',    // center the image
                    }}>
                        <div className='absolute left-[10%] top-[30%] sm:top-[30%] md:top-[38%] lg:top-[35%] w-[90%] md:w-[70%]'>
                            <h1 className=' py-[3px] pl-3 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] bg-no-repeat bg-[linear-gradient(93deg,rgba(0,39,118,.67)_0%,#fff0_50%)]  top-[36%] left-[10%]'>Automotive</h1>
                        </div>
                    </section>
                </div>
                {/* path */}
                <section className='bg-[#fff] border-b-1 pl-10 sm:pl-0 border-[#00000059]'>
                    <div id='navigation_path' className='max-w-[1080px] mx-auto bg-[#fff] text-[#000] text-sm  py-4'>
                        <ul className='flex gap-3 items-center'>
                            <div className='flex gap-1 items-center'>
                                <IoHome />
                                <NavLink to='/'> <li>Home</li></NavLink>
                            </div>
                            <em className='italic'><span>/</span>Automotive</em>
                        </ul>
                    </div>
                </section>
                {/* About Sigma Oil Industries Led. */}
                <section className='bg-[#fff]  py-10'>
                    <div className='  max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='text-[#032e5b] text-3xl font-bold  '>
                            <h2>Best automotive Engine Oil in Bangladesh | Car lubricant oil</h2>
                        </div>
                        <p className='text-[#404040] pb-5 pt-2 '>Drive smart. Drive strong. Drive with Sigma.</p>
                        <div className='flex flex-col   md:flex-row gap-8 items-center justify-between'>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <p className='text-[#404040]  pt-3 leading-7 text-justify'>Are you looking for genuine automotive engine oil in Bangladesh? Sigma Oil Industries Ltd makes high-quality engine oils for all types of vehicles. We have oils for <strong>motorbikes, cars, three-wheelers, light-duty vans, buses,</strong> and <strong>heavy trucks.</strong> Our engine oils are made with quality additives and modern technology to keep engines clean, smooth, and running longer.</p>
                                    <p className='text-[#404040]  pt-3 leading-7 text-justify'>Sigma Oil Industries Ltd’s <strong>premium automotive oil</strong> categories are the best options for quality automotive engines in Bangladesh. We have been providing you with quality oil that boosts the overall performance of your engine. You can always trust our <strong>automotive oils</strong> for driving in all road conditions, all year round.</p>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Get A Price Quote</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={best_automotive_engine_oil} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*Our range of Engine Oils in Bangladesh */}
                <section className='bg-[#F5F5F5]  py-10'>
                    <div className='  max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='text-[#032e5b] text-3xl font-bold  '>
                            <h2>Our range of Engine Oils in Bangladesh</h2>
                        </div>
                        <p className='text-[#404040] pb-5 pt-2 '>Sigma Oil Industries Ltd offers different types of <a className='underline text-[#006cdd] hover:text-[#fd7e14] transition-all duration-400' href="">engine oils in Bangladesh.</a> Our oils are made for motorbikes, cars, three-wheelers, light-duty vans, buses and heavy trucks. Each type is made to match the engine's needs and give better performance. We have the right engine oil for you, no matter what you drive.</p>
                        <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={motorcycle_engine_oil_sm} alt="" />
                            </div>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Motorcycle Engine Oil</h2>
                                    <p className='text-[#404040]  pt-3 leading-7 text-justify'>Our <a className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]' href="">motorbike engine oils</a> are specially designed for 4-stroke engines used in Bangladeshi road conditions. We have been producing supreme quality motorcycle engine oils and have achieved greater assurance from our motorbike riders. Whether you’re a daily commuter or a performance enthusiast, SOIL motorcycle oil ensures:</p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Excellent thermal and oxidation stability</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Smooth clutch performance and gear shifting</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Extended engine life in both city and highway rides</span>
                                                </li>
                                            </div>
                                            <div className='pt-2'>
                                                <h2 className='text-[#032e5b] text-[1.2em] font-bold  pb-1'>Viscosity Grade:</h2>
                                                <div>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>Available in SAE 20W-50, 20W-40, 10W-30</span>
                                                    </li>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>API SM, JASO-MA-2 certified</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Explore Motorcycle Engine Oil</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Three-Wheeler Engine Oil*/}
                <section className='bg-[#fff]  py-10'>
                    <div className=' max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='flex flex-col md:flex-row gap-8 items-center justify-between'>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Three-Wheeler Engine Oil</h2>
                                    <p className='text-[#404040] pb-5 pt-2 '>As an international standard engine oil manufacturer, SOIL serves the purpose of high performance in automotive engines. Designed for the high-load, high-heat demands of <a className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]' href=""> three-wheeler vehicles</a> (CNG, auto-rickshaws), our engine oil ensures:</p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Superior wear protection</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Clean engine internals with anti-sludge formulation</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Consistent performance in stop-and-go traffic</span>
                                                </li>
                                            </div>
                                            <div className='pt-2'>
                                                <h2 className='text-[#032e5b] text-[1.2em] font-bold  pb-1'>Viscosity Grade:</h2>
                                                <div>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>Available in SAE 20W-50, 20W-40, 10W-30</span>
                                                    </li>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>Suitable for both petrol and CNG engines</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Get Three-Wheeler Oil</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={three_wheeler_engine_oil} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*Three-Wheeler Engine Oil*/}
                <section className='bg-[#F5F5F5]  py-10'>
                    <div className=' max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={passenger_car_engine_oil} alt="" />
                            </div>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Passenger Car Engine Oil</h2>
                                    <p className='text-[#404040] pb-5 pt-2 '>If you need a fully synthetic, extra-efficient, non-detergent motor engine oil with high mileage, we have the solution for you. <a href="" className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]'  >SOIL’s passenger car oils provide:</a></p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Maximum engine cleanliness and low-temperature startup</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>High mileage performance</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Excellent protection in all weather conditions</span>
                                                </li>
                                            </div>
                                            <div className='pt-2'>
                                                <h2 className='text-[#032e5b] text-[1.2em] font-bold  pb-1'>Viscosity Grade:</h2>
                                                <div>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>Options: 0w-20, 5W-30, 20W-50 </span>
                                                    </li>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>API SP/GF-6</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Buy Passenger Car Engine Oil</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Light-Duty Engine Oil*/}
                <section className='bg-[#fff]  py-10'>
                    <div className='  max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='flex flex-col  md:flex-row gap-8 items-center justify-between'>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Light-Duty Engine Oil</h2>
                                    <p className='text-[#404040] pb-5 pt-2 '>Sigma Oil Industries Ltd is a leading lubricant company that manufactures and sells super-quality light-duty premium engine oil. Our <a href="" className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]'  >light-duty engine oils</a> are ideal for small vans, pickups, and SUVs. Developed using high-quality base oils and imported additives, they ensure:</p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Enhanced fuel efficiency</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Strong anti-corrosion protection</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Long drain intervals for cost-effective maintenance</span>
                                                </li>
                                            </div>
                                            <div className='pt-2'>
                                                <h2 className='text-[#032e5b] text-[1.2em] font-bold  pb-1'>Viscosity Grade:</h2>
                                                <div>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>SAE 15W-40, 20W-50, Mineral & Synthetic Blend</span>
                                                    </li>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>Meets OEM standards</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Check Light-Duty Engine Oils</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={light_duty_engine_oil} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*Heavy-Duty Engine Oil*/}
                <section className='bg-[#F5F5F5] py-10'>
                    <div className='  max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={heavy_duty_engine_oil} alt="" />
                            </div>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Heavy-Duty Engine Oil</h2>
                                    <p className='text-[#404040] pb-5 pt-2 '>Heavy-duty diesel engines demand heavy-duty protection, and the best quality engines require the best oils available on the market. <a href="" className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]'  > SOIL Oil’s heavy-duty oils</a> are built for high-temperature, high-pressure applications, including trucks, buses, and construction vehicles. <br /> Features:</p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Excellent viscosity control</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Detergent-dispersant technology for cleaner engines</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Reliable performance in long-haul and industrial use</span>
                                                </li>
                                            </div>
                                            <div className='pt-2'>
                                                <h2 className='text-[#032e5b] text-[1.2em] font-bold  pb-1'>Viscosity Grade:</h2>
                                                <div>
                                                    <li className=" text-[#404040] flex items-center">
                                                        <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                            <span className=''>■</span>
                                                        </span>
                                                        <span>SAE 15W-40, 20W-50</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className='mt-5'>
                                        <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold'>Buy Heavy-Duty Engine Oil</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Why choose Sigma Oil Industries Ltd?*/}
                <section className='bg-[#fff] py-10'>
                    <div className='  max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div className='flex flex-col  md:flex-row gap-8 items-center justify-between'>
                            <div id="right_about" className='flex-1'>
                                <div >
                                    <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Why choose Sigma Oil Industries Ltd?</h2>
                                    <p className='text-[#404040] pb-5 pt-2 '><strong>Sigma Oil Industries Ltd</strong> has been <strong>supplying a variety of automotive</strong> oils for the convenience of automotive riders. We aim to give you a better product that is also fuel-efficient in nature. You should pick our automotive engine oil for the following reasons:</p>
                                    <div className='pt-3'>
                                        <ul className=" flex flex-col gap-2  ">
                                            <div>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Blended with top-grade base oils</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Global-standard additives.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>API, SAE, and JASO certified oils.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Protects your engine from corrosion.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Keeps engines cleaner with better efficiency.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Delivers long-lasting engine performance.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Boosts lubrication with advanced additives.</span>
                                                </li>
                                                <li className=" text-[#404040] flex items-center">
                                                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                                        <span className=''>■</span>
                                                    </span>
                                                    <span>Extends engine life with regular use.</span>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={heavy_duty_engine_oil} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Trusted by mechanics, loved by drivers */}
                <section className='bg-[#F5F5F5] py-10'>
                    <div className='max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div>
                            <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Why choose Sigma Oil Industries Ltd?</h2>
                            <p className='text-[#404040] pb-5 pt-2 '>Sigma Oil Industries Ltd is the go-to choice for garages, vehicle owners, and fleet managers across Bangladesh. Trust Sigma Oil Industries Ltd,  <a href="https://www.sigma-oil.com/" className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]'  >the leading automotive engine oil supplier in Bangladesh.</a> We provide top-quality & high-performance lubricants that keep your engine running smoother and longer.</p>
                        </div>
                        <div>
                            <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Contact us for Bulk or Custom Engine Oil orders</h2>
                            <p className='text-[#404040] pb-5 pt-2 '>Do you need a large amount of engine oil or a special type? Sigma Oil Industries Ltd can help. We supply quality oils to shops, garages, and businesses in Bangladesh. Contact us for good prices and fast service.</p>
                        </div>
                        <div className='mt-2'>
                            <a href="tel:+88-01700-760430" className='bg-[#1A88F8] px-3 py-2 rounded-[3px] uppercase font-bold'>Call us now: +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/* FAQs about Automotive Engine Oil */}
                <section className='bg-[#fff] py-10'>
                    <div className='max-w-[1080px] px-5 md:px-0 mx-auto'>
                        <div>
                            <h2 className='text-[#032e5b] text-[1.5em] font-bold'>FAQs about Automotive Engine Oil</h2>
                        </div>
                        <section className=' bg-[#fff] pt-5'>
                            <div className='flex flex-col gap-2 '>
                                {/* First */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer  w-full'>
                                    <div onClick={() => handleToggleQuc('first')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'first' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>What is the best engine oil for motorbikes in Bangladesh?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "first" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "first" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>SOIL 20W-40 motorcycle engine oil is ideal for most 4-stroke bikes in Bangladesh. It ensures smooth gear shifting and better mileage.</p>
                                    </div>
                                </div>
                                {/* Second */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('second')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'second' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> How often should I change engine oil?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "second" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "second" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>Change bike oil every 1,500–2,000 km. For cars, change it every 4,000–6,000 km or check your car’s guide.</p>
                                    </div>
                                </div>
                                {/* Thied */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('thied')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'thied' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Can I use the same oil for cars and motorcycles? <FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "thied" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "thied" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>No. Motorcycle oils are formulated for wet clutches and higher RPMs, while car oils are made for different engine demands.</p>
                                    </div>
                                </div>
                                {/* Forth */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('forth')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'forth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Where can I buy Sigma automotive engine oils?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "forth" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "forth" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>We offer competitive prices without compromising the quality of products.</p>
                                    </div>
                                </div>
                                {/* Fifth */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('fifth')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'fifth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Wide Variety of Products<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "fifth" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "fifth" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>You can purchase from our authorized dealers or directly from our website. Contact us to find a dealer near you.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Automotive
