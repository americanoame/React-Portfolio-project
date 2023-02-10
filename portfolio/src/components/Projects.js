import teamgenerator from "../assets/teamgenerator.png";

const Projects = () => {
    return (
        <div>
            <div id="projects" class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-header">
                            <h2>Projects</h2>
                            <p>Latest Work</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="d-flex">
                        <div class="single-service">
                            <div class="service-bg service-bg-1">
                                {/* <h2>Notaker</h2> */}
                            </div>
                            <div class="service-text">
                                <p>NoSQL-SOCIAL-Network-API</p>
                                <a href="https://github.com/americanoame/NoSQL-SOCIAL-Network-API" class="btn-area">Check Out</a>
                            </div>
                            <div class="service-text">
                                <p>MERN-Book-Search-Engine</p>
                                <a href="https://github.com/americanoame/MERN-Book-Search-Engine" class="btn-area">Check Out</a>
                            </div>
                            <div class="service-text">
                                <p>MDV-controller-Tech-Blog</p>
                                <a href="https://github.com/americanoame/MDV-controller-Tech-Blog" class="btn-area">Check Out</a>
                            </div>

                            <div class="service-text">
                                <p>Note-Taker</p>
                                <a href="https://github.com/americanoame/Note-Taker" class="btn-area">Check Out</a>
                            </div>

                            <div class="service-text">
                                <p>GenerateMarkdown</p>
                                <a href="https://github.com/americanoame/generateMarkdown" class="btn-area">Check Out</a>
                            </div>

                            <div class="service-text">
                                <p>Profolio-Generator-</p>
                                <a href="https://github.com/americanoame/Profolio-Generator-" class="btn-area">Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;



