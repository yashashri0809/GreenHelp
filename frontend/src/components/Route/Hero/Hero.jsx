import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import backgroundImage from './img.jpg';
import Typewriter from "typewriter-effect";


const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
            style={{
                    backgroundImage: `url(${backgroundImage})`,
                // backgroundImage:
                //     // "url(https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                //     // "url(https://static.toiimg.com/photo/79531761.cms)",
                //     "url(https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/01/27161736/BLOG-03-1.jpg)",
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    
            }}
        >
           <div className={`${styles.section} w-[30%] 800px:w-[50%]`} style={{ marginBottom: '20vh' ,marginLeft: '40vw', marginRight: '5vw' }}>
    <h1
        className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#green] font-[600] capitalize`} style={{fontFamily: 'Gentona', color: '#023020'}}

    >
        {/* Best Collection for <br /> home Decoration */}
        <Typewriter
        options={{
            loop: true, // Set loop option to true
        }}
        onInit={(typewriter) => {
        typewriter
            .typeString("GreenHelp")
            .pauseFor(1000)
            .deleteAll()
            // .typeString("Welcomes You")
            .start();
            
    }}
    />
    </h1>
    <Link to="/products" className="inline-block">
        <div className={`${styles.button} mt-5`} style={{ textAlign: 'center' }}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
            </span>
        </div>
    </Link>
</div>

        </div>
    )
}

export default Hero