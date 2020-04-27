import React,{} from "react";

export default function Search({onSubmitValue, bindValue}) {
  
  return (
    <div className="search-components">
      <h2>現在位置</h2>
      <div className="search-fn">
        <form onSubmit={ onSubmitValue }>
          <input type="search" { ...bindValue } />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="filter-fn">
        <select name="" id="">
          <option value="" selected="selected">距離</option>
        </select>
        <select name="" id="">
          <option value="" selected="selected">營業時間</option>
        </select>
        <select name="" id="">
          <option value="" selected="selected">需求口罩</option>
        </select>
      </div>
    </div>
  );
}

// const useInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   return {
//     value,
//     setValue,
//     reset: () => setValue(""),
//     bind: {
//       value,
//       onChange: event => {
//         setValue(event.target.value);
//       }
//     }
//   };
// };