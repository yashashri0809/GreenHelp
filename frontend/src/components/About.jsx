import React from 'react'
import Header from "../components/Layout/Header";
import Hero from '../components/Route/Hero/Hero';
// import backgroundImage from './img3.jpg'


const About = () => {
    return (
        <div>
            <Header activeHeading={1} />
            {/* <Hero /> */}
            {/* <Categories /> */}
            {/* <BestDeals /> */}
            {/* <FeaturedProduct />
            <Sponsored /> */}
            {/* <Footer /> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', marginTop: '20px', paddingRight: '20px' }}>
                <div style={{ width: '50%', marginRight: '20px', marginBottom: '20%' }}>
                <h1 style={{fontFamily: 'Gentona', color: '#023020', fontSize: '50px'}}> About Us </h1>
                    <p style={{ fontSize: '18px', fontStyle: 'italic',}}>
                    
                        Green Help is an innovative online platform designed to bridge the gap between farmers and consumers. Our website provides a seamless experience where farmers can showcase their products directly to customers, enabling them to buy fresh produce with ease.
                    </p>
                </div>
                <div style={{ width: '50%' }}>
        <img src="./xyz.jpg" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
            </div>
        </div>
    )
}

export default About