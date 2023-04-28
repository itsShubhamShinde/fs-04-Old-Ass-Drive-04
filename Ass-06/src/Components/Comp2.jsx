import React from 'react'
import './Style/Comp2.css'
import img01 from '../Image/Img01.png'
import img02 from '../Image/Img02.png'
import img03 from '../Image/Img03.png'

const Comp2 = () => {
  return (
    <div className='Comp2OuterDiv'>
      <div className="cartDiv">
        <img src={img01} alt="" />
        <h3>2,500</h3>
        <p>enterprise organizations successfully launched</p>
      </div>
      <div className="cartDiv">
        <img src={img02} alt="" />
        <h3>45,000</h3>
        <p>enterprise users onboarded seamlessly</p>
      </div>
      <div className="cartDiv">
        <img src={img03} alt="" />
        <h3>200,000+</h3>
        <p>professionals trained on product and strategy</p>
      </div>

    </div>
  )
}

export default Comp2