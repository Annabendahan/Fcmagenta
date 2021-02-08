import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import gif from '../images/maillotsmarie.gif'
import dash from '../images/dash.svg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="main">
      <br />
      <div className="main__gif">
        <img alt="img" src={gif} />
      </div>
      <br /><br /><br /><br />
      <div className="main__list">
        <div className="main__list__line">
          <p> Le maillot </p>
          <img alt="img" src={dash} />
          <h5> Couture </h5>
        </div>
        <div className="main__list__line">
          <p> La coloc </p>
          <img alt="img" src={dash} />
          <h5> Divers </h5>
        </div>
        <div className="main__list__line">
          <p> La collec </p>
          <img alt="img" src={dash} />
          <h5> Maillots </h5>
        </div>
      </div>
      <div className="main__bar">
        <p> © 2021 </p>
        <h5> <span className='main__bar__fc'>FC</span>_Magenta </h5>
      </div>
    </div>


  </Layout>
)

export default IndexPage
