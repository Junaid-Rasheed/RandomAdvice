import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

export const Home = () => {
  const [file, setFile] = useState();
  const[load,isLoading] = useState( false );

  const DataApi = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { advice } = data.slip;
    setFile(advice);
    isLoading(true);
  };

  useEffect(() => {
    DataApi();
  });

if(!load){
    return(<h2>...loading</h2>)
}

  return (
    <div className="app">
      <div className="cards">
        <h1 className="heading">{file}</h1>
        <Button onClick={DataApi}  
        style={{color:'#353b45'}} 
        startIcon={<ThreeSixtyIcon/>}
        >
            <h4>Give me Advice</h4>
        </Button>
      </div>
    </div>
  );
};
