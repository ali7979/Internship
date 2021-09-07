import './Footerr.css'
import lg from './ENTREPRENEURSHIP.png'
import wv from "./wave.png"
function Footerr() {



    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }






    return (
        <>
        <div className="svv"><img src={wv}/></div>
<footer id="dk-footer" class="dk-footer">

        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <div class="dk-footer-box-info">
                        <a href="index.html" class="footer-logo">
                            <img src={lg} alt="footer_logo" class="img-fluid"/>
                        </a>
                        <p class="footer-info-text">
                           TEN ( The Entrepreneurship Network)
                        </p>
                        <div class="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-awarad">
                        <img src="images/icon/best.png" alt=""/>
                        
                    </div>
                </div>
                <div class="col-md-12 col-lg-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us">
                                <div class="contact-icon">
                                    <i class="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                <div class="contact-info">
                                    <h3>Delhi India</h3>
                                    <p>hr.contact.ten@gmail.com</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">
                                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <div class="contact-info">
                                    <h3>+918595986120</h3>
                                    <p>Give us a call</p>
                                </div>
                            </div>
                        </div>

                        


                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    <h3>Useful Links</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget">
                                <div class="section-heading">
                                    <h3>Subscribe</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <p> Don’t miss to subscribe to our new feeds, kindly fill the form below.
                                </p>
                                <form action="#">
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                        <input type="text" class="form-control" placeholder="Enter Name"/>
                                            <input type="email" class="form-control" placeholder="Email Address"/>
                                           <div className="fbt"> <button type="submit">
                                                <i class="fa fa-send"></i>
                                            </button></div>



                                           
                                        </div>
                                        
                                    </div>
                                    
                                </form>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span className="cpp">Copyright © 2021, All Right Reserved </span>
                    </div>
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                               
                            </ul>
                        
                        </div>
                    </div>
                   
                </div>
                
            </div>
            
        </div>
    
        <div id="back-to-top" class="back-to-top">
            <button onClick={topFunction}    href="#" class="btn btn-dark" type="submit" title="Back to Top" style={{display:'block'}}>
                <i class="fa fa-angle-up"></i>
            </button>
        </div>
        
</footer>
</>)
};

export default Footerr;
