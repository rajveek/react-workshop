import {  DeleteOutlined, GithubOutlined,SearchOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Space, Tooltip, Typography,Avatar } from 'antd';
import React from 'react';
const style = {
    background: '#0092ff',
    padding: '8px 0',
    justifyContent: 'center',
  };

export default function AntD(){
    return(
        <div className='container'>
          <Avatar  size='large' src="https://joeschmoe.io/api/v1/random" />
         <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
    </div>
        <Space.Compact direction='vertical' align='center'>
        <Tooltip title="search">
        <Button type="primary" shape="circle" size='large' icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" size='large'>
        Start
      </Button>
    <Button type="dashed" danger ghost>
      Danger
    </Button>
    <Button icon={<DeleteOutlined/>} size='large'></Button>
    <Button icon={<GithubOutlined/>} size='large'></Button>
    </Space.Compact>
    <Divider/>
    <Typography.Title>Hello</Typography.Title>
   
    <Typography.Paragraph>Hello is used to greet someone.</Typography.Paragraph>
    <Typography.Text strong italic>adios</Typography.Text>
    <Row gutter={10} >
        <Col span={6}><div style={style}>Hello</div></Col>
        <Col span={6}><div style={style}>Adios</div></Col>
        <Col span={6}><div style={style}>Hola</div></Col>
        <Col span={6}><div style={style}>Bonjour</div></Col>
    </Row>
      </div>
    )
}