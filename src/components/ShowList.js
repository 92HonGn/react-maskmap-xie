import React, { useState, useEffect } from "react";

const ShowList = ({storeName, currentlongitude, currentlatitude}) => {
  const [data, setData] = useState([]);
  // const [enteredFilter, setEnteredFilter] = useState("");
  const apiURL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI";

  const distance = 800;

  const space = (latitude1, longitude1, latitude2, longitude2) => {
    // console.log(latitude1, longitude1, latitude2, longitude2);
    let radLat1 = latitude1 * Math.PI / 180.0;
    let radLat2 = latitude2 * Math.PI / 180.0;
    let a = radLat1 - radLat2;
    let b = longitude1 * Math.PI / 180.0 - longitude2 * Math.PI / 180.0;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000 * 1000;
    return s //單位公尺
  }

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(apiURL);
      let responseData  = await response.json();

      if(currentlongitude && currentlatitude){

        let filteredData = responseData.features.filter(item => {
          return space(currentlatitude, currentlongitude, item.geometry.coordinates[1], item.geometry.coordinates[0]) < distance;
        });
        setData(filteredData);

      }else{

        let filteredData = responseData.features.filter(item => {
          return item.properties.address.includes(storeName);
        });
        setData(filteredData);

      }
      
    };

    fetchData();
  },[storeName, currentlongitude, currentlatitude]);

  return (
    <div>
      經度:{currentlongitude}
      <br/>
      緯度:{currentlatitude}
      <ul>
        {data.map(el => (
          <li>{el.properties.address}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowList;
