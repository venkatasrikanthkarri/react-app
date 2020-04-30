import React from 'react';
import './Header.css';

import { FaRegMoon } from 'react-icons/fa';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
            <h2 className="heading">Where in the world?</h2>
            <button className="changeThemeBtn" style={{background:'inherit',color:'inherit'}} onClick={this.props.onChangeTheme}><FaRegMoon/> {this.props.title}</button>
            </div>

        );
    }
}
export { Header };