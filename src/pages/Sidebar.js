import React from "react";

//側邊欄
import Search from '../components/Search';
import Location from '../components/location';
import Filter from '../components/filter';
import ShowList from '../components/ShowList';

export default function Sidebar({location, submit, Bind, rawData}) {
  
  return (
     <div className="sidebar-component">
       <div className="search-components">
          <Search onSubmitValue={ submit } bindValue={ Bind }/>
          <Location onHandlePostion={location} />
          <Filter/>
       </div>
         <ShowList data={rawData}/>
     </div>
  );
}



