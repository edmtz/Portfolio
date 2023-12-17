import React from 'react'

const Information = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Innovative Solutions</h3>
        <span className="about__subtitle">Creative/Effective</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online</span>
      </div>

    </div>
  )
}

export default Information