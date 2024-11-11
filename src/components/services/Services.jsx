import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className="uil uil-apps services__icon"></i>
                    <h3 className="services__title">Fullstack <br /> Development</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Fullstack Developer</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Creation of visually appealing and responsive user interfaces (UI).</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Development of interactive and user-friendly web applications.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Implementation of responsive design for a consistent user experience across various devices.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Implementation of end-to-end solutions, from user interface to server logic and database.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-bug services__icon"></i>
                    <h3 className="services__title">Quality <br /> Assurance</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick= {() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Quality Assurance</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Development of comprehensive test plans outlining testing approaches and strategies.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Thorough manual testing of software applications to identify defects and ensure functionality.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Implementation of automated testing frameworks and scripts for efficient and repetitive testing.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Assessment of the user interface and overall user experience to ensure ease of use.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Continuous testing of software after changes to ensure existing functionalities remain unaffected.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-abacus services__icon"></i>
                    <h3 className="services__title">Data <br /> Science</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Data Science</h3>
                        <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">In-depth exploration and analysis of datasets to derive meaningful insights.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Cleaning and preprocessing of raw data to ensure accuracy and reliability in analysis.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Identification of patterns and grouping of similar data points through clustering algorithms.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Creation of visualizations to effectively communicate insights and findings.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Crafting narratives to communicate complex findings in a clear and compelling manner.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services