import React, { useState, useEffect } from 'react';
import SearchWeather from './SearchWeather';

const Form = () => {
    const [search, setSearch] = useState('');
    const [url, setUrl] = useState('');
    const [input, setInput] = useState(null); 
    const func = (e) => {
        e.preventDefault();
        
        if (search.trim()) {
            setUrl(`https://api.weatherapi.com/v1/current.json?key=6a53d4f8d5d34019a4b172014242812&q=${search}`);
            setSearch('')
        }
    };

    useEffect(() => {
        if (!url) return; 

        const fetchData = async () => {
            try {
                const response = await fetch(url);               
                const res = await response.json();
                setInput(res);
                console.log(res)
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData()
    }, [url]); 

    return (
        <div>
            <form onSubmit={func}>
                <div className="inputText">
                    <input
                        type="text"
                        placeholder="Enter City"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <button type="submit">Search</button>
                </div>
            </form>

            {input && input.location && input.current && (
                <div className='details'>
                    <h1>{input.location.name}</h1>
                    <h2>{input.current.temp_c} &#176;C</h2>
                    <h2>{input.current.condition.text}</h2>
                    <SearchWeather current={input.current.temp_c} location={input.location.name} weather={input.current.condition.text}/>
                </div>
            )}
        </div>
    );
};

export default Form;
