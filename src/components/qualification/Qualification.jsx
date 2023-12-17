import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualificaton__title">BS in Neuroscience</h3>
                            <span className="qualification__subtitle">UNAM - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2018 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualificaton__title">Data Analyst</h3>
                            <span className="qualification__subtitle">Cell Physiology Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualificaton__title">Web Development Bootcamp</h3>
                            <span className="qualification__subtitle">Oracle Next Education</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>June 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualificaton__title">Research Assistant</h3>
                            <span className="qualification__subtitle">Institute of Applied Mathematics and Systems Research</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - 2022
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>

                    <div className="qualification__data">
                        <div className="div">
                            <h3 className="qualificaton__title">Quality Assurance Engineer</h3>
                            <span className="qualification__subtitle">Amazon</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div className="div">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualificaton__title">Solera Inc</h3>
                            <span className="qualification__subtitle">Software Developement Engineer in Test</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualification