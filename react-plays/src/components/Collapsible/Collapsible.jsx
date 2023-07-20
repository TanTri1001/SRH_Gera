import './Collapsible.css'
import {useState} from "react";
import PropTypes from 'prop-types';


function Collapsible({
                         title = '',
                         children
                     }){

    const [collapsed, setCollapsed] = useState(false);

    const contentClassNames = `collapsible-content${collapsed ? ' hidden': ''}`

    const handleCollapseClick = event => {
        setCollapsed(!collapsed);
    }

    return (
        <section  className={'collapsible'} >
            <div className={'collapsible-header'}>
                <h2 className={'collapsible-header-title'}>{title}</h2>
                <button
                    className={'collapsible-header-button' }
                    onClick={handleCollapseClick}>
                    {collapsed ? '▼' : '▲'}
                </button>
            </div>
            <div className={contentClassNames}>
                {children}
            </div>
        </section>
    );
}

Collapsible.propTypes = {
    title: PropTypes.string.isRequired
}

export default Collapsible;