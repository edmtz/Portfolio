import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <div>
          <h3 className="work__title">{item.title}</h3>
          <a href={item.preview} className="work__button">
            Preview <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a href={item.code} className="work__button">
            Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
    </div>
  )
}

export default WorkItems  