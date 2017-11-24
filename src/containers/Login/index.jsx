/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd'
import md5 from 'md5'
import './index.scss'
import { login } from '../../actions/login'
import logoWirte from '../../components/Logo/img/logo-wirte.svg'

const FormItem = Form.Item;
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const form = this.props.form.getFieldsValue();
                this.props.actions.login(form.id, md5(form.pwd));
            }
        })
    };

    render () {
        const {getFieldDecorator} = this.props.form;
        return <div className="login-wrap">
            <div className="login-content">
                <div className="login-main">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem className="login-logo" >
                            <img src={logoWirte} />
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('id', {
                                rules: [{required: true, message: '请输入账号'}]
                            })(
                                <Input prefix={
                                    <Icon type="user"/>
                                } type="text" placeholder="请输入账号"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('pwd', {
                                rules: [{required: true, message: '请输入密码'}]
                            })(
                                <Input prefix={
                                    <Icon type="lock"/>
                                } type="password" placeholder="请输入密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({login}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));