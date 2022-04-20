import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import ContTitle from '../layout/ContTitle';
import ContContact from '../layout/ContContact';
import AboutCont from '../includes/AboutCont';

function About(){
    return (
        <>
            <Header color=""/>         
            <Contents>
                <ContTitle title={["about","me"]} color=""/>
                <AboutCont color=""/>
                <ContContact />
            </Contents>          
            <Footer color=""/>
        </>
    )
}

export default About;