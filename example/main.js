import React from 'react';
import { render } from 'react-dom';
import  Ghost from 'react-icons/lib/fa/dashboard';

import { Sidebar, SidebarItem } from '../src';

// let items = [
//   { id: 4, type: "selector", options: [
//     { id: 1, title: "First!" },
//     { id: 2, title: "Second!" },
//     { id: 3, title: "Third!" },
//   ], selected: { id: 1, title: "First!" }},
//   { id: 1, title: "First!", leftIcon: <Ghost />},
//   { id: 2, title: "Second!"},
//   { id: 3, title: "Third!!"},
// ];

let items = [
  <SidebarItem title="Greg Chamberlain" type="header" href="/home"/>,
  <SidebarItem title="Dashboard" leftIcon={<Ghost />} />,
  <SidebarItem title="Profile"/>,
  <SidebarItem title="Settings"/>,
];

render(
  <div style={{padding: 50}}>
    <Sidebar content={items}>
    </Sidebar>
  </div>,
document.getElementById('root'));
