import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function PageTitle(){
    const [title,setTitle] = useState('');
    
    useEffect(()=>{
        document.title = `Hi ${title}`;
    },[title]);

    return (
        <div>
            <p>
                Use {title} input field below to rename this page !
            </p>
        </div>
    )

}