import teamgenerator from "../assets/teamgenerator.png";

const Projects = () => {
    return (
        <div>
            <div id="projects" class="container my-5">
                <h2 class="text-center">Image Gallery</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a href="#" data-toggle="modal" data-target="#image1">
                            <img class="img-fluid" src={teamgenerator} alt="Image 1" />
                        </a>
                        <div>
                            <a class="btn-project" href="https://github.com/americanoame/MERN-Book-Search-Engine">the note taker</a>
                        </div>

                        
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a href="#" data-toggle="modal" data-target="#image2">
                            <img class="img-fluid" src={teamgenerator} alt="Image 2" />
                        </a>
                    </div>

                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a href="#" data-toggle="modal" data-target="#image2">
                            <img class="img-fluid" src={teamgenerator} alt="Image 2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Projects;





{/* <section id="projects">
                <div class="container">
                    <div class="text-center mb-5">
                        <h5 class="text-primary h1">Projects</h5>
                        <h2 class="display-20 display-md-18 display-lg-16">Check My Latest Projects</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3 mb-1-9">
                            <div class="card-wrapper">
                                <div class="card-img"><img src="https://www.bootdey.com/image/280x280/FFB6C1/000000" alt="..." /></div>
                                <div class="card-body">
                                    <div>
                                        <h3 class="h5">Kitchen Cleaning</h3>
                                        <p class="display-30">Proin gravida nibh vel velit auctor alique.</p>
                                        <a href="#!" class="read-more">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-1-9">
                            <div class="card-wrapper">
                                <div class="card-img"><img src="https://www.bootdey.com/image/280x280/6495ED/000000" alt="..." /></div>
                                <div class="card-body">
                                    <div>
                                        <h3 class="h5">Window Cleaning</h3>
                                        <p class="display-30">Gravida proin nibh vel velit auctor alique.</p>
                                        <a href="#!" class="read-more">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-1-9">
                            <div class="card-wrapper">
                                <div class="card-img"><img src={teamgenerator} /></div>
                                <div class="card-body">
                                    <div>
                                        <h3 class="h5">Storage Cleaning</h3>
                                        <p class="display-30">Nibh proin gravida vel velit auctor alique.</p>
                                        <a href="#!" class="read-more">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-1-9">
                            <div class="card-wrapper">
                                <div class="card-img"><img src="https://www.bootdey.com/image/280x280/00CED1/000000" alt="..." /></div>
                                <div class="card-body">
                                    <div>
                                        <h3 class="h5">Floor Cleaning</h3>
                                        <p class="display-30">Vel proin gravida nibh velit auctor alique.</p>
                                        <a href="#!" class="read-more">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-1-9 mb-lg-0">
                            <div class="card-wrapper">
                                <div class="card-img"><img src="https://www.bootdey.com/image/280x280/483D8B/000000" alt="..." /></div>
                                <div class="card-body">
                                    <div>
                                        <h3 class="h5">Office Cleaning</h3>
                                        <p class="display-30">Auctor proin gravida nibh vel velit alique.</p>
                                        <a href="#!" class="read-more">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


 */}
