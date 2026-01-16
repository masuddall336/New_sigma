import React from 'react'
import Carousel from '../Carousel'
import product_right from "../../../public/img/one_ltr_product.jpg"
import { NavLink } from 'react-router'
import './home.css'

const Home = () => {
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
      </main>
    </div>
  )
}

export default Home
