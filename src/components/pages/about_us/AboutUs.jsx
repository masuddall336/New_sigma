import React from 'react'
import banner from '../../../../public/about-us/about-us.jpg'
import sigma_oil_history from "../../../../public/about-us/sigma-oil-history.jpg"
import { NavLink } from 'react-router'

// icon
import { IoHome } from "react-icons/io5";


const AboutUs = () => {
    return (
        <>
            <div className='h-[30vh] md:h-[60vh]'>
                {/* header Part Banner */}
                <section id='header' className='relative h-[30vh]  md:h-[60vh] ' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: 'no-repeat',   // stops repeat
                    backgroundSize: 'cover',         // make it cover full section
                    backgroundPosition: 'center',    // center the image
                }}>
                    <div className='absolute left-[10%] top-[40%] sm:top-[32%] md:top-[40%] lg:top-[35%] w-[90%] md:w-[70%]'>
                        <h1 className=' py-[3px] pl-3 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] bg-no-repeat bg-[linear-gradient(93deg,rgba(0,39,118,.67)_0%,#fff0_50%)]  top-[36%] left-[10%]'>Corporate</h1>
                    </div>
                </section>
            </div>
            {/* path */}
            <section>
                <div id='navigation_path' className='pl-[10%] bg-[#fff] text-[#000] text-sm border-b-1 border-[#00000059] py-4'>
                    <ul className='flex gap-3 items-center'>
                        <div className='flex gap-1 items-center'>
                            <IoHome />
                            <NavLink to='/'> <li>Home</li></NavLink>
                        </div>
                        <em className='italic'><span>/</span>Corporate</em>
                    </ul>
                </div>
            </section>
            {/* About Sigma Oil Industries Led. */}
            <section className='bg-[#fff]  py-10'>
                <div className='  w-[80%] mx-auto'>
                    <div className='text-[#032e5b] text-3xl font-bold  text-center'>
                        <h2>About Sigma Oil Industries Limited</h2>
                    </div>
                    <p className='text-[#404040] pt-10 pb-5'><strong> Sigma Oil Industries Limited</strong> established an integrated manufacturing plant with world-class equipment and technology at Sonargaon, Narayanganj. Sigma has placed itself through the outstanding performance characteristics of its products in a wide variety of fields such as vehicles of all types, industrial machines, and other special applications. Highly qualified, trained and skilled people operate the plant and ensure standard quality of products.</p>
                    <div className='flex  gap-8 items-center justify-between'>
                        <div id="left_about" className='w-6/12'>
                            <img src={sigma_oil_history} alt="" />
                        </div>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <ul className=" flex flex-col gap-1 marker:text-[#FF6319] marker:content-['■'] text-[#404040] text-sm">
                                    <NavLink><li className="pl-2 ">Automotive</li></NavLink>
                                    <NavLink><li className="pl-2  ">Industrial</li></NavLink>
                                    <NavLink><li className="pl-2  ">Marine</li></NavLink>
                                    <NavLink><li className="pl-2 ">Agriculture</li></NavLink>
                                    <NavLink><li className="pl-2  ">Gear & Transmission</li></NavLink>
                                    <NavLink><li className="pl-2 ">Specialized</li></NavLink>
                                </ul>
                                <p className='text-[#404040]  pt-3 leading-7'>Semi-automatic blending control system capable of blending high-quality lubricants to fulfill the expanding demand of the industrial and automotive sectors in Bangladesh. Sigma has deployed the latest automation technologies in the filling line to bring about a step-change in productivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
