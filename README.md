# react-responsive-sidebar [![npm version](https://badge.fury.io/js/react-responsive-sidebar.svg)](https://badge.fury.io/js/react-responsive-sidebar)

A simple and elegant responsive sidebar component for react

[Sidebar](#sidebar)
[SidebarItem](#sidebaritem)

## Getting Started
This component works best as the outer most visual component in your app. You may wrap it in data container components, but it is not suggested to nest it within other visual elements for the time being.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import YourAppContent from 'path/to/your/app/content'

const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];

render (
  <Sidebar content={items}>
    <YourAppContent />
  </Sidebar>
, document.findElementById("render-target"))
```

## Sidebar

|Property  |Type  |Default|Description|
| -------- | ---- | ----- | --------- |
|background|string|#009688|background color of the sidebar|
|color|string|#fff|text color for sidebar items|
|backdrop|bool|true|show a backdrop when sidebar is opened from collapsed state|
|closeOnBackdropClick|bool|true|closes the sidebar when the backdrop is clicked|
|width|number|300|width of sidebar|
|breakPoint|number|980|breakpoint where the sidebar collapses (px)|
|toggleIconSize|number|28|size of the toggle icon (px)|
|toggleIconColor|string|background|color of the icon that toggles the sidebar|
|content|array|n/a|content to fill the sidebar with (SidebarItem, SidebarSelector)|
|onCollapse|func|n/a|A function to call when the sidebar collapses/expands. Provides a boolean, true if collapsed, false if expanded.|
|onOpen|func|n/a|A function to call when the sidebar is toggle. Provides a boolean, true of opened, false if closed.|
|onItemSelected|func|n/a|A function to call when an item is selected. will provide selected items props.|
|closeOnItemSelect|bool|true|Sets if the sidebar close when an item is selected|
|hoverHighlight|string|rgba(255,255,255,0.15)|Sets hoverHighlight prop on each item, unless directly specified on the item|
|activeHightlight|string|rgba(255,255,255,0.2)|Sets activeHightlight prop on each item, unless directly specified on the item|

## SidebarItem

|Property  |Type  |Default|Description|
| -------- |:----:|:-----:| --------- |
|background|string|sidebar.background|background color, inherited from sidebar if not set manually|
|color|string|white|text and icon color|
|href|string|n/a|where to go on click, react-router compatible but not required|
|leftIcon|element|n/a|Icon used for the left side of the item. (react-icons is a great package for this)|
|rightIcon|element|n/a|Icon used for the right side of the item. (react-icons is a great package for this)|
|textAlign|string|left|alignment of the title within the item|
|hoverHighlight|string|rgba(255,255,255,0.15)|Background color of the item when hovered over|
|activeHightlight|string|rgba(255,255,255,0.2)|Background color of the item when in the active state (At its href)|
|onClick|func|n/a|a function to call when the item is clicked|

<!-- ## SidebarSelector

|Property  |Type  |Default|Description|
| -------- | ---- | ----- | --------- | -->
