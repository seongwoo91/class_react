import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../includes/MovieCont";
// import MovieList from "../includes/MovieList";
import Loading from "../basics/Loading";
import axios from "axios";
import { gsap } from "gsap";



class Movie extends React.Component {
    state =  {
        isLoading: true,
        lists: [],
        searchs: []
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
            // gsap.to(".refer__inner", {
            //     duration: 0.5,
            //     y: 0,
            //     opacity: 1,
            //     delay: 1.6,
            //     ease: "power3.out"
            // });
        }, 100)
    }
    getMovie = async () => {
        const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=3b53624919c9efd5086a569bddeaf216&query=music");
        console.log(lists)
        this.setState({lists, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {            
            document.getElementById("loading").classList.remove("loading__active");
            this.getMovie();
        }, 2000);
    }
    render() {
        const { lists, isLoading } = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading/>
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Movie", "Site"]} />
                            <MovieCont lists={lists} />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Movie;