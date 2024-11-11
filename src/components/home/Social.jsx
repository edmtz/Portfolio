import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://linkedin.com/in/salvador-e-martínez-842a6a122" className="home__social-icon" target={"_blank"}>
            <i class="uil uil-linkedin"></i>
        </a>
        {/* <a href="https://dribbble.com/" className="home__social-icon" target={"_blank"}>
            <i class="uil uil-dribbble"></i>
        </a> */}
        <a href="https://github.com/edmtz" className="home__social-icon" target={"_blank"}>
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social