import './css/portfolio.css';

import portfolio from './accests/portfolio project.png';
import project1 from './accests/restaurent project.png';
import project2 from './accests/bootstrap project.png';
import project3 from './accests/project-2.jpg';
import project4 from './accests/petstore project.png';
import project5 from './accests/project-5.jpg';
import project6 from './accests/project-6.jpg';
import project7 from './accests/project-7.jpg';
import project8 from './accests/project-8.jpg';


export default function Portfolio(){
    return(
        <div className="portfolio-container">
            <div className='port-header'>
                <h1 className='port-back'>works</h1>
                <h1 className='port-head'><span>my</span> portfolio</h1>
            </div>
            <section className="projects-cont">
                <article>
                    <img src={portfolio}/>
                    <div className='project-hover'>
                        <h1>Portfolio</h1>
                        <p>Personal portfolio - using React-Js FrameWorks</p>
                        <a href='https://prakash-raj-portfolio-website.netlify.app/' target='_blank'><button>visit site</button></a>
                    </div>
                </article>

                <article>
                    <img src={project1}/>
                    <div className='project-hover'>
                    <h1>PROJECT 1</h1>
                    <p>Restaurent website using HTML, CSS</p>
                    <a href='https://prakashraj2404.github.io/Restaurent/' target='_blank'><button>visit site</button></a>
                    </div>
                </article>

                <article>
                    <img src={project2}/>
                    <div className='project-hover'>
                    <h1>PROJECT 2</h1>
                    <p>Learning Platform using HTML, Bootstrap</p>
                    <a href='https://prakashraj2404.github.io/Bootstrap-Project/' target='_blank'><button>visit site</button></a>
                    </div>
                </article>

                <article>
                    <img src={project3}/>
                    <div className='project-hover'>
                    <h1>PROJECT 3</h1>
                    <p>Photoshop project(Group-project) using HTML, CSS,Bootstrap</p>
                    <a href='https://prakashraj2404.github.io/Group-Project/' target='_blank'><button>visit site</button></a>
                    </div>
                </article>

                <article>
                    <img src={project4}/>
                    <div className='project-hover'>
                    <h1>PROJECT 4</h1>
                    <p>Petstore project(Group-project) using HTML, CSS,Bootstrap</p>
                    <a href='https://prakashraj2404.github.io/Petstore-Project/' target='_blank'><button>visit site</button></a>
                    </div>
                </article>

                <article>
                    <img src={project5}/>
                    <div className='project-hover'>
                    <h1>PROJECT 5</h1>
                    <p>Js-Project On-Going</p>
                    <a href='' target='_blank'><button>visit site</button></a>
                    </div>
                </article>


                <article>
                    <img src={project6}/>
                    <div className='project-hover'>
                    <p>Coming Soon</p>
                    </div>
                </article>

                <article>
                    <img src={project7}/>
                    <div className='project-hover'>
                    <p>Coming Soon</p>
                    </div>
                </article>

                <article>
                    <img src={project8}/>
                    <div className='project-hover'>
                    <p>Coming Soon</p>
                    </div>
                </article>


            </section>
        </div>
    )
}
