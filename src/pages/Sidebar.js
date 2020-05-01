import React,{ useState } from "react";

//側邊欄
import Search from '../components/Search';
import ShowList from '../components/ShowList';

export default function Sidebar() {
  const { value, bind, reset } = useInput('');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${value}`);
    reset();
  }

  const handlePosition = () =>  {
    // alert(`Hi`);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      // useInput("Geolocation is not supported by this browser.")
      // x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
  }

  return (
     <>
      <Search onSubmitValue={ handleSubmit } bindValue={ bind } onClickPositon={ handlePosition } />
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

