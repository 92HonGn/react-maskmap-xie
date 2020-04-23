import React from 'react';
import './App.css';

//地圖組建
import Map from './components/Search';
import ShowList from './components/ShowList';

export default function App() {
  return (
     <>
      <Map />
      <ShowList />
     </>
  );
}

