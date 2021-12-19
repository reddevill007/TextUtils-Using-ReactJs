import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>
            </div>
        </nav>
    )
}

// PropTypes defines the data type of props
// isRequired make it required  
Navbar.propTypes = {title: PropTypes.string.isRequired}

// defaultTypes defines the default value of props
Navbar.defaultTypes = {title: 'Title'}
