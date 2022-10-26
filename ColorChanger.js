import React, {useState} from "react";
import ReactDOM from "react-dom";

function ColorPicker(){
    const [color, setColor] = useState(); // the state can also be initialized
    /**
     * useState is a javascript function that returns an array with two values, the current state and the state setter function used to update the value of this state
     */
    const divStyle = {backgroundColor: color};

    return (
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button onClick={()=> setColor("Aquamarine")}>
                Aquamarine
            </button>
            <button onClick={()=> setColor("BlueViolet")}>
                BlueViolet
            </button>
            <button onClick={()=> setColor("Chartreuse")}>
                Chartreuse
            </button>
            <button onClick={()=> setColor("CornflowerBlue")}>
                CornflowerBlue
            </button>
        </div>
    );
}

function ToggleLoading(){
    const [isLoading,setIsLoading] = useState(true);
    return (
        <div>
            <p>The data is {isLoading ? 'Loading' : 'Not Loading'} </p>
        </div>

    );
}


// The state setter function can also be used outside of the JSX
export default function EmailTextImput(){
    const [email,setEmail] = useState('');
    const handleChange = (evt)=>{
        const updatedEmail = evt.target.value;
        setEmail(updatedEmail); // update the email state on the event occuring
    }
    // Using the state setter function outside the JASX makes it easier to modify the code
    // It can also be modified to look as below:

    const handleChange_ = (event) => setEmail(event.target.value);

    // or it can be made to be
    
    const _handleChange_ = ({target}) => setEmail(target.value);

    return (
        <input value={email} onChange={handleChange} />
    );

}


ReactDOM.render(<ColorPicker/>, document.getElementById('app'));