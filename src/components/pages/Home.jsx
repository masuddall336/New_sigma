import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel'
import product_right from "../../../public/img/one_ltr_product.jpg"
import { NavLink } from 'react-router'
import manufacturing from "../../../public/img/manufacturing.svg"
import blending from "../../../public/img/blending.svg"
import laboratory from "../../../public/img/laboratory.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";



import './home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/homeProducts.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);
  const [toggleQuc, setToggoleQuc] = useState('first');
  const handleToggleQuc = (targeted_quc) => {
    setToggoleQuc(prev => (prev === targeted_quc ? null : targeted_quc));

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY })
    })
  }
  return (
    <div className=''>
      <Carousel></Carousel>
      <main className="home bg_img">
        <div className='bg-[#fff] pt-15'>
          <div className="home-header ">
            <p className="tagline">Sigma Oil - quality meets desires</p>
            <h2 className="title tracking-wide">High Quality Lubricating Oil Company.</h2>
          </div>
          <div className=''>
            <div className="home-content pb-15 ">
              {/* LEFT CONTENT */}
              <div className="left-content">
                <p className="description">
                  <strong>Sigma Oil Industries Limited </strong>
                  is a top-rated lubricating oil company that produces and provides
                  top-graded lube oil, meeting the needs of all types of engines to
                  boost the power of quality oil.
                </p>

                <h3 className="subtitle tracking-wide">
                  We provide lube oil for a wide range of machines including
                </h3>

                <div className="categories">
                  <ul>
                    <li><NavLink>Automotive ⤏</NavLink></li>
                    <li><NavLink>Industrial ⤏</NavLink></li>
                    <li><NavLink>Marine ⤏</NavLink></li>
                  </ul>

                  <ul>
                    <li><NavLink>Agriculture ⤏</NavLink></li>
                    <li><NavLink>Gear & Transmission ⤏</NavLink></li>
                    <li><NavLink>Specialized ⤏</NavLink></li>
                  </ul>
                </div>

                <p className="description">
                  <strong>Sigma Oil Industries Limited </strong>
                  produces and provides lower carbon, quality petrochemical products
                  with a commitment to sustainability standards for today and the future.
                </p>

                <button className="about-btn">
                  ABOUT SIGMA OIL INDUSTRIES LIMITED
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <aside className="right-image">
                <img src={product_right} alt="Sigma Oil Products" />
              </aside>
            </div>
          </div>
        </div>
        {/* third item */}
        <section>
          <div id="product_section_home" className='px-[1%] py-15'>


            <p className='text-[#ad0000] italic font-bold'>High performance</p>
            <h2 className='text-[#032e5b] text-4xl tracking-wide font-bold pb-5'>Lubricating Oil / Products We Provide</h2>


            <div id='' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1'>
              {products.map(product => {
                return (
                  <NavLink>
                    <div key={product.id} className="product-card overflow-hidden border   shadow-md relative ">
                      <img src={product.img} alt={product.product_name} className="w-full relative  object-cover" />
                      <h3 className="initial_product_name text-xl font-bold  text-[#fff] bg-[#322a2a7b] absolute bottom-0 w-full pt-7 pb-4 pl-3">{product.product_name}</h3>


                      <div className='product_description h-full flex flex-col justify-center px-1'>
                        <h3 className="text-xl font-bold text-[#fff] pb-1">{product.product_name}</h3>
                        <p className="text-[#fff] text-[13px] ">{product.product_description}</p>
                        <button className='bg-[#1A88F8] w-full text-[13px] mt-1 text-left mx-auto px-1 py-3 cursor-pointer'>{product.button_name}</button>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>
        <section id='proficiant' className='px-[8%]'>
          <div id='top_since' className='flex-row sm:flex gap-5  justify-between items-center border-b-2 py-20 border-b-amber-50'>
            <div>
              <h2 className='text-5xl font-bold uppercase'>We are proficient at</h2>
            </div>
            <div>
              <h1 className='text-5xl font-bold uppercase'>Since 2004</h1>
              <NavLink><p className=' text-2xl text-end    pt-2'>Producing Fine Oil</p></NavLink>
            </div>
          </div>
          <div id='bottom_catagory' className='flex flex-wrap gap-5 justify-between py-20'>
            <div className='flex items-center gap-5'>
              <img src={manufacturing} alt="manufacturing_icon" />
              <NavLink><p className='text-2xl font-bold'>Manufacturing</p></NavLink>
            </div>
            <div className='flex items-center gap-5'>
              <img src={blending} alt="blending" />
              <NavLink><p className='text-2xl font-bold'>Blending</p></NavLink>
            </div>
            <div className='flex items-center gap-5'>
              <img src={laboratory} alt="laboratory" />
              <NavLink><p className='text-2xl font-bold'>Laboratory</p></NavLink>
            </div>
          </div>
        </section>
        {/* Why Chose Us */}
        <section className='px-[21%] mx-auto bg-[#fff] py-20'>
          <h2 className='text-center text-4xl font-bold text-[#032e5b]  '>Why Choose Sigma Oil</h2>
          <div className='flex flex-col gap-2 '>

            <div className='border-b-1 border-[#032e5b] w-[15%] mx-auto pt-4  '></div>
            {/* First */}
            <div id='quc' className='w-100% mx-auto cursor-pointer pt-15'>
              <div onClick={() => handleToggleQuc('first')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'first' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Use Of Modern Technology <FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "first" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "first" ? "max-h-44 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>We use modern technology to process and refine products. It allows us to provide you with the right products.</p>
              </div>
            </div>
            {/* Second */}
            <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
              <div onClick={() => handleToggleQuc('Second')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'Second' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Available All Over Bangladesh <FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "Second" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "Second" ? "max-h-44 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>We serve entire Bangladesh to meet oil needs in every corner of the country.</p>
              </div>
            </div>
            {/* Thied */}
            <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
              <div onClick={() => handleToggleQuc('Thied')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'Thied' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Quality Oil <FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "Thied" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "Thied" ? "max-h-44 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>Providing you with quality oil is our motto. Use our products and make your engines more efficient.</p>
              </div>
            </div>
            {/* Forth */}
            <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
              <div onClick={() => handleToggleQuc('Forth')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'Forth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Competitive Price<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "Forth" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "Forth" ? "max-h-44 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>We offer competitive prices without compromising the quality of products.</p>
              </div>
            </div>
            {/* Fifth */}
            <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
              <div onClick={() => handleToggleQuc('Fifth')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'Fifth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Wide Variety of Products<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "Fifth" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "Fifth" ? "max-h-44 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>We have a wide range of product categories so you can meet all your oil needs.</p>
              </div>
            </div>
            {/* Sixth */}
            <div id='quc' className='w-100% mx-auto cursor-pointer w-full'>
              <div onClick={() => handleToggleQuc('Sixth')} id='question' className='flex'>
                <h3 className={` flex items-center justify-between px-3 py-2 rounded-[3px] w-full  transition-all duration-1000 ease-initial ${toggleQuc === 'Sixth' ? " bg-[#002776] text-[#fff]" : " text-[#002776] bg-[#E0E0E0]"}`}>Smart Customer Service<FaArrowRightLong className={` transition-all duration-500 ease-linear ${toggleQuc === "Sixth" ? "rotate-90" : ""}`} /></h3>
              </div>
              <div id='cllups_ans' className={` border border-[#999696] pl-2 mt-[-4px] overflow-hidden
  transition-all duration-500 ease-linear  ${toggleQuc === "Sixth" ? "max-h-100 " : "max-h-0"}`}>
                <p className='text-[#404040] py-2'>Smart customer service to meet your requirements as a fuel station. </p>
              </div>
            </div>
          </div>
        </section>
        {/* Catalog */}
        <section className=' bg-[#0027769d] w-full h-full'>
          <div className='catalog felx flex-col pb-10'>
            <div className='py-10'>
              <h2 className='text-3xl font-bold pb-2'>Get the Full Catalogs</h2>
              <p>Download our Product Catalogue, Corporate Profile, Technical Guide Book and Other Product Related Documents.</p>
            </div>
            <button className='bg-[#1A88F8] py-2  px-3 font-bold flex gap-1 items-center rounded-[2px] cursor-pointer mx-auto'><FaDownload />
              DOWNLOAD NOW</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
