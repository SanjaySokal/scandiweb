import React from "react";

function ShowInfoCard({ node }) {
    return (
        <div className="datacontainer">
            <div className="dataitem">
                Name : {node.originalName}
            </div>
        </div>
    );
}

export default ShowInfoCard;