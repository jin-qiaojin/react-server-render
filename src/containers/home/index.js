import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>首页目录</h1>
                <Link to='about'>跳转到about</Link><br/>
                <Link to='todos'>跳转到todos</Link>
            </div>
        );
    }
}

export default Home;