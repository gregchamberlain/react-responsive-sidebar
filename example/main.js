import React from 'react';
import { render } from 'react-dom';
import  Dashboard from 'react-icons/lib/fa/dashboard';
import { Sidebar, SidebarItem } from '../src';

let items = [
  <SidebarItem title="Greg Chamberlain" type="header" href="/home"/>,
  <SidebarItem title="Dashboard" leftIcon={<Dashboard />} />,
  <SidebarItem title="Profile"/>,
  <SidebarItem title="Settings"/>,
];

render(
  <Sidebar content={items} background="magenta">
    <input type="text" style={{width: "100%"}}/>
  </Sidebar>,
document.getElementById('root'));
