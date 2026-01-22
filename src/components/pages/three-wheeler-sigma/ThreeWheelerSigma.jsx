import React, { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import drop from '../../../../public/slider/drop.jpg'
import banner from '../../../../public/three-wheeler/three-wheeler-sigma-banner.jpg'

const ThreeWheelerSigma = () => {
    const allDatas = useLoaderData();
    const three_wheeler_sigma = allDatas.three_wheeler[3].Sigma_Branded_Oil_for_Three_Wheelers;

    const [toggleQuc, setToggoleQuc] = useState('first');
    const handleToggleQuc = (targeted_quc) => {
        setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

        requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY })
        })
    }
    return (
        <div>
            <div>
                <header>
                    <div className='h-[17vh] md:h-[50vh]'>
                        {/* header Part Banner */}
                        <section id='header' className='relative h-[17vh]  md:h-[50vh] ' style={{
                            backgroundImage: `url(${banner})`,
                            backgroundRepeat: 'no-repeat',   // stops repeat
                            backgroundSize: 'cover',         // make it cover full section
                            backgroundPosition: 'center',    // center the image
                        }}>
                            <div className='absolute left-[10%] top-[30%] sm:top-[30%] md:top-[38%] lg:top-[35%] w-[90%] md:w-[70%]'>
                                <h1 className=' py-[3px] pl-3 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] bg-no-repeat bg-[linear-gradient(93deg,rgba(0,39,118,.67)_0%,#fff0_50%)]  top-[36%] left-[10%]'>Sigma</h1>
                            </div>
                        </section>
                    </div>
                    {/* path */}
                    <section className='bg-[#fff] border-b-1  border-[#00000059]'>
                        <div id='navigation_path' className='max-w-[1060px] mx-auto pl-10 sm:pl-0 bg-[#fff] text-[#000] text-sm  py-4 '>
                            <ul className='flex gap-3 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <IoHome />
                                    <NavLink to='/'> <li>Home</li></NavLink>
                                </div>
                                <NavLink to="/automotive">
                                    <em className='italic'><span>/</span>Automotive</em>
                                </NavLink>
                                <NavLink to='/automotive/three-wheeler'><em className='italic'><span>/</span>Three Wheeler</em></NavLink>
                                <em className='italic'><span>/</span>Sigma</em>
                            </ul>
                        </div>
                    </section>
                </header>
                {/*Premium Performance */}
                <section className='py-10 bg-[#fff]'>
                    <div className='text-center'>
                        <img className='w-[1.5%] mx-auto' src={drop} alt="" />
                        <em className='font-bold text-[#ad0000]'>Premium Performance</em>

                        <h2 className='text-[#032e5b] text-[2.2rem] font-bold tracking-wider '>Best Three-Wheeler Engine Oil - Sigma</h2>
                        <p className='text-[#404040] max-w-[1000px] mx-auto py-3 px-2 sm:px-0'>Sigma Oil Industries Limited introduces Sigma branded premium three-wheeler engine oil. Use our Sigma branded oil to supercharge your three-wheelers and explore the power of quality.</p>
                        <NavLink className=' text-xs text-[#0056b3] hover:text-[#ff6319] uppercase font-[600] transition-all duration-300'>Ask for Three-Wheeler Vehicle Engine Oil Pricing ⤏</NavLink>
                    </div>
                </section>
                {/*SOIL Branded Engine Oil for Three-Wheeler Vehicles */}
                <section className='bg-[#ececec] py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Sigma Branded Oil for Three-Wheelers</h2>
                        <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>When you are searching for premium quality engine oil for your three-wheeler vehicles and that would give a consistent performance with low consumption, sigma branded engine oil may serve your vehicle a very great experience.</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                            {
                                three_wheeler_sigma.map(data => {
                                    return (
                                        <div className='flex flex-col flex-1 border-1 border-[#aca9a9] bg-[#fffdfd] p-5 rounded shadow-[#5e5858]'>
                                            <NavLink>
                                                <img className='w-full object-cover ' src={data.product_img} alt={data.product_name} />
                                                <h2 className='text-[#002776] inline hover:text-[#ff6319] text-[1.3rem] transition-all duration-300 ' dangerouslySetInnerHTML={{ __html: data.product_name }}></h2>
                                            </NavLink>
                                            <div className='flex flex-col flex-1'>
                                                <p className='text-[#404040] flex-1'>{data.product_description}</p>
                                                <div className='mt-5 '>
                                                    <NavLink className=' text-xs text-[#0056b3] hover:text-[#ff6319] uppercase font-[600] transition-all duration-300'>{data.product_button}</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className='pt-10'>
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] text-[0.9rem] sm:text-[1rem] uppercase font-bold text-[#fff] '>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>

                {/*Why Choose Our Three-Wheeler Engine Oil?*/}
                <section className='bg-[#fff]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto py-4'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Why Choose Our Three-Wheeler Engine Oil?</h2>
                        <div className='border-b-1 border-[#032e5b] w-[10%] mx-auto'></div>
                        <p className='text-[#404040] text-[1rem] py-10 text-center text-sm/7 '>The quality of the engine oil bears significant importance in terms of maximizing the three-wheeler engine capacity. These are the following features that make our oil stand-out:</p>
                        <div>
                            {/* Why Chose Us */}
                            <div className='flex flex-col gap-2 '>
                                {/* First */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer pt-5 w-full'>
                                    <div onClick={() => handleToggleQuc('first')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'first' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> Excellent Fuel Efficiency<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "first" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                                  transition-all duration-500 ease-linear  ${toggleQuc === "first" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>Our three-wheeler engine oil is designed to provide excellent fuel efficiency. Using our products, your three-wheeler will run for longer periods and provide the necessary cost benefits.</p>
                                    </div>
                                </div>
                                {/* Second */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('second')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'second' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> Superior Engine Protection<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "second" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                                  transition-all duration-500 ease-linear  ${toggleQuc === "second" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>After carefully formulating from hydrocracking base stocks, we use a special additive package in our oils that give the engine protection against wear, rust, corrosion, deposits, and sludge formation.</p>
                                    </div>
                                </div>
                                {/* Thied */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('thied')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'thied' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Low Maintenance Cost<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "thied" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                                  transition-all duration-500 ease-linear  ${toggleQuc === "thied" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>Sigma’s oils are formulated to low carbon build-up in engines. Thus you will have low emission in three-wheeler engines, that will uniformly reduce maintenance costs.</p>
                                    </div>
                                </div>
                                {/* Forth */}
                                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                    <div onClick={() => handleToggleQuc('forth')} id='question' className='flex'>
                                        <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'forth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Extended Engine Life<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "forth" ? "rotate-90" : ""}`} /></h3>
                                    </div>
                                    <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                                  transition-all duration-500 ease-linear  ${toggleQuc === "forth" ? "max-h-44 " : "max-h-0"}`}>
                                        <p className='text-[#404040] py-2'>Our solutions cover a series of three-wheeler engine oils that provide superb performance. Excellent frictional properties of our oils ensure longer engine life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ThreeWheelerSigma
