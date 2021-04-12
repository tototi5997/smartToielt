import React,{Component} from 'react'
import {Row,Col} from 'antd'
import NavLeft from './../../components/navleft/index'
import Header from './../../components/header/index'
import Footer from './../../components/footer/index'

export default class Home extends Component{
    render(){
        return(
            <div style={{backgroundColor:'rgba(145, 144, 153, 0.295)'}}>
                <Row>
                    <Col span='24'><Header/></Col>
                </Row>
                <Row>
                    <Col span='4'><NavLeft/></Col>
                    <Col span='20' >{this.props.children}</Col>
                </Row>
                <Row>
                    <Col span='24'><Footer/></Col>
                </Row>
            </div>
        );
    }
}