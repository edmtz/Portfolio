import React from 'react'

const Data_Science = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Data Science</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Jupyter Notebook</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>
            
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Numpy</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Matplolib</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>
            
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Scikit-learn</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Power BI</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Data_Science