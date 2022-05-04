import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

function Movie() {
  const [video, setvideo] = useState([]);

  const mainAnimation = () => {
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
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "power4.out",
      });
    }, 10);
  };

  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3b53624919c9efd5086a569bddeaf216&query=${query}&language=ko-KR`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setvideo(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=3b53624919c9efd5086a569bddeaf216&query=war&language=ko-KR",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setvideo(result.results);
        mainAnimation();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference"]} />
        <section className="movie__cont">
          <div className="container">
            <div className="movie__inner">
              <MovieSearch onSearch={search} />
              <MovieList videos={video} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
