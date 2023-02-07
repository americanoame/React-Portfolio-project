
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
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                <div class="btn-bar">
                                    <a class="px-btn theme" href="https://github.com/americanoame">GitHub Account</a>
                                    {/* <a class="px-btn theme-t" href="#">Download CV</a> */}
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