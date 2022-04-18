import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import PortCont from '../includes/PortCont';
import ContContact from '../layout/ContContact';
import ContTitle from '../layout/ContTitle';

function Portfolio(){
    return (
        <>
            <Header />         
            <Contents>
                <ContTitle title={["Portfolio","Site"]} />
                <PortCont />               
                <ContContact />             
            </Contents>          
            <Footer />
        </>
    )
}

export default Portfolio;