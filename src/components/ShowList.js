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
  .store-info{
    margin-bottom: 14px;
  }
  
  .mask-total{
    display: flex;
    div{
      flex: 1 1 50%;
      border-radius: 20px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
    }
    div:nth-child(1){
      margin-right: 20px;
    }
    span{
      font-size: 30px;
      margin: 0 5px;
    }
  }
  .adult{
    background: rgb(232,203,155);
  }
  .child{
    background: rgb(192,228,187);
  }
  .sellout{
    background: rgb(177,177,177);
  }
`;


const ShowList = ({data}) => {
  return (
    <StoreLists>
      <ul>
        {/* {data.map(el => (
          <li>{el.properties.address}</li>
        ))} */}
        {data.map(el => (
          <li>
            <div className="store-status">
              <h2 className="name">{el.properties.name}</h2>
              <div className="status">
                <span>營業中</span>
                <span>300m</span>
              </div>
            </div>
            <div className="store-info">
              <p className="address">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{el.properties.address}</span>
              </p>
              <p className="phone">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>{el.properties.phone}</span>
              </p>
              <p className="open-time">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span>{el.properties.available}</span>
              </p>
            </div>
            <div className="mask-total">
              <div className="adult">
                成人口罩<span>{el.properties.mask_adult}</span>個
              </div>
              <div className="child">
                兒童口罩<span>{el.properties.mask_child}</span>個
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StoreLists>
  );
};
export default ShowList;
