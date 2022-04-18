import React from 'react';

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
           <div className='footer_1'>
               <h4>email</h4>
               <a href="mailto:seongwoo4477@gmail.com">seongwoo4477@gmail.com</a>
           </div>
           <div className='footer_2'>
               <h4>KaKao</h4>
               <a href="">Seongwoo</a>
           </div>
           <div className='footer_3'>
               <h4>social</h4>
               <ul>
                   <li><a href="/">Github</a></li>
                   <li><a href="/">Reference</a></li>
                   <li><a href="/">Tutorials</a></li>
                   <li><a href="/">Tistory</a></li>
                   <li><a href="/">Youtube</a></li>
               </ul>
           </div>
        </footer>
    )
}

export default Footer;