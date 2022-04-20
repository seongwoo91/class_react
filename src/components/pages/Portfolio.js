import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import PortCont from '../includes/PortCont';
import ContContact from '../layout/ContContact';
import ContTitle from '../layout/ContTitle';
import Loading from '../basics/Loading';
import { gsap } from "gsap";
import axios from 'axios';


// function Portfolio(){
//     return (
//         <>
//             <Header />         
//             <Contents>
//                 <ContTitle title={["Portfolio","Site"]} />
//                 <PortCont />               
//                 <ContContact />             
//             </Contents>          
//             <Footer />
//         </>
//     )
// }

class Portfolio extends React.Component {
    state ={
        isLoading : true,
    }

    mainAnimation = () => {
        setTimeout(()=>{
            gsap.to("#header", {duration:0.8, top:0, delay: 0})
            gsap.to("#footer", {duration:0.8, bottom:0, delay:0.5})
            gsap.to("#cont__title strong", {duration:0.6, x:0, y:0, opacity:1, delay:0.2})
            gsap.to("#cont__title em", {duration:0.6, x:0, y:0, opacity:1, delay:0.4})
            gsap.to(".port__inner", {duration:0.5, x:0, y:0, opacity:1, delay:1})
        }, 10)        
    }

    //비동기 방식 ( 데이터를 다 받으면 그떄 실행해라 async await)
    getPorts = async () => {
        const { data : { data : {ports} }} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");

        this.setState({ports : ports});

        //console.log(ports)

        setTimeout(() =>{
            console.log("두번쨰 시작")
            this.setState({isLoading:false});
            this.mainAnimation();
        }, 1600)
    }


    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째시작")
            document.getElementById("loading").classList.remove(".loading__active");
            this.getPorts();
        }, 2000)
    }


    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        
        return (
            <>
            {isLoading ? (
                <Loading />
                ) : (
                    <>
                        <Header />         
                        <Contents>
                            <ContTitle title={["Portfolio","Site"]} />                                                   
                            <PortCont port={ports} />
                            <ContContact />             
                        </Contents>          
                        <Footer />
                    </>
                )}
            </>
        )
    }
}


export default Portfolio;