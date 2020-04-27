import React,{ useState } from "react";

//側邊欄
import Search from '../components/Search';
import ShowList from '../components/ShowList';

export default function Sidebar() {
  const { value, bind, reset } = useInput('');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  }
  return (
     <>
      <Search onSubmitValue={ handleSubmit } bindValue={ bind } />
      <ShowList storeName={value} />
     </>
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

