import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeRedColor} from '../../redux/actions'

class About extends Component {
    componentDidMount () {
        const {fetchBookList} = this.props
        fetchBookList()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>关于我们</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    colorChange: state.colorChange
});

const mapDispatchToProps = {
    fetchBookList: changeRedColor
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);