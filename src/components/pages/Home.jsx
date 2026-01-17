import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel'
import product_right from "../../../public/img/one_ltr_product.jpg"
import { NavLink } from 'react-router'
import manufacturing from "../../../public/img/manufacturing.svg"
import blending from "../../../public/img/blending.svg"
import laboratory from "../../../public/img/laboratory.svg"
import { FaArrowRightLong } from "react-icons/fa6";


import './home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/homeProducts.json') // correct public path
      .then(res => res.json())
      .then(data => {
        console.log('Fetched products:', data); // Debug
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);
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
        <section className='px-[21%] mx-auto bg-[#fff] pt-15'>
          <h2 className='text-center text-4xl font-bold text-[#032e5b] pb-18'>Why Choose Sigma Oil</h2>
          <div id='quc' className='w-70% mx-auto cursor-pointer'>
            <div id='question' className='flex'>
              <h3 className='text-[#fff] flex items-center justify-between px-3 py-2 rounded-[3px] bg-[#002776] w-full'>Use Of Modern Technology <FaArrowRightLong /></h3>
            </div>
            <div id='cllups_ans' className='border-[#000] border-1 border-[#999696] py-3 pl-2 mt-[-1px]'>
              <p className='text-[#404040]'>We use modern technology to process and refine products. It allows us to provide you with the right products.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
