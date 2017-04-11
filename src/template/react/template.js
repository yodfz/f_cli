import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './style/self.less';
@connect(
    state => ({
    }),
    dispatch => bindActionCreators({}, dispatch)
)
export default class Self extends Component {
    render () {
    }
}
