import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-trasparent d-none d-lg-block">
                <div class="container-fluid">
                    <a class="navbar-brand d-none" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="card bg-transparent col-10">
                            <form class="d-flex justify-content-end  text-white gap-5 align-items-center" role="search">
                                <p className='pt-3'>Personal Info</p>
                                <p className='pt-3'>Elections</p>
                                <p className='pt-3'>Contact</p>
                                <button className='border-0 rounded text-white' style={{ height: "34px", width: "140px", backgroundColor: "#015FC7" }}>Vote</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <a class="text-white fs-1 d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="bi bi-list"></i>
            </a>
            <div class="offcanvas offcanvas-start text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ backgroundColor: "#001124", }}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-white" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-white">
                    <div className="border-bottom mt-3 p-2">
                        <p>Pesonal Info</p>
                    </div>
                    <div className="border-bottom mt-3 p-2">
                        <p>Elcections</p>
                    </div>
                    <div className="border-bottom mt-3 p-2">
                        <p>Contact</p>
                    </div>
                    <div className="border-bottom mt-3 p-2">
                    <button className='border-0 rounded text-white' style={{ height: "34px", width: "140px", backgroundColor: "#015FC7" }}>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar