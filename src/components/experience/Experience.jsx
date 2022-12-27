import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>CSS3</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of frontend*/}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>ASP.Net</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icons"/>
              <div>
              <h4>MSSQL</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>
          </div>
        </div>

        </div>

    </section>
  )
}

export default Experience