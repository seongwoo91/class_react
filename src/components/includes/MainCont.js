import React from 'react';


//함수형 컴퍼넌트 * 클래스 컴퍼넌트   --> 리액트 훅 (면접에서 엄청나게 물어봄)

function MainInfo({text}){
    return <div>{text}</div>       
}

const mainText = [
    {text : "WE PROVIDE"},
    {text : "Visual coding"},
    {text : "solutions"},
    {text : "for you webs"},
]


function MainCont(){
    return(
        <section className='main__cont'>
            <div className='main__inner'>
               {mainText.map(txt => (
                   <MainInfo text={txt.text} key={txt.text}/>
               ))}
            </div>
        </section>    
    )
}

export default MainCont;