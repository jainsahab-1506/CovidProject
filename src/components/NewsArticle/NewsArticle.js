import React, { useState, useEffect } from "react";
import Blog from "./Blog.js";
import "../About/Grid.css";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.js";
import { requests } from "../../utils/requests";
import { useSelector } from "react-redux";
const NewsArticle = () => {
  const userinfo = useSelector((state) => state.auth.userinfo);
  console.log(userinfo);
  const [postData, setPostData] = useState([]);
  const getpostdata = async () => {
    try {
      const postdata = await axios.get(requests["getPostData"]);
      console.log(postdata.data);
      setPostData(postdata.data);
    } catch (err) {
      console.log(err);
      alert("Something Went Wrong");
    }
    useEffect(() => {
        getpostdata();
        setInterval(getpostdata,10000);
    }, [])
    return (
        <div>
            </div>
};

export default NewsArticle;
