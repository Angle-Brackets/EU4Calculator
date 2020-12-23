import {Layout, Row, Spin, Divider} from 'antd'
import {Component, useState} from 'react'
import Link from 'next/link'
import {Context} from '../contexts/countryContext'
import layout from '../styles/layout.module.css'
import utils from '../styles/utils.module.css'

import SiteHeader from '../components/siteHeader'
import CalculationCard from '../components/CalculationCard'


const { Header, Content, Sider } = Layout;

export default class Main extends Component {
  static contextType = Context

  render() {
    return (
      <Layout style={{backgroundColor:"white"}}>
        <SiteHeader/>
        <Content className={layout.container}>
          <header className={layout.header}>
            <Link href="countrySelector">
              <img src={this.context.flag + ".png"} className={layout.headerImage}/>
            </Link>
            <h1 className={utils.heading2Xl}>{this.context.name}</h1>
          </header>
        </Content>

        <Content>
          <Row gutter={16}>
          <Divider orientation="left" style={{fontSize: "1.15rem", lineHeight: 0}}>Economic</Divider>


            <CalculationCard name={"Maintenance"} desc={"Land and Naval Mintenance"} img={"local_reg_cost_icon"} link="maintenance"/>
            <CalculationCard name={"Development Cost"} desc={"Mana Costs for Development"} img={"dev_cost"}/>



          
          </Row>
        </Content>
      </Layout>


    );
  }
}






