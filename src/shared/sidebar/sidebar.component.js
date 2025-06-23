import sidebar from './sidebar.component.html';

export default async function SidebarComponent() {
  const menu = [
    {
      name: 'Today',
      path: '/today'
    },
    {
      name: 'Calendar',
      path: '/calendar'
    }
  ];

  return sidebar;
}
