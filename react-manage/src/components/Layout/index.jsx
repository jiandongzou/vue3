import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme,Typography} from 'antd';
import SideMenu from './components/side_menu';
import { Outlet } from 'react-router';
import "./components/head.less"
const { Header, Sider, Content } = Layout;
const { Text} = Typography;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //   console.log(colorBgContainer)
  return (
   
    <Layout >
       <Layout>
       <Header
    style={{
      padding: 0,
      background: colorBgContainer,
    }}
  >
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  </Header>
       </Layout >
      
      <Layout style={{height:'calc(100vh - 64px)'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{
        background: colorBgContainer,
      }}>  
        {/* <div className="demo-logo-vertical" ><Text>logo</Text></div> */}
        <SideMenu ></SideMenu>
         </Sider>
      
   
        <Content
          style={{
            margin: '16px',
            padding: 24,
            minHeight:280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;