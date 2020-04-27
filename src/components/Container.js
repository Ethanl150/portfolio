import React from "react";

function Container(props) {
    return (
        <div className="container-fluid my-5 image-container">{props.children}</div>
    )
}

export default Container;