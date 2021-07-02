import React from 'react'
import Blog from './blog.js'
import "../About/Grid.css";
import { Link } from 'react-router-dom';
const NewsArticle = () => {
    return (
        <div>
            <div className="mbr-col-md-10">
                <div className="wrap">
                    <div className="text-wrap vcenter">
                        <h6 class="mbr-fonts-style text1 mbr-text display-7">WANNA WRITE SOMETHING</h6>
                        <Link to="/post"><h2>Write Here</h2></Link>
                    </div>
                </div>
            </div>
            <Blog/>
        </div>
        
    )
}

export default NewsArticle
