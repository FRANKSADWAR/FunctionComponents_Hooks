import React, {useState} from "react";
import ReactDOM from "react-dom";


const colorNames = ['Aquamarine','BlueViolet','Cartreuse','CornflowerBlue','Thistle','SpringGreen','SaddleBrown','PapayaWhip','MistyRose'];

function ColorPicker(){
    const [color, setColor] = useState("Tomato"); // set the state and initialize the state
    const divStyle = {background: color};

    return (
        <div style={divStyle}>
            <p>Selected color: {color}</p>
            {colorNames.map((colorName)=>(
                <button onClick={()=> setColor(colorName)} key={colorName}>
                    {colorName}
                </button>
            ))}
        </div>
    );
}


ReactDOM.render(<ColorPicker/>,document.getElementById('app'));