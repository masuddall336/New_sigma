import React, { useState } from 'react'
import banner from '../../../../public/motorcycle/motorcycle.jpg'
import drop from '../../../../public/slider/drop.jpg'
import { FaArrowRightLong } from "react-icons/fa6";


// icon
import { IoHome } from "react-icons/io5";
import { NavLink, useLoaderData } from 'react-router';

const Motorcycle = () => {
    const allData = useLoaderData();
    const engine_oil_your_motorcycle = allData.engine_oil_your_motorcycle;
    const soil_brand_motorcycle_oil = allData.soil_brand_motorcycle_oil;
    const sigma_branded_oil_for_your_bike_Engine = allData.sigma_branded_oil_for_your_bike_Engine;
    const Naf_arab_branded_4t_plus_bike_engine_Oil = allData.Naf_arab_branded_4t_plus_bike_engine_Oil;

    const [toggleQuc, setToggoleQuc] = useState('first');
    const handleToggleQuc = (targeted_quc) => {
        setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

        requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY })
        })
    }
    return (
        <>
            <div className=''>
                <div className='h-[30vh] md:h-[40vh]'>
                    {/* header Part Banner */}
                    <section id='header' className='relative h-[30vh]  md:h-[40vh] ' style={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',   // stops repeat
                        backgroundSize: 'cover',         // make it cover full section
                        backgroundPosition: 'center',    // center the image
                    }}>
                        <div className='absolute left-[10%] top-[30%] sm:top-[30%] md:top-[38%] lg:top-[35%] w-[90%] md:w-[70%]'>
                            <h1 className=' py-[3px] pl-3 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] bg-no-repeat bg-[linear-gradient(93deg,rgba(0,39,118,.67)_0%,#fff0_50%)]  top-[36%] left-[10%]'>Motorcycle</h1>
                        </div>
                    </section>
                </div>
                {/* path */}
                <section className='bg-[#fff] border-b-1 pl-5 sm:pl-0 border-[#00000059]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto bg-[#fff] text-[#000] text-sm  py-4 '>
                        <ul className='flex gap-3 items-center'>
                            <div className='flex gap-1 items-center'>
                                <IoHome />
                                <NavLink to='/'> <li>Home</li></NavLink>
                            </div>
                            <NavLink to="/automotive">
                                <em className='italic'><span>/</span>Automotive</em>
                            </NavLink>
                            <em className='italic'><span>/</span>Motrocycle</em>
                        </ul>
                    </div>
                </section>
                {/* Premium Quality */}
                <section className='bg-[#ececec] pl-5 sm:pl-0  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <img className='w-[2%]' src={drop} alt="" />
                        <span className='text-[#ad0000] italic font-bold text-center block' >Premium Quality</span>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Motorcycle engine oil in bangladesh | premium bike oil by Sigma Oil</h2>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'><strong>Sigma Oil Industries Ltd</strong> premium motorcycle engine oil categories are one of the best options for high-quality motorcycle engines in Bangladesh. We have been providing you with quality oil that boosts the overall performance of your bike.</p>
                        <p className='text-[#404040] text-[1rem] text-center text-base/7'>Our bike engine oil brands are gaining popularity among bikers day by day. With high-quality materials, we produce oils that ensure the better performance of your motorcycle engine. You can always count on our motorcycle oils for driving in all road conditions, all year round.</p>
                        <div className='mt-5 '>
                            <NavLink className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] '>Buy Heavy-Duty Engine Oil</NavLink>
                        </div>
                    </div>
                </section>
                {/* Engine oil for your motorcycle */}
                <section className='bg-[#fff]   px-2 py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Engine oil for your motorcycle </h2>
                        <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>We have been producing supreme <a className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]' href="">quality motorcycle engine oils</a> and have achieved greater assurance from motorbike riders. All of our engine oils are produced with the latest technology and generate better performance than similar products in the market. At present, we have SOIL, Sigma & Naf Arab branded motorcycle engine oils, which are presented below:</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5'>
                            {
                                engine_oil_your_motorcycle.map(data => {
                                    return (
                                        <div className='flex flex-col flex-1 border-1 border-[#aca9a9] bg-white p-5 rounded shadow-[#5e5858]'>
                                            <NavLink>
                                                <img className='w-full object-cover ' src={data.product_img} alt={data.product_name} />
                                                <h2 className='text-[#002776] inline hover:text-[#ff6319] text-[1.5rem] transition-all duration-300'>{data.product_name}</h2>
                                            </NavLink>
                                            <div className='flex flex-col flex-1'>
                                                <p className='text-[#404040] flex-1' dangerouslySetInnerHTML={{ __html: data.product_description }}></p>
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
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] text-[0.9rem] sm:text-[1rem]'>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/* Soil-branded engine oil for your Motorcycle */}
                <section className='bg-[#ececec] py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Soil-branded engine oil for your Motorcycle</h2>
                        <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>SOIL engine oil keeps the engine protected, clean, and steady on every ride. The formulation helps the motorcycle respond better, especially during quick acceleration. You get smoother transmission, less strain, and a more confident performance overall. If you want your bike’s engine to deliver its full capability, SOIL supports it better than most regular options.</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                            {
                                soil_brand_motorcycle_oil.map(data => {
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
                {/* Sigma-branded oil for your bike Engine */}
                <section className='bg-[#fff]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Sigma-branded oil for your bike Engine</h2>
                        <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>Our premium engine oils keep the engine protected in both low and high temperatures. The viscosity stays stable throughout the full operating range, so the engine runs without stress. It works as a reliable, universal grade oil that fits most motorcycles and supports consistent performance.</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5'>
                            {
                                sigma_branded_oil_for_your_bike_Engine.map(data => {
                                    return (
                                        <div className='flex flex-col flex-1 border-1 border-[#aca9a9] bg-[#fffdfd] p-5 rounded shadow-[#5e5858]'>
                                            <NavLink>
                                                <img className='w-full object-cover ' src={data.product_img} alt={data.product_name} />
                                                <h2 className='text-[#002776] inline hover:text-[#ff6319] text-[1.3rem] transition-all duration-300 '>{data.product_first_name}<span className='ml-1 text-[1.5rem] font-bold'>{data.product_last_name}</span></h2>
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
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] text-[0.9rem] sm:text-[1rem]'>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/*Naf arab branded 4t plus bike engine Oil*/}
                <section className='bg-[#ececec]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
                        <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Naf arab branded 4t plus bike engine Oil</h2>
                        <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
                        <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>Naf Arab 4T Plus uses power-sustain technology that handles heat and reduces friction, so the engine keeps delivering steady power. You get the acceleration whenever you need it. If you want an engine oil that stays strong for a long time, Naf Arab is a dependable choice.</p>
                        <div className='max-w-[100%] sm:max-w-[30%]'>
                            {
                                Naf_arab_branded_4t_plus_bike_engine_Oil.map(data => {
                                    return (
                                        <div className='  border-1 border-[#aca9a9] bg-[#fffdfd] p-5 rounded shadow-[#5e5858] content-center'>
                                            <NavLink>
                                                <img className=' mx-auto' src={data.product_img} alt={data.product_name} />
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
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] text-[0.9rem] sm:text-[1rem] '>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/*Bike engine oil price in bangladesh*/}
                <section className='bg-[#fff]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto py-4'>
                        <h2 className='text-[#032e5b] text-[1.5rem]  font-bold'>Bike engine oil price in bangladesh</h2>
                        <p className='text-[#404040] text-[1rem] py-3'>The price of our bike engine oils changes from time to time because the market moves, and each grade costs differently. We keep the rates fair, but they do shift based on supply and updates in the industry. If you want the current price for your preferred grade, contact us, and we’ll share today’s exact rate.</p>
                        <div className='pt-5'>
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] text-[0.9rem] sm:text-[1rem] '>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/*Why choose soil, sigma, and naf arab branded engine oils for your Motorcycle?*/}
                <section className='bg-[#fff]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto py-4'>
                        <h2 className='text-[#032e5b] text-[1.5rem]  font-bold'>Why choose soil, sigma, and naf arab branded engine oils for your Motorcycle?</h2>
                        <p className='text-[#404040] text-[1rem] py-3'> <a href="https://www.sigma-oil.com/" className='underline  hover:text-[#fd7e14] transition-all duration-400 text-[#006cdd]'>Sigma Oil Industries</a>  Ltd produces different types of motorcycle oils to meet the needs of everyday riders. We focus on giving you a better-performing product that also helps save fuel. Our goal is simple. Make your ride smoother and more efficient.</p>
                        <div>
                            <ul>
                                <li className=" text-[#404040] flex items-center">
                                    <span className="inline-flex h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-[0.8rem] leading-none">
                                        ■
                                    </span>
                                    <span><strong>Corrosion protection:</strong> All of our bike engine oils are specially produced to protect your engines from corrosion. corrosion.</span>
                                </li>
                                <li className=" text-[#404040] flex ">
                                    <span className="inline-flex h-4 w-4 mt-[2px] items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-[0.8rem] leading-none">
                                        ■
                                    </span>
                                    <span><strong>Cleaner engine:</strong> Our products are capable of keeping your motorcycle engines cleaner than other products, with better efficiencies.</span>
                                </li>
                                <li className=" text-[#404040] flex ">
                                    <span className="inline-flex h-4 w-5 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-[0.8rem] leading-none">
                                        ■
                                    </span>
                                    <span><strong>Longer performance:</strong> Long rides feel smoother when the oil holds up well. That’s why we focus on making motorcycle oil that performs steadily for a long time.</span>
                                </li>
                                <li className=" text-[#404040] flex ">
                                    <span className="inline-flex h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-[0.8rem] leading-none">
                                        ■
                                    </span>
                                    <span><strong>Higher lubricating power:</strong>The oils also give good lubrication. You notice it when the engine runs quietly and doesn’t heat up too fast.</span>
                                </li>
                                <li className=" text-[#404040] flex ">
                                    <span className="inline-flex h-4 w-4.5 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-[0.8rem] leading-none">
                                        ■
                                    </span>
                                    <span><strong>Prolongs engine life: </strong>With regular use, the engine stays in better shape and lasts longer. Riders see the difference over months, not days.</span>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-5'>
                            <a href="tel:+8801700760430" className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold text-[#fff] text-[0.9rem] sm:text-[1rem] '>Call for Details +88-01700-760430</a>
                        </div>
                    </div>
                </section>
                {/*Faqs about motorcycle engine oil*/}
                <section className='bg-[#ececec]  py-[2%]'>
                    <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto py-4'>
                        <h2 className='text-[#032e5b] text-[1.5rem] text-center font-bold'>Faqs about motorcycle engine oil</h2>
                        <p className='text-[#404040] text-[1rem] py-3 text-center'> Most bikes need an oil change every 1,500 to 2,500 km. The interval may shorten if you ride in heavy traffic or carry an extra load. Always check the dipstick or listen for unusual engine noise if you feel unsure.</p>
                        <div>
                            {/* Why Chose Us */}
                                <div className='flex flex-col gap-2 '>
                                    {/* First */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer pt-5 w-full'>
                                        <div onClick={() => handleToggleQuc('first')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'first' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>How often should I change motorcycle engine oil?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "first" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "first" ? "max-h-44 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Most bikes need an oil change every 1,500 to 2,500 km. The interval may shorten if you ride in heavy traffic or carry an extra load. Always check the dipstick or listen for unusual engine noise if you feel unsure.</p>
                                        </div>
                                    </div>
                                    {/* Second */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('second')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'second' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Does bike engine oil affect mileage?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "second" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "second" ? "max-h-44 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Yes, a good quality oil reduces friction and helps the engine run more efficiently. You may notice slightly better fuel economy after switching to a fresh or higher-grade oil. Proper maintenance also supports stable mileage.</p>
                                        </div>
                                    </div>
                                    {/* Thied */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('thied')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'thied' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>How do I know when my bike oil needs changing?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "thied" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "thied" ? "max-h-44 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Look for darker color, rough gear shifts, or louder engine sound. Many riders notice a slight drop in pickup as well. Checking the oil level once every week keeps things simple.</p>
                                        </div>
                                    </div>
                                    {/* Forth */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('forth')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'forth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>What happens if I use low-quality motorcycle oil?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "forth" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "forth" ? "max-h-44 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Look for darker color, rough gear shifts, or louder engine sound. Many riders notice a slight drop in pickup as well. Checking the oil level once every week keeps things simple.</p>
                                        </div>
                                    </div>
                                    {/* Fifth */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('fifth')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'fifth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>What happens if I use low-quality motorcycle oil?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "fifth" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "fifth" ? "max-h-44 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Poor-quality oil breaks down faster and can cause heat buildup. The engine may feel noisy or sluggish. Long-term use can reduce engine life and increase maintenance costs.</p>
                                        </div>
                                    </div>
                                    {/* Sixth */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('sixth')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'sixth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Does motorcycle oil impact gear shifting?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "sixth" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "sixth" ? "max-h-100 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>SYes, oil plays a big role in how smoothly your gears move. When the oil loses thickness, gear changes may feel hard or noisy. Fresh oil often makes shifting quicker and more comfortable.</p>
                                        </div>
                                    </div>
                                    {/* seven */}
                                    <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                                        <div onClick={() => handleToggleQuc('seven')} id='question' className='flex'>
                                            <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'seven' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Can motorcycle oil improve acceleration?<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "seven" ? "rotate-90" : ""}`} /></h3>
                                        </div>
                                        <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                          transition-all duration-500 ease-linear  ${toggleQuc === "seven" ? "max-h-100 " : "max-h-0"}`}>
                                            <p className='text-[#404040] py-2'>Yes, smoother and cleaner oil reduces friction inside the engine. This helps the bike pick up speed more easily. It’s not a huge jump in power, but the improvement is noticeable.</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Motorcycle
