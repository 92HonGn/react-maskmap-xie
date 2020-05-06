import React,{ useState } from "react";

//側邊欄
import Search from '../components/Search';
import Location from '../components/location';
import Filter from '../components/filter';

import ShowList from '../components/ShowList';

export default function Sidebar() {
  const { value, bind, reset } = useInput('');
  const [nowlongitude , setNowlongitude] = useState();
  const [nowlatitude , setNowlatitude] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  }

  const handlePosition = () =>  {
    if(navigator.geolocation) {
      // 使用者不提供權限，或是發生其它錯誤
      function error() {
        alert('無法取得你的位置')
      }
      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        console.log(`經度:${position.coords.longitude}, 緯度:${position.coords.latitude}`);
        setNowlongitude(position.coords.longitude);
        setNowlatitude(position.coords.latitude);
      }
      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }
  }

  return (
     <div className="sidebar-component">
       <div className="search-components">
          <Search onSubmitValue={ handleSubmit } bindValue={ bind }/>
          <Location onHandlePostion={handlePosition} />
          <Filter/>
       </div>
       <ShowList storeName={value} currentlongitude={nowlongitude} currentlatitude={nowlatitude}/>
     </div>
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

