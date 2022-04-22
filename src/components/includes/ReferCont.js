import React from 'react'
import { Link } from 'react-router-dom';
import propType from "prop-types";



function ReferCont({id,title,desc,desc2,use,element,tag,version,view,image,link,definition,Accessibility,CrossBroswing,mdn,w3c}) {
  return(
    <li>
      <Link to={{
        pathname:"refer-detail",
        state : {id,title,desc,desc2,use,element,tag,version,view,image,link,definition,Accessibility,CrossBroswing,mdn,w3c}
      }}
        >           
        <span className='num'>{id}</span>
        <span className='title'>{title}</span>
        <span className='desc'>{desc}</span>
        <span className='use'>{use}</span>
      </Link>
    </li>
  )
}

ReferCont.propType = {
  id : propType.number.isRequired,
  title : propType.string.isRequired,
  desc : propType.string.isRequired,
  use : propType.string.isRequired
}


export default ReferCont