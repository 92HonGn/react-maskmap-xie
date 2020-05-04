import React,{} from "react";

export default function Search({onSubmitValue, bindValue}) {
  
  return (
      <div className="search-fn">
        <h2>現在位置</h2>
        <form onSubmit={ onSubmitValue }>
          <input type="search" { ...bindValue }/>
          <input type="submit" value="Submit" />
        </form>
      </div>
  );
}

