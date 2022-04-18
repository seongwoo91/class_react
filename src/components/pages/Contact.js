import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import ContTitle from '../layout/ContTitle';
import ContContact from '../layout/ContContact';
import ContactCont from '../includes/ContactCont';


function Contact(){
    return (
        <>
            <Header color=""/>         
            <Contents>              
                <ContactCont color=""/>             
            </Contents>          
            <Footer color=""/>
        </>
    )
}

export default Contact;