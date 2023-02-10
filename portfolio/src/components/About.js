
import resume from "../assets/resume-1.jpg";

const About = () => {
    return (
        <div>
            <section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center justify-content-around flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text">
                                <h3 class="dark-color">Do some awsome stuff with me.</h3>
                                <h4 class="theme-color">UI / UX Designer &amp; Web Developer</h4>
                                <p>I am a highly motivated and web developer grauduated from
                                    Rutgers Full stack we developer.
                                    Throughout my studies, I have consistently
                                    demonstrated my passion for creating innovative and user-friendly
                                    websites that meet the needs of diverse audiences.</p>

                                <p>I have had the opportunity to work on a variety of projects and
                                    technologies, which has allowed me to develop a well-rounded skill
                                    set and deep understanding of web development. I am always eager to
                                    expand my knowledge and take on new challenges..</p>

                                <p>Technical Skills:

                                    HTML,
                                    CSS,
                                    JavaScript,
                                    React,
                                    Node.js,
                                    
                                    Git</p>

                                <div class="btn-bar">
                                    <a class="px-btn theme" href="https://github.com/americanoame">GitHub Account</a>
                                    <a class="px-btn theme-t" href="#">Download CV</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 text-center">
                            <div class="about-img">
                                <img src={resume} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}


export default About;