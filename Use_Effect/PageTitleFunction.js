import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function PageTitle(){
    const [title,setTitle] = useState('');
    
    // in the function components, we use the useEffect function to update, and set side effects for the components as compared to the three lifecycle methods in class based components
    useEffect(()=>{
        document.title = `Hi ${title}`;
    },[title]);

    return (
        <div>
            <p>
                Use {title} input field below to rename this page !
            </p>
            <input
                onChange={({target})=> setName(target.value)}
                value = {title}
                type ='text'
            />
        </div>
    );

}