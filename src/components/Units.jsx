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


export default function Units( {data} ) {
  return ( 
    <div className='unit-container'>
      <div className='unit-header'>
        {data.opened ? <p className='unit-open'> Aberto </p> : <p className='unit-closed'> Fechado </p>}
        <h6>{data.title}</h6>
        <p dangerouslySetInnerHTML={{ __html: data.content }} className='unit-content'></p>
      </div>
      <div className='unit-icons'> 
        <img src={
          data.mask === 'required' ? ReqMask : RecMask
        }></img>
        <img src={
          data.towel === 'required' ? ReqTow : RecTow
        }></img>
        <img src={
          data.fountain === 'partial' ? PartFount : ForbFount
        }></img>
        <img src={
          data.locker_room === 'allowed' ? ReqLock : data.locker_room === 'partial' ? PartLock : ForbLock
        }></img>
      </div>
    </div>
  )
}
