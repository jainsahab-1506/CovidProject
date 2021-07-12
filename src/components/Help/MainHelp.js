import react from 'react';
import { Link } from 'react-router-dom';
import '../About/Grid.css';
export default function MainHelp(){
    return (
        <div style={{marginLeft:"500px",marginBottom:"100px",marginRight:"500px",marginTop:"10px"}}>
        <div className="row">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">NEED FINANCE HELP</h6>
            <Link to="/FinanceHelp"><h2>CLICK HERE</h2></Link>
           </div>
        </div>
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">NEED MEDICAL HELP</h6>
            <Link to="/MedicalHelp"><h2>CLICK HERE</h2></Link>
           </div>
        </div>
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 class="mbr-fonts-style text1 mbr-text display-7">NEED MENTAL HELP</h6>
            <Link to="/MentalHelp"><h2>CLICK HERE</h2></Link>
           </div>
        </div>
        </div>
        </div>

      
    )
}