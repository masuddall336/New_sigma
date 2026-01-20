import React from 'react'
import banner from "../../../../public/automotive/automotive.jpg"
import best_automotive_engine_oil from "../../../../public/automotive/best-automotive-engine-oil-in-bangladesh.webp"
// icon
import { IoHome } from "react-icons/io5";
import { NavLink } from 'react-router';

const Automotive = () => {
    return (
        <>
            <div>
                <div className='h-[30vh] md:h-[60vh]'>
                    {/* header Part Banner */}
                    <section id='header' className='relative h-[30vh]  md:h-[60vh] ' style={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',   // stops repeat
                        backgroundSize: 'cover',         // make it cover full section
                        backgroundPosition: 'center',    // center the image
                    }}>
                        <div className='absolute left-[10%] top-[40%] sm:top-[32%] md:top-[40%] lg:top-[35%] w-[90%] md:w-[70%]'>
                            <h1 className=' py-[3px] pl-3 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] bg-no-repeat bg-[linear-gradient(93deg,rgba(0,39,118,.67)_0%,#fff0_50%)]  top-[36%] left-[10%]'>Automotive</h1>
                        </div>
                    </section>
                </div>
                {/* path */}
                <section>
                    <div id='navigation_path' className='pl-[7%] bg-[#fff] text-[#000] text-sm border-b-1 border-[#00000059] py-4'>
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
                    <div className='  max-w-[1200px] px-5 mx-auto'>
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
                                    <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase'>Get A Price Quote</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div id="left_about" className='w-[12/12] md:w-6/12'>
                                <img src={best_automotive_engine_oil} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Automotive
