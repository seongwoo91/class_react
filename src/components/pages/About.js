import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import { gsap } from "gsap";
import Loading from "../basics/Loading";

class About extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    }

    mainAnimation = () => {
        setTimeout(() => { 
            gsap.to("#header", {
                duration: 0.8, 
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8, 
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".about__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "power3.out"
            });
        }, 10)
    }

    getPorts = () => {

        //console.log(ports)

        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background="#F0EEEB"
            this.getPorts();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;



        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents>
                            <Title title={["About","Site"]} color="light"/>
                            <AboutCont color="light"/>
                            <Contact />
                        </Contents>
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }
}


export default About;