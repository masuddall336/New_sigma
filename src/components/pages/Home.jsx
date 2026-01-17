import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel'
import product_right from "../../../public/img/one_ltr_product.jpg"
import { NavLink } from 'react-router'
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
    <div>
      <Carousel></Carousel>
      <main className="home">
        <div className="home-header">
          <p className="tagline">Sigma Oil - quality meets desires</p>
          <h2 className="title">High Quality Lubricating Oil Company.</h2>
        </div>

        <div className="home-content">
          {/* LEFT CONTENT */}
          <div className="left-content">
            <p className="description">
              <strong>Sigma Oil Industries Limited </strong>
              is a top-rated lubricating oil company that produces and provides
              top-graded lube oil, meeting the needs of all types of engines to
              boost the power of quality oil.
            </p>

            <h3 className="subtitle">
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
        {/* third item */}
        <section>
          <div id="product_section_home">
            <p className='text-[#ad0000] italic font-bold'>High performance</p>
            <h2 className='text-[#032e5b] text-5xl font-bold'>Lubricating Oil / Products We Provide</h2>
            <div id='' className='grid grid-cols-4 gap-2'>
              {products.map(product => {
                console.log('Product:', product); // Debug each product
                return (
                  <div key={product.id} className="product-card border shadow-md ">
                    <img src={product.img} alt={product.product_name} className="w-full  object-cover relative  " />
                    <h3 className="text-xl font-bold  text-[#fff] bg-[#322a2a7b] absolute ">{product.product_name}</h3>
                    <div className='hidden'>
                      <p className="text-gray-700">{product.product_description}</p>
                      <button>{product.button_name}</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
