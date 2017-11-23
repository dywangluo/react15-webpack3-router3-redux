/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form } from 'antd'

class Test extends Component {
    render () {
        return <div>
            {this.props.id}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.test.id,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Test));