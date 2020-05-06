import React from "react";

const ShowList = ({data}) => {
  return (
    <div>
      <br/>
      <ul>
        {data.map(el => (
          <li>{el.properties.address}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowList;
