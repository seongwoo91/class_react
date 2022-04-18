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
            <Header color="light"/>         
            <Contents>
                <ContTitle title={["about","me"]} color="light"/>
                <AboutCont color="light"/>
                <ContContact />
            </Contents>          
            <Footer color="light"/>
        </>
    )
}

export default About;