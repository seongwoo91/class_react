import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";


class ReferDetail extends React.Component {
    

    mainAnimation = () => {
            gsap.to("#header", {
                duration: 0.8, 
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8, 
                bottom: 0,
                delay: 0.2,
            });          
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,                
            });
    }

    componentDidMount(){
        
        this.mainAnimation();
    }

    render(){
        return(
            <>
                <Header color="light"/>
                <Contents>     
                <section className={`refer__cont light`}>
                    <div className="container">
                        <div className="refer__inner">    
                        123           
                        </div>
                    </div>
                </section>
                </Contents>
                <Footer color="light"/>
            </>
        )
    }
}

export default ReferDetail