import { useState,useEffect } from 'react'
import { HashRouter,useLocation,useRoutes } from 'react-router-dom'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin, ConfigProvider, theme } from 'antd'
import asyncMenuAction from "@/redux/modules/menu/action"
import {useLazy,Router} from '@/router/index'
import './App.css'
import '@/assets/aliFont/iconfont.css'
import store  from '@/redux/index.js'
import { connect } from 'react-redux';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

function App(props) {
  const {user,asyncMenuAction}=props;
  const [loading, setLoading] = useState(false);
  //const {pathname}= useLocation();
  useEffect(()=>{
    console.log(location.hash,user.name);
    if(location.hash!="login" && user.name){
      getMenu()
    }
   
  },[user.name])

  
  const getMenu=async()=>{
    setLoading(true)
    await asyncMenuAction();
    const menuList=store.getState().menu.menuList;
    useLazy(menuList);
    //setRoutes([])
    setLoading(false)
  }
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm //theme.darkAlgorithm
      }}
    >
      <Spin spinning={loading} className="root-loading" indicator={antIcon} tip="Loading">

        <Router />
      </Spin>
    </ConfigProvider>
  )
}

export default connect((state)=>({
  user:state.user,
  menu:state.menu
}),{
  asyncMenuAction
})(App)
