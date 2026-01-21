import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import banner from '../../../../public/sigma/motorcycle-sigma.jpg'

// icon
import drop from '../../../../public/slider/drop.jpg'
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
const Sigma = () => {
   const allData = useLoaderData();
      const sigma_branded_oil_for_your_bike_Engine = allData.sigma_branded_oil_for_your_bike_Engine;

  const [toggleQuc, setToggoleQuc] = useState('first');
  const handleToggleQuc = (targeted_quc) => {
    setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY })
    })
  }
  return (
    <div>
      <header>
        <div className='h-[15vh] md:h-[40vh]'>
          {/* header Part Banner */}
          <section id='header' className='relative h-[15vh]  md:h-[40vh] ' style={{
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
          <div id='navigation_path' className='max-w-[1220px] mx-auto pl-10 sm:pl-0 bg-[#fff] text-[#000] text-sm  py-4 '>
            <ul className='flex gap-3 items-center'>
              <div className='flex gap-1 items-center'>
                <IoHome />
                <NavLink to='/'> <li>Home</li></NavLink>
              </div>
              <NavLink to="/automotive">
                <em className='italic'><span>/</span>Automotive</em>
              </NavLink>
              <NavLink to='/automotive/motorcycle'>
                <em className='italic'><span>/</span>Motrocycle</em>
              </NavLink>
              <em className='italic'><span>/</span>Sigma</em>
            </ul>
          </div>
        </section>
      </header>
      <main>
        {/* Premium Motorcycle Engine Oil - SOIL */}
        <section className='py-10 bg-[#fff]'>
          <div className='text-center'>
            <img className='w-[1%] mx-auto' src={drop} alt="" />
            <em className='font-bold text-[#ad0000]'>Super Quality</em>
            <h2 className='text-[#032e5b] text-[2rem] font-bold tracking-wider'>Premium Motorcycle Engine Oil - Sigma</h2>
            <p className='text-[#404040] max-w-[1000px] mx-auto py-5'>Sigma Oil Industries Limited Introduces Sigma branded premium motorcycle engine oil. Use our Sigma branded engine oil to supercharge your motorbike and explore the power of quality.</p>
            <NavLink className=' text-xs text-[#0056b3] hover:text-[#ff6319] uppercase font-[600] transition-all duration-300'>Contact us for Sigma Engine Oil ⤏</NavLink>
          </div>
        </section>
        {/* Soil-branded engine oil for your Motorcycle */}
        <section className='bg-[#ececec] py-[2%]'>
          <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto   py-4 flex flex-col items-center'>
            <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Sigma Branded Oil for Motorcycle Engines:</h2>
            <div className='border-[1px] border-[#032e5b] w-[10%]'></div>
            <p className='text-[#404040] text-[1rem] py-3  text-center text-base/7'>Our multi-grade engine oil "Sigma Gold" offers better engine protection at low and high temperatures as it maintains optimum viscosity across the whole engine operating temperature range. It is universal multi-grade engine oil for your motorcycle, passenger car, van, and light truck with petrol engines, naturally aspirated diesel engines and LPG fueled engines.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
              {
                sigma_branded_oil_for_your_bike_Engine.map(data => {
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
        {/*Faqs about motorcycle engine oil*/}
        <section className='bg-[#fff]  py-[2%]'>
          <div id='navigation_path' className='max-w-[1080px] px-5 md:px-0 mx-auto py-4'>
            <h2 className='text-[#032e5b] text-[2.3rem] text-center font-bold'>Why Choose Sigma Brand Motorcycle Engine Oil</h2>
            <div className='border-b-1 border-[#032e5b] w-[10%] mx-auto'></div>
            <p className='text-[#404040] text-[1rem] py-10 text-center text-sm/7 '>Sigma Oil Industry has been manufacturing many types of motorcycle oil for the convenience of the motorcycle riders. Our aim is to give you a better product that is also fuel-efficient in nature. You should pick our motorcycle engine oil for the following reasons:</p>
            <div>
              {/* Why Chose Us */}
              <div className='flex flex-col gap-2 '>
                {/* First */}
                <div id='quc' className='w-100% mx-auto cursor-pointer pt-5 w-full'>
                  <div onClick={() => handleToggleQuc('first')} id='question' className='flex'>
                    <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'first' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>  Corrosion Protection<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "first" ? "rotate-90" : ""}`} /></h3>
                  </div>
                  <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                  transition-all duration-500 ease-linear  ${toggleQuc === "first" ? "max-h-44 " : "max-h-0"}`}>
                    <p className='text-[#404040] py-2'>All of our motorcycle engine oils are specially produced for protecting your engines from corrosion.</p>
                  </div>
                </div>
                {/* Second */}
                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                  <div onClick={() => handleToggleQuc('second')} id='question' className='flex'>
                    <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'second' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> Cleaner Engine<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "second" ? "rotate-90" : ""}`} /></h3>
                  </div>
                  <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                  transition-all duration-500 ease-linear  ${toggleQuc === "second" ? "max-h-44 " : "max-h-0"}`}>
                    <p className='text-[#404040] py-2'>Our products are capable of keeping your motorcycle engines cleaner than other products with better efficiencies.</p>
                  </div>
                </div>
                {/* Thied */}
                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                  <div onClick={() => handleToggleQuc('thied')} id='question' className='flex'>
                    <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'thied' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> Longer Performance<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "thied" ? "rotate-90" : ""}`} /></h3>
                  </div>
                  <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                  transition-all duration-500 ease-linear  ${toggleQuc === "thied" ? "max-h-44 " : "max-h-0"}`}>
                    <p className='text-[#404040] py-2'>We have been formulating finer quality engine oil for giving your engine a durable performance.</p>
                  </div>
                </div>
                {/* Forth */}
                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                  <div onClick={() => handleToggleQuc('forth')} id='question' className='flex'>
                    <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'forth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Higher Lubricating Power<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "forth" ? "rotate-90" : ""}`} /></h3>
                  </div>
                  <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                  transition-all duration-500 ease-linear  ${toggleQuc === "forth" ? "max-h-44 " : "max-h-0"}`}>
                    <p className='text-[#404040] py-2'>All of our products are equipped with specialized materials that enhance the lubricating power of your motorcycle.</p>
                  </div>
                </div>
                {/* Fifth */}
                <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
                  <div onClick={() => handleToggleQuc('fifth')} id='question' className='flex'>
                    <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'fifth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}> Prolongs Engine Life<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "fifth" ? "rotate-90" : ""}`} /></h3>
                  </div>
                  <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
                                  transition-all duration-500 ease-linear  ${toggleQuc === "fifth" ? "max-h-44 " : "max-h-0"}`}>
                    <p className='text-[#404040] py-2'>Your motorcycle engine life will surely be extended if you use our motorcycle oils regularly and effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sigma;