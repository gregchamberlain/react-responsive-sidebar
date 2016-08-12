# react-responsive-sidebar
A simple and elegant responsive sidebar component for react

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

|Property  |Type  |default|description|
| -------- | ---- | ----- | --------- |
|background|string|#009688|background color of the sidebar|
|color|string|#fff|text color for sidebar items|
|width|number|300|width of sidebar|
|breakPoint|number|980|breakpoint where the sidebar collapses (px)|
|toggleIconSize|number|28|size of the toggle icon (px)|
|content|array|n/a|content to fill the sidebar with (SidebarItem, SidebarSelector)|

## SidebarItem
