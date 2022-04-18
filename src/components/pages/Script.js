import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import ScriptCont from '../includes/ScriptCont';
import ContTitle from '../layout/ContTitle';
import ContContact from '../layout/ContContact';


function Script(){
    return (
        <>
            <Header />         
            <Contents>
                <ContTitle title={["Script","Site"]} />
                <ScriptCont />               
                <ContContact />             
            </Contents>          
            <Footer />
        </>
    )
}

export default Script;