import React from 'react'

const blog = (props) => {
    console.log(props);
    return (
        <div>
            <div className="mbr-col-md-10">
                <div className="wrap">
                    <div className="text-wrap ">
                    <h6 className="mbr-fonts-style text1 mbr-text display-7">Date:{props.Date}</h6>
                        <h6 className="mbr-fonts-style text1 mbr-text display-7">Name:{props.name}</h6>
                        <h6 className="mbr-fonts-style text1 mbr-text display-7">Email:{props.email}</h6>
                        <h6 className="mbr-fonts-style text1 mbr-text display-7">News/Article:{props.message}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default blog
