import Navbarr from './Navbarr'
import './Hiring.css'
import qr from './hiringqr.webp'
import Footerr from './Footerr'

function Hiring() {




    return (
        <>
        <Navbarr/>
       <div className="hir">
            <div className="hirh">
           <h1>We Are Hiring Interns</h1></div>
           <p>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.
There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.





</p>

<div className="second">


<div className="thir"><p>
  
  
Scan the QR code to complete your payment and submit the below
application form to start with your registration process.

Please keep the payment transaction ID handy for submitting
the form.

Note: This internship does not offer an opportunity to earn money,
rather helps an individual grow by working on the job and
earn a certificate upon successful completion.

Check out few of our open internship positions below
Refer the application form for more open positions


Digital Marketing Interns

General Management Interns

Technical/Software Experts

Product Management Interns

Content Interns and more...
  
  
  </p></div>
          <div className="pmhimg"><img className="himg" src={qr} /></div>


         
</div>      
           
           
           
           



        
        
  </div>

  <div className="frm">
<h1>Application Form</h1>
<p>registration fee RS 400</p>

<div className="grph">
  <div className="slct"> 
  <select class="select-css">
  <option >Choose relevant internship opening</option>
  <option>Digital Marketing</option>
  <option>Angular Development</option>
  <option >React Developer</option>
  <option >Java Developer</option>
  <option >SpringBoot Developer</option>
  <option >Sales</option>
  <option >Market Research</option>
  <option >Product Management</option>
  <option >Project Management</option>
  <option >Graphic Content Preperation</option>
</select>





</div>


<div className="slct"> 
  <select class="select-css">
  <option >What’s your employment status?</option>
  <option >College Student</option>
  <option >Employed</option>
  <option>Unemployed</option>
  <option >Other</option>
  
</select>

</div>


<div className="slct"> 
  <select class="select-css">
  <option value="">Do you have previous experience?
</option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
  
</select>





</div>

</div>
<div className="tnsct">
<div><label class="w3-text-blue"><b>Enter Transaction number</b></label></div>
<div><input class="w3-input w3-border" type="text"></input></div>
</div>










<a href="#" class="sqtn">
	<i class="fa fa-caret-right"></i> Apply
</a>






  </div>
  
  

<div className="white"></div>
      <Footerr/>

</>)
};

export default Hiring;