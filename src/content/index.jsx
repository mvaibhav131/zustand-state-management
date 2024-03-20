import { Button, Card, Col, Row, Typography } from 'antd';
import React from 'react'
import BarCharts from '../chart/bar';
import AreaCharts from '../chart/area';
import ComposedCharts from '../chart/composedchart';
import CustomCharts from '../chart/custom';
import LineCharts from '../chart/line';
import MultiLineCharts from '../chart/multibar';
import PieCharts from '../chart/pie';
import RadialCharts from '../chart/radial';
import ThreeDimScatterCharts from '../chart/pieangle';
import ScatterCharts from '../chart/scatter';
import TreeCharts from '../chart/treemap';
import "./index.css";
import { AppStore } from '../store';


const MainContent = () => {
  const {theme,updateTheme}=AppStore();

  const toggleTheme =()=>{
    if(theme==='dark'){
      updateTheme("light")
    }else{
      updateTheme("dark")
    }
  }
  return (
    <div className={theme==='dark' ? "app_dark" : "app_light"}>
      <Button type='dashed'block className={` my-4 ${theme === 'dark' ? 'btn_dark' : 'btn_light'}`} onClick={toggleTheme}>Change Theme using Zustand</Button>
      <Row gutter={[24, 24]}>
        <Col span={8} >
          <Card className={`mb-3 p-8 ${theme === 'dark' ? 'card_dark' : 'card_light'}`}  title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Pie Chart</Typography.Title>}><PieCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Radial Chart</Typography.Title>} ><RadialCharts/></Card>
        </Col>
        <Col span={8}>
        <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Bar Chart</Typography.Title>}><BarCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={16}>
        <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Compose Chart</Typography.Title>}><ComposedCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Custom Chart</Typography.Title>}><CustomCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
      <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Area Chart</Typography.Title>}><AreaCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Line Chart</Typography.Title>}><LineCharts/></Card>
        </Col>
        <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>MultiLine Chart</Typography.Title>}><MultiLineCharts/></Card>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Scatter Chart</Typography.Title>}><ScatterCharts/></Card>
        </Col>
        <Col span={16}>
          <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Tree Chart</Typography.Title>}><TreeCharts/></Card>
        </Col>
      </Row>
        <Row gutter={[16, 16]}>
        <Col span={16}>
        <Card className={`mb-3 ${theme === 'dark' ? 'card_dark' : 'card_light'}`} title={<Typography.Title level={4}  className={theme==="dark"?"text-light":"text-dark"}>Pie Angle Chart</Typography.Title>}><ThreeDimScatterCharts/></Card>
        </Col>
        </Row> 
    </div>
  )
}

export default MainContent;
