import './View.css'
import PropTypes from "prop-types";

function View({children}) {

    return (
        <section className={'view'}>
            {children}
        </section>
    );
}

View.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default View;