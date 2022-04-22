import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail(props){
    
//     return (
//         <div>referdatail</div>
//     )
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }

        this.mainAnimation();
    }

    mainAnimation = () => {
        setTimeout(()=>{
            gsap.to("#header", {
                duration: 0.8, 
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8, 
                bottom: 0,
                delay: 0.2,
            });           
         
        })
    }

    render(){
        const {location} = this.props;
        console.log(location.state);        

        if(location.state === undefined) {
            return <div>잘못된 페이지 입니다.</div>
        } else {
            return (
            <>
                <Header/>
                <Contents>
                    <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                                <div className="refer__table">
                                    <h3>{location.state.title}</h3>
                                    <img src={location.state.image} alt="" />
                                    <p>{location.state.desc}</p>
                                    <div>
                                        <table className='refer__table'>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h2>정의</h2>
                                        <ul>
                                        {location.state.definition.map(e => (                                            
                                                <li key={e}>{e}</li>                                                                                
                                        ))}                                           
                                        </ul>    
                                        <h2>접근성</h2>
                                        <ul>
                                        {location.state.Accessibility.map(e => (                                            
                                                <li key={e}>{e}</li>                                                                                
                                        ))} 
                                        </ul> 
                                        <h2>크로스브라우징</h2>
                                        <ul>
                                        {location.state.CrossBroswing.map(e => (                                            
                                                <li key={e}>{e}</li>                                                                                
                                        ))} 
                                        </ul> 
                                        <h2>참고사이트</h2>
                                        <a href={location.state.link}>웹스토리보이</a>
                                        <a href={location.state.mdn}>MDN</a>
                                        <a href={location.state.w3n}>W3N</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Contents>           
                <Footer/>
            </>
            )            
        }
    }
}



export default ReferDetail