import React,{ useState, useEffect } from 'react'
import Sidebar from './pages/Sidebar'
import MaskMap from './pages/MaskMap'
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [localdata, setLocalData] = useState([]);
  const [nowlongitude , setNowlongitude] = useState();
  const [nowlatitude , setNowlatitude] = useState();
  const {value, bind, reset} = useInput('');

  const apiURL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI";

  const distance = 800;

  const space = (latitude1, longitude1, latitude2, longitude2) => {
    let radLat1 = latitude1 * Math.PI / 180.0;
    let radLat2 = latitude2 * Math.PI / 180.0;
    let a = radLat1 - radLat2;
    let b = longitude1 * Math.PI / 180.0 - longitude2 * Math.PI / 180.0;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000 * 1000;
    return s //單位公尺
  }

  const handlePosition = () =>  {
    if(navigator.geolocation) {
      function error() {
        alert('無法取得你的位置')
      }
      function success(position) {
        console.log(`經度:${position.coords.longitude}, 緯度:${position.coords.latitude}`);
        setNowlongitude(position.coords.longitude);
        setNowlatitude(position.coords.latitude);
      }
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  }

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(apiURL);
      let responseData  = await response.json();
      if(nowlongitude && nowlatitude){
        let filteredData = responseData.features.filter(item => {
          return space(nowlatitude, nowlongitude, item.geometry.coordinates[1], item.geometry.coordinates[0]) < distance;
        });
        setLocalData(filteredData);
      }else{
        let filteredData = responseData.features.filter(item => {
          return item.properties.address.includes(value);
        });
        setData(filteredData);
      }
    };
    fetchData();
  },[value, nowlongitude, nowlatitude]);

  return (
    <>
      <Sidebar location={handlePosition} submit={handleSubmit} Bind={ bind } initData={data} localData={localdata}/>
      <MaskMap />
    </>
  );
}

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

