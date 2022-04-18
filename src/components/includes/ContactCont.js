import React from 'react'


function ContactInfo({text, desc}){
  return (
    <>
      <div>{text}</div>
      <p>{desc}</p>
    </>
  )
}



const contactText = [
  {text: "YOU ARE"},
  {text: "ALREADY"},
  {text: "DOING WELL."},
  {desc: "같은 목표를 위해 달려갈 웹 퍼블리셔 & 프론트 엔드 개발자를 모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요."}
]




function ContactCont() {
  return (
    <section id='contact__cont'>
      <div className='contact__inner'>      
        {contactText.map(txt => (
          <ContactInfo 
              key = {txt.text}
              text = {txt.text}
              desc = {txt.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default ContactCont;