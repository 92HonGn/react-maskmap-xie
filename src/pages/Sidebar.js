import React from "react";

//側邊欄
import Search from '../components/Search';
// import Location from '../components/location';
import Filter from '../components/filter';
import ShowList from '../components/ShowList';
import styled from '@emotion/styled';

const SidebarComponent = styled.div`
  width: 350px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const SearchComponent = styled.div`
  padding: 20px;
  background: rgb(244, 249, 252);
  position: relative;
`;

export default function Sidebar({submit, Bind, rawData, distance, time, mask}) {
  
  return (
     <SidebarComponent>
       <SearchComponent>
          <Search onSubmitValue={ submit } bindValue={ Bind }/>
          {/* <Location onHandlePostion={location} /> */}
          <Filter onDistanceValue={distance} onTimeValue={time} onMaskValue={mask}/>
       </SearchComponent>
       <ShowList data={rawData}/>
     </SidebarComponent>
  );
}



