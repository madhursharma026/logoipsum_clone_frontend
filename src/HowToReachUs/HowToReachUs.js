import './HowToReachUs.css'
import { Link } from 'react-router-dom';

function HowToReachUs() {

    function FormSubmit(){
        alert("submit form")
    }

    return (
        <div style={{ background: "black" }}>
            <div className="row form_and_map_container">
                <div className="col-xl-5">
                    <h1 className='text-light'>
                        How to reach us
                    </h1>
                    <p className='text-light' style={{ fontSize: "26px", color: "b5b5b5" }}>
                        Lorem ipsum dolor sit amet, consetetur.
                    </p>
                    <form onSubmit={FormSubmit}>
                        <div className="row pt-5">
                            <div className="col-md-6">
                                <h3 className='pt-2' style={{ color: 'gray' }}>First Name *</h3>
                                <input type="text" required style={{ background: "#535353", color: 'white', fontSize: "28px", width: "100%", borderRadius: "10px" }} />
                            </div>
                            <div className="col-md-6">
                                <h3 className='pt-2' style={{ color: 'gray' }}>Last Name *</h3>
                                <input type="text" required style={{ background: "#535353", color: 'white', fontSize: "28px", width: "100%", borderRadius: "10px" }} />
                            </div>
                        </div>
                        <h3 className='pt-2' style={{ color: 'gray' }}>Email *</h3>
                        <input type="email" required style={{ background: "#535353", color: 'white', fontSize: "28px", width: "100%", borderRadius: "10px" }} />
                        <h3 className='pt-2' style={{ color: 'gray' }}>Telephone</h3>
                        <input type="text" required pattern="[0-9]{10}"  autoComplete="off" minLength="10" maxLength="10" style={{ background: "#535353", color: 'white', fontSize: "28px", width: "100%", borderRadius: "10px" }} />
                        <h3 className='pt-2' style={{ color: 'gray' }}>Message</h3>
                        <textarea rows="4" required style={{ background: "#535353", color: "white", fontSize: "28px", width: "100%", borderRadius: "10px" }} />
                        <h3 className='pt-2' style={{ color: 'gray' }}>* required fields</h3>
                        <h3 className='pt-2' style={{ color: 'gray' }}><input type="checkbox" required style={{ transform: "scale(2)" }} />&emsp; I agree to the <Link to="/" style={{ textDecoration: "underline", color: "white" }}>Terms & Conditions</Link></h3>
                        <button type="submit" class="btn btn-warning py-2 mt-3 submit_btn" style={{ paddingLeft: "70px", paddingRight: "70px", color: "white" }}><b>Submit</b></button>
                    </form>
                </div>
                <div className="col-xl-7 p-5">
                    <iframe src="https://maps.google.com/maps?q=6.84487687987198,79.94042534240663&hl=es;z=14&amp;output=embed" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default HowToReachUs;



