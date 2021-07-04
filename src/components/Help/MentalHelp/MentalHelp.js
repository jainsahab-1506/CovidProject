import React,{useState,useEffect} from 'react'
import Blog from './MentalBlog.js'
import "../../About/Grid.css";
import { Link } from 'react-router-dom';
import axios from "../../../utils/axios.js";
import { requests } from "../../../utils/requests.js";
const NewsArticle = () => {
    const [postData,setPostData] = useState([]);
    const getpostdata=async ()=>{
        try{
            const postdata=await axios.get(requests["getMentalData"]);
            console.log(postdata.data);
            setPostData(postdata.data);
        }
        catch(err){
            console.log(err);
            alert("Something Went Wrong")
        }
        
    }
    useEffect(() => {
        getpostdata();
        setInterval(getpostdata,10000);
        
    }, [])
    return (
        <div>
            <div className="mbr-col-md-10">
                <div className="wrap">
                    <div className="text-wrap vcenter">
                        <h6 className="mbr-fonts-style text1 mbr-text display-7">WANNA WRITE SOMETHING</h6>
                        <Link to="/MentalPost"><h2>Write Here</h2></Link>
                    </div>
                </div>
            </div>
            {
                postData.map((post,index) => <Blog key={index} name={post.ownerid.username} email={post.ownerid.email} message={post.message} date={post.Date}/>)  
            }
        </div>
        
    )
}

export default NewsArticle
