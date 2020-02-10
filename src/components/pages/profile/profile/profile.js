import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import { navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "utils/auth";
import styles from "./profile.module.scss";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Profile = ({ location }) => {
  const [collapsed, setCollapsed] = useState(false);

  const content = { message: "", login: true };
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`;
  } else {
    content.message = "You are not logged in";
  }

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          {content.message}
          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault();
                logout(() => navigate(`/app/login`));
              }}
            >
              Logout
            </a>
          ) : null}
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {getUser().name} is a cat.
            <ul>
              <li>Name: {getUser().name}</li>
              <li>E-mail: {getUser().email}</li>
            </ul>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Profile;
