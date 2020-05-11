import React, {} from "react";
import styled from '@emotion/styled';


const CurrentLocation = styled.div`
  outline: 1px solid red;
  width: calc(100% - 40px);
  position: absolute;
  background: #fff;
  bottom: 40px;
  display: none;
`;

export default function location({onHandlePostion}) {
  
  return (
      <CurrentLocation onClick={onHandlePostion}>
        定位目前所在地
      </CurrentLocation>
  );
}
