import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import axios from "../../utils/axios";
import { requests } from "../../utils/requests";
import EditIcon from "@material-ui/icons/Edit";

const Blog = (props) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(requests["deletePost"] + "/" + props.id, {
        id: props.id,
      });
      alert("Successfully deleted");
      window.location.href = "/NewsArticle";
    } catch (err) {
      console.log(err);
      alert("Something went Wrong");
      window.location.href = "/NewsArticle";
    }
  };
  const handleEdit = async () => {
    window.location.href = "/post/" + props.id;
  };
  return (
    <div>
      <div className="mbr-col-md-10">
        <div className="wrap">
          <div className="text-wrap ">
            <h6 className="mbr-fonts-style text1 mbr-text display-7">
              Date:{props.date}
            </h6>
            <h6 className="mbr-fonts-style text1 mbr-text display-7">
              Name:{props.name}
            </h6>
            <h6 className="mbr-fonts-style text1 mbr-text display-7">
              Email:{props.email}
            </h6>
            <h5 class="mt-2"> News/Article:{props.message}</h5>
          </div>
          {props.ownerid.toString() === props.userid.toString() ? (
            <DeleteOutlineIcon onClick={handleDelete} />
          ) : (
            <div></div>
          )}
          {props.ownerid.toString() === props.userid.toString() ? (
            <EditIcon onClick={handleEdit} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Blog;
