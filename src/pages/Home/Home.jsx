import React from 'react'
import style from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Jambotron from '../../components/Jambotron/Jambotron'
import Bar from '../../components/Bar/Bar'
import Section from '../../components/Section/Section'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Product/Products'
import Feature from '../../components/Feature/Feature'
import Support from '../../components/Support/Support'
function Home() {
  return (
    <>
        <div>
            <Navbar/>
            <Jambotron/>

            {/* <div style={{
                height:'100vh'
            }}>

            <h2>ddbjke jwdbw djwd</h2>

            </div> */}

            <Bar/>

            <Section/>

              <Feature/>
            {/* <Products/> */}

            {/* <Support/> */}

            <Footer/>

        </div>
    </>
  )
}

export default Home