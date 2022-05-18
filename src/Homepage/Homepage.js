import axios from "axios";
import './Homepage.css'
import Footer from '../Footer/Footer'
import React, { useState } from 'react'
import Batman from '../Assets/Images/Batman.jpg'
import Spiderman from '../Assets/Images/Spiderman.jpg'
import Wild_West from '../Assets/Images/Wild West.jpg'
import HowToReachUs from '../HowToReachUs/HowToReachUs'
import { Input, InputAdornment } from "@mui/material/";
import search_icon from '../Assets/Icons/Search White.svg'
import header_video from '../Assets/Videos/Header Video.mp4'
import Header_Image from '../Assets/Images/Header Image.jpg'

function Homepage() {

    let [searchWord, setsearchWord] = useState("")
    let [SearchData1, setSearchData1] = useState([])
    let [SearchData2, setSearchData2] = useState([])
    let [SearchData3, setSearchData3] = useState([])
    function onSearchFormSubmit(e) {
        e.preventDefault()
        fetch(`http://127.0.0.1:5000/search_word_for_data_1/${searchWord}`).then((result) => {
            result.json().then((resp) => {
                setSearchData1(resp)
            })
        })
        fetch(`http://127.0.0.1:5000/search_word_for_data_2/${searchWord}`).then((result) => {
            result.json().then((resp) => {
                setSearchData2(resp)
            })
        })
        fetch(`http://127.0.0.1:5000/search_word_for_data_3/${searchWord}`).then((result) => {
            result.json().then((resp) => {
                setSearchData3(resp)
            })
        })
    }

    return (
        <>
            {/* <img src={Header_Image} alt="#" className='img-fluid' style={{ minHeight: "600px" }} /> */}
            <video className='img-fluid' controls autoPlay>
                <source src={header_video} type="video/mp4" />
            </video>
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
                        <form onSubmit={onSearchFormSubmit} style={{ width: "100%" }}>
                            <Input className='p-2' value={searchWord} onChange={(e) => setsearchWord(e.target.value)} style={{ fontSize: "20px", border: "1px solid white", borderRadius: "10px", width: "100%", color: "white" }} placeholder="Search title and add to grid" startAdornment={<InputAdornment position="start">
                                <img src={search_icon} alt="#" /></InputAdornment>} />
                        </form>
                    </div>
                </div>
                <div style={{ background: "white" }}>
                    <hr style={{ height: "2px" }} />
                </div>
                <div className="row">
                    {SearchData1.length === 0 ?
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={Batman} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>Batman Returns</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={SearchData1[0]} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>{SearchData1[2]}</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>{SearchData1[1]}...</p>
                                </div>
                            </div>
                        </div>
                    }
                    {SearchData2.length === 0 ?
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={Spiderman} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>Wild Wild West</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={SearchData2[0]} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>{SearchData2[2]}</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>{SearchData2[1]}...</p>
                                </div>
                            </div>
                        </div>
                    }
                    {SearchData3.length === 0 ?
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={Wild_West} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>The Amazing Spiderman</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12 col-lg-6 col-xl-4 pt-3">
                            <div class="card w-100" style={{ border: '0' }}>
                                <img src={SearchData3[0]} class="card-img-top" alt="#" height="600px" />
                                <div class="card-body" style={{ background: "#535353" }}>
                                    <h4>{SearchData3[2]}</h4>
                                    <p class="card-text" style={{ fontSize: "22px" }}>{SearchData3[1]}...</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <HowToReachUs />
            <Footer />
        </>
    );
}

export default Homepage;



