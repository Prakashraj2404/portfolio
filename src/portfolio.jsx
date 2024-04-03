import './css/portfolio.css';

import project1 from './accests/restaurent project.png';
import project2 from './accests/bootstrap project.png';
import project3 from './accests/project-3.jpg';
import project4 from './accests/project-4.jpg';
import project5 from './accests/project-5.jpg';
import project6 from './accests/project-6.jpg';
import project7 from './accests/project-7.jpg';
import project8 from './accests/project-8.jpg';
import project9 from './accests/project-9.jpg';


export default function Portfolio(){
    return(
        <div className="portfolio-container">
            <div className='port-header'>
                <h1 className='port-back'>works</h1>
                <h1 className='port-head'><span>my</span> portfolio</h1>
            </div>
            <section className="projects-cont">
                <article>
                    <img src={project1}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project2}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project3}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project4}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project5}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project6}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>


                <article>
                    <img src={project7}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project8}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>

                <article>
                    <img src={project9}/>
                    <div className='project-hover'>
                    <p>preview</p>
                    </div>
                </article>


            </section>
        </div>
    )
}
