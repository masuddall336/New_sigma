import React from 'react'
import banner from '../../../../public/about-us/about-us.jpg'
import sigma_oil_history from "../../../../public/about-us/sigma-oil-history.jpg"
import quality_control from "../../../../public/about-us/quality-control.jpg"
import research_and_development from "../../../../public/about-us/research-and-development.jpg"
import technology from "../../../../public/about-us/technology.jpg"
import raw_materials from "../../../../public/about-us/raw-materials.jpg"
import certification from "../../../../public/about-us/sigma-oil-industries-limited-certification-lg.jpg"
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
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='text-[#032e5b] text-3xl font-bold  text-center'>
                        <h2>About Sigma Oil Industries Limited</h2>
                    </div>
                    <p className='text-[#404040] pt-10 pb-5 text-justify'><strong> Sigma Oil Industries Limited</strong> established an integrated manufacturing plant with world-class equipment and technology at Sonargaon, Narayanganj. Sigma has placed itself through the outstanding performance characteristics of its products in a wide variety of fields such as vehicles of all types, industrial machines, and other special applications. Highly qualified, trained and skilled people operate the plant and ensure standard quality of products.</p>
                    <div className='flex flex-col md:flex-row gap-8 items-center justify-between'>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={sigma_oil_history} alt="" />
                        </div>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <ul className=" flex flex-col gap-1 marker:text-[#FF6319] marker:content-['■'] text-[#404040] text-sm">
                                    <li className="pl-2 ">Automotive</li>
                                    <li className="pl-2  ">Industrial</li>
                                    <li className="pl-2  ">Marine</li>
                                    <li className="pl-2 ">Agriculture</li>
                                    <li className="pl-2  ">Gear & Transmission</li>
                                    <li className="pl-2 ">Specialized</li>
                                </ul>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>Semi-automatic blending control system capable of blending high-quality lubricants to fulfill the expanding demand of the industrial and automotive sectors in Bangladesh. Sigma has deployed the latest automation technologies in the filling line to bring about a step-change in productivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* quality Control */}
            <section className='bg-[#E4E4E5]  py-10'>
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='flex flex-col md:flex-row gap-8 items-center justify-between'>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={quality_control} alt="" />
                        </div>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <div className='text-[#032e5b] text-3xl font-bold'>
                                    <h2>Quality Control</h2>
                                </div>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>We have facilities that analyze the raw materials, the intermediate products, and, of course, the finished products prior to the sale in order to ensure the customer requirements.</p>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>Our laboratory is equipped with modern sophisticated instruments. Such as ICP-OES, FTIR, Stabinger Viscometer, Potentiometric Titrator, Flash Point Tester, Pour Point, and Cloud Point Tester, Foam Tester, Muffle Furnace, Color Comparator, Hot Plate Stirrer, pH Meter, TDS Tester, etc.</p>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>We apply the modern technology, collect the instruments and raw materials from world well-known suppliers – Perkin Elmer, Anton Paar, Labtech, Hwashin, AND, Spectra Lab, etc. Instrument Country of Origin: <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://en.wikipedia.org/wiki/United_States" target='_blank'>USA</a>, <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://en.wikipedia.org/wiki/United_Kingdom" target='_blank'>UK</a>,
                                    <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://en.wikipedia.org/wiki/Austria" target='_blank'> Austria</a>,
                                    <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://en.wikipedia.org/wiki/Japan" target='_blank'> Japan </a>
                                    and <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://en.wikipedia.org/wiki/South_Korea" target='_blank'> South Korea</a>. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Tecnology */}
            <section className='bg-[#fff]  py-10'>
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='flex flex-col flex-cols-reverse md:flex-row gap-8 items-center justify-between'>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <div className='text-[#032e5b] text-3xl font-bold'>
                                    <h2>Technology</h2>
                                </div>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>We follow the top 'cutting - edge technology to manufacture the most advanced lubricants. Our technological commitment has helped to pioneer innovative solutions that deliver heightened performance and respond to the changing needs of our consumers.</p>
                            </div>
                        </div>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={technology} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Row Meterials */}
            <section className='bg-[#E4E4E5]  py-10'>
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='flex flex-col  md:flex-row gap-8 items-center justify-between'>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={raw_materials} alt="" />
                        </div>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <div className='text-[#032e5b] text-3xl font-bold'>
                                    <h2>Raw Materials</h2>
                                </div>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>To justify our motto “quality meets desires “we purchase base oil from world famous crude oil refineries and additives from world top four manufactures <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://www.infiniumco.com/" target='_blank'> Infinium</a>, <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://www.lubrizol.com/" target='_blank'>Lubrizol</a>,
                                    <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://www.oronite.com/" target='_blank'> Oronite</a>, &
                                    <a className='hover:text-[#ff6319] text-[#006cdd] duration-500' href="https://www.aftonchemical.com/" target='_blank'>  Afton </a>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Research and Development */}
            <section className='bg-[#fff]  py-10'>
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='flex flex-col flex-col-reverse  md:flex-row gap-8 items-center justify-between'>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <div className='text-[#032e5b] text-3xl font-bold'>
                                    <h2>Research and Development</h2>
                                </div>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>Solidified within our heritage, research and development has been instrumental in driving the innovative transformation across our business.</p>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>We are ready for the world of tomorrow today and can continue to improve the efficiency and quality of our products.</p>
                            </div>
                        </div>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={research_and_development} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Certification */}
            <section className='bg-[#E4E4E5]  py-10'>
                <div className='  max-w-[1100px] px-5 mx-auto'>
                    <div className='flex flex-col  md:flex-row gap-8 items-center justify-between'>
                        <div id="left_about" className='w-[12/12] md:w-6/12'>
                            <img src={certification} alt="" />
                        </div>
                        <div id="right_about" className='flex-1'>
                            <div >
                                <div className='text-[#032e5b] text-3xl font-bold'>
                                    <h2 className='text-[70%] md:text-[100%]'>Certification</h2>
                                </div>
                                <p className='text-[#404040]  pt-3 leading-7 text-justify'>Sigma Oil Industries Limited was awarded with ISO 9001: 2015 certificate.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
