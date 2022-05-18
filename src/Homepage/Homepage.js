import './Homepage.css'
import Header_Image from '../Assets/Images/Header Image.jpg'
import Batman from '../Assets/Images/Batman.jpg'
import Spiderman from '../Assets/Images/Spiderman.jpg'
import Wild_West from '../Assets/Images/Wild West.jpg'
import search_icon from '../Assets/Icons/Search White.svg'
import { Input, InputAdornment } from "@mui/material/";
import HowToReachUs from '../HowToReachUs/HowToReachUs'
import Footer from '../Footer/Footer'

function Homepage() {
    return (
        <>
            <img src={Header_Image} alt="#" className='img-fluid' style={{ minHeight: "600px" }} />
            <hr style={{ margin: "0" }} />
            <div style={{ background: "black", color: "white" }}>
                <div className="movie_library_container">
                    <h1 style={{ fontSize: "50px" }}>MOVIE LIBRARY</h1>
                    <p style={{ fontSize: "24px" }} className="movie_library_container_paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                </div>
            </div>
            <div className='movie_library_container' style={{ background: "#2A2A2A", color: "white" }}>
                <div className="row pb-3">
                    <div className="col-lg-8">
                        <h1 style={{ fontSize: "39px" }}>Collect your favourites</h1>
                    </div>
                    <div className="col-lg-4 d-flex">
                        <Input className='p-2' style={{ fontSize: "20px", border: "1px solid white", borderRadius: "10px", width: "100%", color: "white" }} placeholder="Search title and add to grid" startAdornment={<InputAdornment position="start">
                            <img src={search_icon} alt="#" /></InputAdornment>} />
                    </div>
                </div>
                <div style={{ background: "white" }}>
                    <hr style={{ height: "2px" }} />
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4 pt-3">
                        <div class="card w-100" style={{ border: '0' }}>
                            <img src={Batman} class="card-img-top" alt="#" height="600px" />
                            <div class="card-body" style={{ background: "#535353" }}>
                                <h4>Batman Returns</h4>
                                <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 pt-3">
                        <div class="card w-100" style={{ border: '0' }}>
                            <img src={Spiderman} class="card-img-top" alt="#" height="600px" />
                            <div class="card-body" style={{ background: "#535353" }}>
                                <h4>Wild Wild West</h4>
                                <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 pt-3">
                        <div class="card w-100" style={{ border: '0' }}>
                            <img src={Wild_West} class="card-img-top" alt="#" height="600px" />
                            <div class="card-body" style={{ background: "#535353" }}>
                                <h4>The Amazing Spiderman</h4>
                                <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HowToReachUs />
            <Footer />
        </>
    );
}

export default Homepage;



