import './Footer.css'
import Twitter_White from '../Assets/Icons/Twitter White.svg'
import Youtube_White from '../Assets/Icons/Youtube White.svg'

function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-light">IT Group </h2>
                        <h4 className='pt-2' style={{ color: 'white' }}>C. Salvador de Madariaga, 1 <br />
                            28027 Madrid <br />
                            Spain
                        </h4>
                    </div>
                    <div className="col-md-6 footer_right_side_before_md_scrn">
                        <h4 className="text-light">Follow us on &emsp;<img src={Twitter_White} alt="#" />&emsp;<img src={Youtube_White} alt="#" /></h4>
                    </div>
                </div>
            </div>
            <hr style={{ margin: "0" }} />
            <div className="footer_container_copyright">
                <div className="row">
                    <div className="col-xl-6">
                        <h5 className='pt-2' style={{ color: '#8c8c8c' }}>Copyright © 2022 IT Hotels. All rights reserved.</h5>
                    </div>
                    <div className="col-xl-6 footer_right_side_before_md_scrn_copyright">
                        <h5 className='pt-2' style={{ color: '#8c8c8c' }}>Photos by <u>Felix Mooneeram</u> & <u>Serge Kutuzov</u> on <u>Unsplash</u></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;



