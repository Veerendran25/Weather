import React from 'react';
import Spline from '@splinetool/react-spline';

const SearchWeather = (props) => {
const getSceneUrl = () => {
    if (!props.weather) {
    return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
    } else if (props.weather == "Sunny") {
    return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
    }
    else if (props.weather == "Clear") {
        return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
    } else if (props.weather =="Thunder") {
        return "https://prod.spline.design/Vlv3dFnQxjttuaQN/scene.splinecode"; 
    } else if (props.weather == "Rainy") {
    return "https://prod.spline.design/AwKraN20cBQygTy7/scene.splinecode"; 
    }
    else if (props.weather == "Light drizzle") {
        return "https://prod.spline.design/AwKraN20cBQygTy7/scene.splinecode"; 
        } 
    else if(props.weather == "Partly Cloudy") {
    return "https://prod.spline.design/Fr2qEW3pgMnH4LXx/scene.splinecode";
    }
    else{
    return "https://prod.spline.design/j6L0pe6K1Py8Y0ag/scene.splinecode";
    }
};

return (
    <div className="Card">
    <Spline scene={getSceneUrl()} />

    <div className="writing">
        <h1>{props.current}&#176;C</h1>
        <p>{props.location}</p>
    </div>
    </div>
);
};

export default SearchWeather;
