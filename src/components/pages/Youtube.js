import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import ContTitle from '../layout/ContTitle';
import ContContact from '../layout/ContContact';
import YoutubeCont from '../includes/YoutubeCont';

function Youtube(){
    return (
        <>
            <Header />         
            <Contents>
                <ContTitle title={["coding","youtube"]} />
                <YoutubeCont />               
                <ContContact />             
            </Contents>          
            <Footer />
        </>
    )
}

export default Youtube;