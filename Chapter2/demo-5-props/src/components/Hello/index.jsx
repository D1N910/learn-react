import React from 'react';
import PropTypes from 'prop-types';

function getH1(props) {
    return <h1>Hello { props.name }</h1>
}

export default class Hello extends React.Component {
    render() {
        return <div>
            { getH1(this.props) }
            { this.props.children }
            <p style={{ color: 'red' }}>This is my firest React app.</p>
        </div>
    }
}

Hello.propTypes = {
    name: PropTypes.string
}

Hello.defaultProps = {
    name: '老蛋糕'
}