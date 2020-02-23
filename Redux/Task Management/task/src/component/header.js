import React, { Component, Fragment } from 'react';

class Header extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="header" >
                     <span className="logo"></span>
                     <span className="logoAfter">Clone</span>
                </div>
            </Fragment>
        );
    }
}

export default Header;