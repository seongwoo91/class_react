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
        isLoading : true,
        refers: [],
    }

    mainAnimation = () => {
        setTimeout(()=>{
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
                ease: "power3.out"
            });
        })
    }
    getRefers = async () => {
        const {
            data: {
                data : { htmlRefer},
            }
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");        

        this.setState({refers: htmlRefer, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(()=>{
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();            
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;

        return(
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["reference","book"]} />
                            <section className="refer__cont">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>css</h2>
                                        <ul className="refer__list">
                                            {refers.map((refer) => (
                                                <ReferCont
                                                key={refer.id}
                                                id={refer.id}
                                                title={refer.title}
                                                desc={refer.desc}
                                                desc2={refer.desc2}
                                                use={refer.use}
                                                element={refer.element}
                                                tag={refer.tag}
                                                version={refer.version}
                                                view={refer.view}
                                                image={refer.image}
                                                link={refer.link}
                                                definition={refer.Definition}
                                                Accessibility={refer.Accessibility}
                                                CrossBroswing={refer.CrossBroswing}
                                                mdn={refer.mdn}
                                                w3c={refer.w3c}                                        
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )

    }
}


export default Reference;