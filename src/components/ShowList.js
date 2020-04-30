import React, { useState, useEffect } from "react";

const ShowList = ({storeName}) => {
  const [data, setData] = useState([]);
  // const [enteredFilter, setEnteredFilter] = useState("");
  const apiURL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI";

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(apiURL);
      let responseData  = await response.json();
      let filteredData = responseData.features.filter(item => {
        return item.properties.address.includes(storeName);
      });
      setData(filteredData);
    };
    fetchData();
  },[storeName]);

  return (
    <div>
      <ul>
        {data.map(el => (
          <li>{el.properties.address}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowList;
