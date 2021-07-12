import React, { useState, useEffect } from "react";
import Blog from "./FinanceBlog";
import "../../About/Grid.css";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios.js";
import { requests } from "../../../utils/requests";
import { useSelector } from "react-redux";
const NewsArticle = () => {
  const userinfo = useSelector((state) => state.auth.userinfo);
  console.log(userinfo,"arpan jain");
  const [postData, setPostData] = useState([]);
  const getpostdata = async () => {
    try {
      const postdata = await axios.get(requests["getFinanceData"]);
      console.log(postdata.data,"rpan aidsdjiajdiasd");
      setPostData(postdata.data);
    } catch (err) {
      console.log(err);
      alert("Something Went Wrong");
    }
  };
  useEffect(() => {
    getpostdata();
    setInterval(getpostdata, 10000);
  }, []);
  return (
    <div>
      <div className="mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap vcenter">
            <h6 className="mbr-fonts-style text1 mbr-text display-7">
              WANNA WRITE SOMETHING
            </h6>
            <Link to="/FinancePost">
              <h2>Write Here</h2>
            </Link>
          </div>
        </div>
      </div>
      {
      postData
        ? postData.map((post, index) => (
            <Blog
              key={index}
              id={post._id}
              userid={userinfo._id}
              ownerid={post.ownerid._id}
              name={post.ownerid.username}
              email={post.ownerid.email}
              message={post.message}
              date={post.Date}
            />
          ))
        : <div></div>}
    </div>
  );
};

export default NewsArticle;
