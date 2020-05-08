import React,{} from "react";
import styled from '@emotion/styled';

const SearchFn = styled.div`
  h2{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  form{
    position: relative;
    margin-bottom: 5px;
  }
  input[type="search"]{
    width: 100%;
    height: 40px;
    outline: 0;
    border: 0;
    border-radius: 20px;
    box-shadow: 1px 1px rgba(0,0,0,0.3);
  }
  .submit-btn{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    input[type="submit"]{
      width: 20px;
      height: 20px;
      display: inline-block;
      position: absolute;
      z-index: 1;
      opacity: 0;
    }
    .fa-search{
      font-size: 20px;
      position: relative;
      z-index: 2;
      pointer-events: none;
    }
  }
`;

export default function Search({onSubmitValue, bindValue}) {
  
  return (
      <SearchFn>
        <h2>現在位置</h2>
        <form onSubmit={ onSubmitValue }>
          <input type="search" { ...bindValue }/>
          <div class="submit-btn">
            <input type="submit" value=""/>
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </form>
      </SearchFn>
  );
}

