import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import MainContent from '../../content';
import "./index.css";
// import { useTheme } from '../../contextStore/themeContext';
import { AppStore } from '../../store';
const { Header, Content, Footer } = Layout;

const items = new Array(1).fill(null).map((_, index) => ({
  key:"avatar",
  label:"Graphical View Dashboard",
}));
const Navbar = () => {
  const {theme}= AppStore
 console.log(theme)
  return (
    <Layout>
      <Header className='navbar_header'
      >
        <div className="demo-logo" ><Avatar/></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={'1'}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
       <Breadcrumb style={{background:"gray",padding:"6px",borderRadius:"11px"}}
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Dashboard</span>
          </>
        ),
      },
      {
        title: `${theme ==="dark"? "Dark Theme":"Light Theme"}`,
      },
    ]}
  />
      </Header>
      <Content className='content'
      >
       
        <div className='main_content'
        >
          <MainContent/>
        </div>
      </Content>
      <Footer className='footers'
      >
        vaibhavmore.in ©{new Date().getFullYear()} Created by Vaibhav More
      </Footer>
    </Layout>
  );
};
export default Navbar;