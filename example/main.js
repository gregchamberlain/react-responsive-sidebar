import React from 'react';
import { render } from 'react-dom';
import  Dashboard from 'react-icons/lib/fa/dashboard';
import  User from 'react-icons/lib/fa/user';
import  Gear from 'react-icons/lib/fa/cog';
import { Sidebar, SidebarItem } from '../src';
import { Router, Route, browserHistory } from 'react-router'

let items = [
  <SidebarItem title="Dashboard" leftIcon={<Dashboard />} href="/dashboard"/>,
  <SidebarItem title="Profile" leftIcon={<User />} href="/profile"/>,
  <SidebarItem title="Settings" leftIcon={<Gear />} href="/settings"/>,
];

const App = (props) => <Sidebar content={items}>{props.children}</Sidebar>;
const DashPage = (props) => <div><h1>Dashboard</h1></div>;
const ProfilePage = (props) => <div><h1>Profile</h1></div>;
const SettingsPage = (props) => <div><h1>Settings</h1></div>;

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={DashPage} />
      <Route path="profile" component={ProfilePage} />
      <Route path="settings" component={SettingsPage} />
    </Route>
  </Router>,
document.getElementById('root'));
