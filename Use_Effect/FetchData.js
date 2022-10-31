/**
 * A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect 
 * after re-renders unless the value of one of the valriables in our dependecy array has changed.
 * 
 * If the value of a dependecy has changed, then the Effect Hook will call our effect again.
 * 
 */

import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";


function Forecast(){
    const [data,setData] = useState();
    const [notes,setNotes] = useState({});
    const [forecastType, setForecastType] = useState('/daily'); // set the initial state to the daily datasets

    useEffect(()=> {
        alert('Requested data from the server .....');
        get(forecastType).then((response) => {
            alert('Response: ' +JSON.stringify(response, '', 2));
            setData(response.data); // set the data using the state data setter
        });
    }, [forecastType]); // pass a dependecy array so that the re-rendering is done when the forecastType changes

    const handleChange = (index) => ({target}) => setNotes((prev)=> ({
        ...prev, // using the spread syntax to set the current state using the previous state
        [index] : target.value
    }));

    if(!data){
        return <p>Loading ..... </p>;
    }

    return (
        <div className="App">
            <h1>My weather app</h1>
            <div>
                <button onClick={()=> setForecastType('/daily')}> 5-Day </button>
                <button onClick={()=> setForecastType('/hourly')}> Today </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Avg Temp</th>
                        <th>Precipitation</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.id}>
                            <td>{item.summary}</td>
                            <td>{item.temp.avg}°F</td>
                            <td>{item.precip}%</td>
                            <td>
                                <input
                                    value={notes[item.id] || '' }
                                    onChange={handleChange(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}