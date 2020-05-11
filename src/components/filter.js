import React, {} from "react";
import styled from '@emotion/styled';

const FilterFn = styled.div`
  margin-top: 20px;
  font-size: 0px;
  .distance, .time, .mask-total{
    width: calc(33.33% - 14px);
    border-radius: 36px;
    display: inline-block;
    overflow: hidden;
    background: #cccccc;
    border: 1px solid #cccccc;
    font-size: 14px;
    select{
      width: 100%;
      border: 0px;
      outline: none;
      text-align-last: center;
    }
  }
  .time{
    margin: 0 20px;
  }
`;

export default function filter() {
  
  return (
      <FilterFn>
        <div className="distance">
          <select name="" id="">
            <option value="" selected="selected">距離</option>
          </select>
        </div>
        <div className="time">
          <select name="" id="">
            <option value="" selected="selected">營業時間</option>
          </select>
        </div>
        <div className="mask-total">
          <select name="" id="">
            <option value="" selected="selected">需求口罩</option>
          </select>
        </div>
      </FilterFn>
  );
}
