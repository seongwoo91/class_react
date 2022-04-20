import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import { gsap } from "gsap";
import Loading from "../basics/Loading";
import axios from "axios";

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
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
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,                
            });
        }, 10)
    }

    getSite  = async () => {
        const { 
            data: {
                data : {refer}
            }
         }  = await axios.get("https://seongwoo91.github.io/class_react/src/assets/json/reference.json");

         this.setState({refers: refer, isLoading: false})
            
        this.mainAnimation();
     
    }

    componentDidMount() {
        setTimeout(() => {            
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background="#000"
            this.getSite();
        }, 2000)
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents>
                            <Title title={["reference","book"]} color="light"/>
                            <ReferCont refers={refers} color="light"/>
                            <Contact />
                        </Contents>
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }
}


export default Reference;