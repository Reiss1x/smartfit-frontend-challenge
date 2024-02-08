import React from 'react'
import ReqMask from '../_material/images/required-mask.png'
import RecMask from '../_material/images/recommended-mask.png'
import ReqTow from '../_material/images/required-towel.png'
import ReqLock from '../_material/images/required-lockerroom.png'
import RecTow from '../_material/images/recommended-towel.png'
import PartLock from '../_material/images/partial-lockerroom.png'
import PartFount from '../_material/images/partial-fountain.png'
import ForbLock from '../_material/images/forbidden-lockerroom.png'
import ForbFount from '../_material/images/forbidden-fountain.png'

export default function Info() {
  return (
    <div className='info-container'>
        <div className='items'>
            <h4> Máscara </h4>
            <h4> Máscara </h4>  
            <h4> Máscara </h4> 
            <h4> Máscara </h4>  
        </div>
        <div className='items'>
            <div className='item-group'>
                <img src={ReqMask} alt="Required Mask" className='item' />
                <img src={RecMask} alt="Recommended Mask" className='item'/>
            </div>
            <div className='item-group'>
                <img src={ReqTow} alt="Required Mask" className='item' />
                <img src={RecTow} alt="Recommended Mask" className='item'/>
            </div>
            <div className='item-group'>
                <img src={PartFount} alt="Required Mask" className='item' />
                <img src={ForbFount} alt="Recommended Mask" className='item'/>
            </div>
            <div className='item-group'>
                <img src={ReqLock} alt="Required Mask" className='item1' />
                <img src={PartLock} alt="Recommended Mask" className='item1'/>
                <img src={ForbLock} alt="Recommended Mask" className='item1'/>
            </div>
        </div>
        <div className='items'>
            <div className='item-group'>
                <h5> Obrigatório </h5>
                <h5> Recomendado </h5>  
            </div>
            <div className='item-group'>
                <h5> Obrigatório </h5> 
                <h5> Recomendado </h5>
            </div>
            <div className='item-group'>
                <h5> Parcial </h5>
                <h5> Proibido </h5>
            </div>
            <div className='item-group'>
                <h5> Liberado </h5> 
                <h5> Parcial </h5>
                <h5> Fechado </h5> 
            </div>
            
              
              
            
        </div>
    </div>  
  )
}

