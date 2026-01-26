import React, { useState } from 'react';
import banner from '../../../../public/passenger-car/passenger-car-banner.jpg'
import sae_0w20_api_sp_ilsac_gf_6_engine_oil from '../../../../public/passenger-car/sae-0w20-api-sp-ilsac-gf-6-engine-oil.jpg'
import api_sp_and_ilsac_gf_6_certified from '../../../../public/passenger-car/api-sp-and-ilsac-gf-6-certified.jpg'
import smooth_driving from '../../../../public/passenger-car/smooth-driving.jpg'
import ideal_application_of_sae_0w20_api_sp_ilsac_gf_6 from '../../../../public/passenger-car/ideal-application-of-sae-0w20-api-sp-ilsac-gf-6.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

import { IoHome } from "react-icons/io5";
import { Link, NavLink } from 'react-router';

const PassengerCar = () => {

  const [toggleQuc, setToggoleQuc] = useState('first');
  const handleToggleQuc = (targeted_quc) => {
    setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY })
    })
  }
  return (
    <div>
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
      <div className='bg-[#fff] '>
        <div className=''>
          {/* path */}
          <section className='border-b-1 border-[#00000059] '>
            <div id='navigation_path' className='pl-[10%]  text-[#000] text-sm  py-4 '>
              <ul className='flex gap-3 items-center'>
                <div className='flex gap-1 items-center'>
                  <IoHome />
                  <NavLink to='/'> <li>Home</li></NavLink>
                </div>
                <NavLink to="/automotive">
                  <em className='italic'><span>/</span>Automotive</em>
                </NavLink>
                <em className='italic'><span>/</span>passenger-car</em>
              </ul>
            </div>
          </section>
          <div className='px-2 sm:px-0'>
            {/* About Sigma Oil Industries Led. */}
            <section className='bg-[#fff] max-w-[1220px] mx-auto py-10'>
              <div className=''>
                <div className='text-[#032e5b] text-4xl font-bold pb-1  '>
                  <h2>SAE 0W20 API SP ILSAC GF-6 Engine Oil</h2>
                </div>
                <div className='flex flex-col   md:flex-row gap-8 items-center justify-between'>
                  <div id="right_about" className='flex-1'>
                    <div >

                      <p className='text-[#404040]   leading-7 text-justify'>Low-viscosity, fully synthetic, environmentally friendly engine oil, specially designed with advanced friction-modifying additive technology that provides high levels of fuel efficiency and deposit protection under severe driving conditions.</p>
                      <p className='text-[#404040]  pt-10 leading-7 text-justify'><strong>Sigma Oil Industries Ltd</strong> is a high-quality oil producer company in Bangladesh. This engine oil meets the latest API service classification for gasoline engines, API SP, with resource-conserving, as well as ILSAC GF-6 standards.</p>
                      <div className='mt-5'>
                        <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Get a free Quote: +88-01700-760430</a>
                      </div>
                    </div>
                  </div>
                  <div id="left_about" className='w-[12/12] md:w-6/12 '>
                    <img className='rounded-[3px]' src={sae_0w20_api_sp_ilsac_gf_6_engine_oil} alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* Product specifications */}
            <section className='bg-[#f5f5f5]'>
              <div className='max-w-[1220px] mx-auto py-10'>
                <div className='text-[#032e5b] text-4xl font-bold pb-1  '>
                  <h2>Product specifications</h2>
                </div>
                <p className='text-[#404040]   leading-7 text-justify'>We are the <a className=' text-[#006cdd] hover:text-[#fd7e14] transition-all duration-400' href="https://www.sigma-oil.com/">top-ranked oil company</a> in the country. We designed SAE 0W20 full synthetic motor oil to meet the demanding needs of today's sophisticated automotive engines. Here are our product’s specifications:</p>
                {/* Product specifications */}
                <div className='text-[#404040] pt-8'>
                  <table className="w-full border border-gray-300 border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-left">
                          Specification
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-left">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Viscosity Grade
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          SAE 0W-20
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          API Rating
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          SP (exceeds SN Plus, SN, SM, SL, SJ)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          ILSAC Rating
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          GF-6A (exceeds GF-5, GF-4)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Base Type
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          100% fully synthetic
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Additional Certifications
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          GM dexos1™ Gen 2, Resource Conserving
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Compatibility
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Gasoline engines (carbureted, injected, turbo/supercharged)—American, European, and Asian
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Available Sizes
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          1 Quart, 5 Quarts, 1 Gallon
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Color
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Amber
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Pour Point
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          -45°C (-49°F)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-bold">
                          Flash Point
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          &gt;200°C (&gt;392°F)
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className='mt-5'>
                  <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Contact For More Information</a>
                </div>
              </div>
            </section>
            {/*Key features*/}
            <section className='bg-[#fff]  py-10'>
              <div className='  max-w-[1220px] px-5 md:px-0 mx-auto'>
                <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>
                  <div id="left_about" className='w-[12/12] md:w-6/12'>
                    <img className='rounded-[3px]' src={api_sp_and_ilsac_gf_6_certified} alt="" />
                  </div>
                  <div id="right_about" className='flex-1'>
                    <div >
                      <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Key features</h2>
                      <p className='text-[#404040]  pt-3 leading-7 text-justify'>With 100% synthetic base stocks and a premium additive package, our full synthetic 0W-20 motor oil surpasses the exacting standards of API SP and ILSAC GF-6 specifications. Here are key features:</p>
                      <div className='pt-3'>
                        <ul className=" flex flex-col gap-2  ">
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>API SP & ILSAC GF-6 Certified:</strong> Meets the latest international engine oil standards.</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Improved fuel economy:</strong> A low-viscosity formula helps reduce friction and save fuel.</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Outstanding wear protection:</strong> Protects vital engine parts under extreme conditions.</span>
                            </li>
                          </div>
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Turbocharger safety:</strong> Specially designed to prevent low-speed pre-ignition (LSPI) issues.</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Longer engine life:</strong> Controls deposits, keeps pistons clean, and prevents sludge build-up.</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Cold-start protection:</strong> Excellent low-temperature performance ensures smooth engine start in all weather.</span>
                            </li>
                          </div>
                        </ul>
                      </div>
                      <div className='mt-5'>
                        <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Call for Details: +88-01700-760430</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*Key benefits of using SAE 0W20 API SP ILSAC GF-6*/}
            <section className='bg-[#F5F5F5]  py-10'>
              <div className='  max-w-[1220px] px-5 md:px-0 mx-auto'>
                <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>

                  <div id="right_about" className='flex-1'>
                    <div >
                      <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Key benefits of using SAE 0W20 API SP ILSAC GF-6</h2>
                      <p className='text-[#404040]  pt-3 leading-7 text-justify'>Our 0W-20 fully synthetic oil meets the latest industry standards. It helps to keep your vehicle running smoothly in all conditions. Here are some key benefits of our products:</p>
                      <div className='pt-3'>
                        <ul className=" flex flex-col gap-2  ">
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Fuel savings:</strong>  It reduces friction and improves fuel economy.</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Longer oil life: </strong>It ensures longer oil life by extended drain intervals.  </span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Smooth driving: </strong>Ensures quiet, clean, and reliable engine performance.</span>
                            </li>
                          </div>
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><strong>Compatibility:</strong> Suitable for a wide range of modern vehicles requiring SAE 0W2.</span>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="left_about" className='w-[12/12] md:w-6/12'>
                    <img className='rounded-[3px]' src={smooth_driving} alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/*Ideal application of SAE 0W20 API SP ILSAC GF-6*/}
            <section className='bg-[#fff]  py-10'>
              <div className='  max-w-[1220px] px-5 md:px-0 mx-auto'>
                <div className='flex flex-col flex-col-reverse md:flex-row gap-8 items-center justify-between'>
                  <div id="left_about" className='w-[12/12] md:w-6/12'>
                    <img className='rounded-[3px]' src={api_sp_and_ilsac_gf_6_certified} alt="" />
                  </div>
                  <div id="right_about" className='flex-1'>
                    <div >
                      <h2 className='text-[#032e5b] text-[1.5em] font-bold'>Ideal application of SAE 0W20 API SP ILSAC GF-6</h2>
                      <p className='text-[#404040]  pt-3 leading-7 text-justify'>SAE 0W20 API SP ILSAC GF-6 is commonly recommended for newer vehicles. Modern engine technology provides improved fuel economy and performance. Here are some ideal applications:</p>
                      <div className='pt-3'>
                        <ul className=" flex flex-col gap-2  ">
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span>For newer vehicles with modern engine technology</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span><NavLink className='text-[#002776] hover:text-[#ff6319] transition-all duration-400'>Passenger cars</NavLink> and SUVs with gasoline engines</span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span>Hybrid, eco-version, and turbocharged vehicles require SAE 0W-20 grade</span>
                            </li>
                          </div>
                          <div>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span>Engines designed for <strong>ILSAC GF-6A oils</strong></span>
                            </li>
                            <li className=" text-[#404040] flex items-center">
                              <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                                <span className=''>■</span>
                              </span>
                              <span>Drivers seeking <strong>fuel efficiency and reliable performance</strong></span>
                            </li>
                          </div>
                        </ul>
                      </div>
                      <div className='mt-5'>
                        <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Call for Details: +88-01700-760430</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Typical properties */}
            <section className='bg-[#f5f5f5]'>
              <div className='max-w-[1220px] mx-auto py-10'>
                <div className='text-[#032e5b] text-4xl font-bold pb-1  '>
                  <h2>Typical properties</h2>
                </div>
                <p className='text-[#404040]   leading-7 text-justify'>Modern engines run hotter and faster and often use turbocharging, which creates new challenges for motor oil.</p>
                {/* Typical properties */}
                <div className='text-[#404040] pt-8'>
                  <table className="w-full border border-gray-300 border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-left">
                          Parameters
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-left">
                          ASTM Method
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-left">
                          Results
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Appearance
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Visual
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          B &amp; C
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM Color
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-1500
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          L 3.0
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Density at 15°C
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-4052
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          0.8341
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Density at 30°C
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-4052
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          0.825
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Kinematic Viscosity at 40°C
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-7042
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          47.33
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Kinematic Viscosity at 100°C
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-7042
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          9.12
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Viscosity Index (VI)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-2270
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          178
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Total Base Number (TBN)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-2896
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          5.9
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Flash Point (FP)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-92
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          220
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Pour Point (PP)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          ASTM D-97
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          -36
                        </td>
                      </tr>
                    </tbody>
                  </table>


                </div>
                <div className='mt-5'>
                  <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Talk to our Team: +88-01700-760430</a>
                </div>
              </div>
            </section>
            {/* Why Choose API SP and ILSAC GF-6? */}
            <section className='bg-[#fff]'>
              <div className='max-w-[1220px] mx-auto py-10'>
                <div className='text-[#032e5b] text-4xl font-bold pb-1  '>
                  <h2>Why Choose API SP and ILSAC GF-6?</h2>
                </div>
                <p className='text-[#404040]   leading-7 text-justify'>The API SP and ILSAC GF-6 standards were built to solve these issues and give drivers more protection and efficiency.</p>
                <div className='text-[#404040] pt-3'>
                  <li className=" text-[#404040] flex items-center">
                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                      <span className=''>■</span>
                    </span>
                    <span><strong>LSPI Protection: </strong>Helps prevent dangerous low-speed pre-ignition in small, turbocharged engines.</span>
                  </li>
                  <li className=" text-[#404040] flex items-center">
                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                      <span className=''>■</span>
                    </span>
                    <span><strong>Timing Chain Safety: </strong>Reduces wear on the timing chain, one of the costliest parts to repair.</span>
                  </li>
                  <li className=" text-[#404040] flex items-center">
                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                      <span className=''>■</span>
                    </span>
                    <span><strong>Fuel Savings: </strong>Designed to deliver better mileage compared to older oil categories.</span>
                  </li>
                  <li className=" text-[#404040] flex items-center">
                    <span className="inline-flex  h-4 w-4 items-center justify-center mr-[8px] border border-[#404040] rounded-[3px] text-[#006cdd] text-sm leading-none">
                      <span className=''>■</span>
                    </span>
                    <span><strong>Cleaner Engines: </strong>Strong detergents keep the engine free from harmful deposits, even under high pressure and heat.</span>
                  </li>
                </div>
              </div>
            </section>
            {/* Order now to keep your engine safe */}
            <section className='bg-[#f5f5f5]'>
              <div className='max-w-[1220px] mx-auto py-10'>
                <div className='text-[#032e5b] text-4xl font-bold pb-2'>
                  <h2>Order now to keep your engine safe</h2>
                </div>
                <p className='text-[#404040] pb-3 leading-7 text-justify'>Keep your engine clean, efficient, and protected with <strond>SAE 0W20 API SP ILSAC GF-6 engine oil.</strond> Available in convenient pack sizes for both personal and commercial use.</p>
                <div className=''>
                  <a className='bg-[#1A88F8] px-5 py-2 rounded-[3px] uppercase font-bold' href="tel:+8801700760430" rel="nofollow">Contact Fro Order</a>
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
      </div>
    </div>
  );
};

export default PassengerCar;