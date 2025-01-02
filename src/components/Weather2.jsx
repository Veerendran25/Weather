import React from 'react'
import Spline from '@splinetool/react-spline';
import Fetch from './Fetch';

const Weather = () => {
    const [input]=Fetch("https://api.weatherapi.com/v1/current.json?key=6a53d4f8d5d34019a4b172014242812&q=Chennai")
    if (!input || !input.current) {
        return <div>Loading...</div>;
    }const getSceneUrl = () => {
        if (!input.current.condition.text) {
        return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
        } else if (input.current.condition.text == "Sunny") {
        return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
        }
        else if (input.current.condition.text == "Clear") {
            return "https://prod.spline.design/chIwTdQ7-JhV3jHQ/scene.splinecode"; 
        } else if (input.current.condition.text =="Thunder") {
            return "https://prod.spline.design/Vlv3dFnQxjttuaQN/scene.splinecode"; 
        } else if (input.current.condition.text == "Rainy") {
        return "https://prod.spline.design/AwKraN20cBQygTy7/scene.splinecode"; 
        } else if(input.current.condition.text == "Partly Cloudy") {
        return "https://prod.spline.design/Fr2qEW3pgMnH4LXx/scene.splinecode";
        }
        else{
        return "https://prod.spline.design/j6L0pe6K1Py8Y0ag/scene.splinecode";
        }
    };
    
    return (
        <div className="Card">
        <Spline scene={getSceneUrl()} />
    
    <div className='writing'>
        <h1>{input.current.temp_c}&#176;C</h1>
        <p>{input.location.name}</p>
    </div>
    </div>
)
}

export default Weather

