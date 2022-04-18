import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import ContTitle from '../layout/ContTitle';
import ContContact from '../layout/ContContact';
import ReferCont from '../includes/ReferCont';

function Reference(){
    return (
        <>
            <Header color=""/>         
            <Contents>
                <ContTitle title={["reference","book"]} color=""/>
                    <ReferCont />                    
                <ContContact /> 
            </Contents>          
            <Footer color=""/>
        </>
    )
}

export default Reference;