import './Hello.css'
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Collapsible from "../Collapsible/Collapsible.jsx";



function Hello({
                   color = 'blue',
                   bold = false,
                   children
               }){

    useEffect(()=> {

    })

    const [count, setCount] = useState(0);

    const fontWeight = bold ? 'bold': 'normal';
    const styles = {color, fontWeight};

    useEffect(()=> {
        document.title = `Page Title ${count}`
        return () => {
            document.title = `Component gone....`
        }
    }, [])

    const handleClick = event => {
        setCount(count + 1);
    }

    return <div  className={'hello'} >
        <p style={styles}>Hello {children}</p>
        <div>
            <button onClick={handleClick}>Counter says {count}</button>
        </div>
    </div>;
}

Hello.propTypes = {
    color: PropTypes.string,
    bold: PropTypes.bool,
}

export default Hello;