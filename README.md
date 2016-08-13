# react-responsive-sidebar
A simple and elegant responsive sidebar component for react

[Sidebar](#sidebar)
[SidebarItem](#sidebaritem)
[SidebarSelector](#sidebarSelector)
[LinkContainer](#linkcontainer)

## Getting Started
This component works best as the outer most visual component in your app. You may wrap it in data container components, but it is not suggested to nest it within other visual elements for the time being.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import YourAppContent from 'path/to/your/app/content'

const items = [
  <SidebarItem title="Dashboard"/>
  <SidebarItem title="Profile"/>
  <SidebarItem title="Settings"/>
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

## SidebarItem

|Property  |Type  |Default|Description|
| -------- |:----:|:-----:| --------- |
|title|string|n/a|the text contained within the item|
|background|string|sidebar.background|background color, inherited from sidebar if not set manually|
|href|string|n/a|where to go on click, react-router compatible but not required|
|leftIcon|element|n/a|Icon used for the left side of the item. (react-icons is a great package for this)|
|rightIcon|element|n/a|Icon used for the right side of the item. (react-icons is a great package for this)|
|textAlign|string|left|alignment of the title within the item|
|onClick|func|n/a|a function to call when the item is clicked|

## SidebarSelector

|Property  |Type  |Default|Description|
| -------- | ---- | ----- | --------- |

## LinkContainer

|Property  |Type  |Default|Description|
| -------- | ---- | ----- | --------- |
