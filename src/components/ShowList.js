import React from "react";
import styled from '@emotion/styled';

const StoreLists = styled.div`
  overflow-y: scroll;
  height: calc(100% - 175px);
  background: #fff;
  ul li{
    list-style: none;
    border-bottom: 4px solid rgba(0,0,0,0.3);
    margin: 0 15px;
    padding: 15px 0;
  }
`;


const ShowList = ({data}) => {
  return (
    <StoreLists>
      <ul>
        {/* {data.map(el => (
          <li>{el.properties.address}</li>
        ))} */}
        <li>
          <div className="store-status">
            <h2 className="name">傑登藥局</h2>
            <div className="status">
              <span>營業中</span>
              <span>300m</span>
            </div>
          </div>
          <div className="store-info">
            <p className="address">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>基隆市仁愛區孝三路9號</span>
            </p>
            <p className="phone">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>02 2423 938</span>
            </p>
            <p className="open-time">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>07:00-09:00</span>,
              <span>13:00-20:00</span>
            </p>
          </div>
          <div className="mask-total">
            <div className="adult">
              成人口罩<span>11</span>個
            </div>
            <div className="child">
              兒童口罩<span>123</span>個
            </div>
          </div>
        </li>
        <li>
          <div className="store-status">
            <h2 className="name">傑登藥局</h2>
            <div className="status">
              <span>營業中</span>
              <span>300m</span>
            </div>
          </div>
          <div className="store-info">
            <p className="address">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>基隆市仁愛區孝三路9號</span>
            </p>
            <p className="phone">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>02 2423 938</span>
            </p>
            <p className="open-time">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>07:00-09:00</span>,
              <span>13:00-20:00</span>
            </p>
          </div>
          <div className="mask-total">
            <div className="adult">
              成人口罩<span>11</span>個
            </div>
            <div className="child">
              兒童口罩<span>123</span>個
            </div>
          </div>
        </li>
      </ul>
    </StoreLists>
  );
};
export default ShowList;
