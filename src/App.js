import React,{ useState, useEffect } from 'react'
import moment from 'moment'
import Sidebar from './pages/Sidebar'
import MaskMap from './pages/MaskMap'
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [mapdata, setMapData] = useState([]);
  const [nowlongitude , setNowlongitude] = useState();
  const [nowlatitude , setNowlatitude] = useState();
  const {value, bind, reset} = useInput('');
  const [dist, setDist] = useState(2000);
  const [maskNum, setMaskNum] = useState(10000);
  const [timeDiv, setTimeDiv] = useState("上午");

  const apiURL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1k5dAvUSR7XCoG_H_RQx9pzYyJEMqG9AN06e4HNJIASIv-_gwTseX4sSI";

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

  //定理位置取得
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

  //關鍵字搜尋
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${value}`);
    reset();
  }
  const handleDistance = (evt) => {
    // console.log(evt.target.value);
    setDist(evt.currentTarget.value);
  }
  const handleTime = (evt) => {
    evt.preventDefault();
    setTimeDiv(evt.currentTarget.value);
  }
  const handleMask = (evt) => {
    evt.preventDefault();
    setMaskNum(evt.currentTarget.value);
  }


  //資料串接
  useEffect(() => {
    window.addEventListener("load", handlePosition);

    const fetchData = async () => {
      let response = await fetch(apiURL);
      let responseData  = await response.json();
      if(nowlongitude && nowlatitude){
        let filteredData = responseData.features.filter(item => {
          let addresskeywords = item.properties.address.includes(value);
          let storenamekeywords = item.properties.name.includes(value);
          let distanceMatch = space(nowlatitude, nowlongitude, item.geometry.coordinates[1], item.geometry.coordinates[0]);
          let maskTotal = item.properties.mask_adult + item.properties.mask_child;

          let weekdays = moment().format('dddd') + timeDiv  + "看診";
          let operate = item.properties.available.split("、").includes(weekdays);
          
          return (distanceMatch <  dist) && (maskTotal < maskNum) && (operate) && (addresskeywords || storenamekeywords);
        });

        let newData1 = filteredData.map(item=>{
          let nowTime = moment().format('dddd') + moment().format('a') + "看診";
          let operate = item.properties.available.split("、").includes(nowTime);
          let distanceMatch = space(nowlatitude, nowlongitude, item.geometry.coordinates[1], item.geometry.coordinates[0]);
          item.properties["Operate"] = (operate) ? "營業中" : "非營業中"
          item.properties["TimeDivision"] = moment().format('a');
          item.properties["OperateTime"] = "8:00~11:00";
          item.geometry["Distance"] = Math.floor(distanceMatch, 2);
          return item;
        })

        // let newData2 = newData1.filter(item => {
        //   let weekdays = moment().format('dddd');
        //   let operate = item.properties.available;
        //   console.log(weekdays + timeDiv + "看診");
        //   return operate.indexOf(weekdays + timeDiv + "看診") >= 0;
        // });
        
        console.log(newData1);
        setData(newData1);
        setMapData(newData1);
        // const newData = [...origin, newOne]
        
      }
    };
    fetchData();
  },[value, nowlongitude, nowlatitude, dist, maskNum]);

  return (
    <>
      <Sidebar 
        location={handlePosition} 
        submit={handleSubmit} 
        Bind={ bind } 
        rawData={data}
        distance={handleDistance}
        time={handleTime}
        mask={handleMask}/>
      <MaskMap mapData={mapdata}/>
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

