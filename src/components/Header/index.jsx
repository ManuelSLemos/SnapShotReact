import React from 'react';

import Form from './Form';

import './style.css';

// React Hooks
const Header = () => {
    return (
        <header>
            <h1 className="header-title"> SnapShot </h1>
            <Form />
            { /* Menu */ }
        </header>
    )
}

/*
class Header extends React.Component {
    
    const handle = event => {
        ...
    }
    render() {
        return (
            <div onChange={this.handle}>
                Header
            </div>
        )
    }
}
*/

export default Header;