import {
  IconAi,
  IconInfoSquareRounded,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from './Navbar.module.css';
import { Link } from '@tanstack/react-router'; // TanStack Router's Outlet and Link
import { useState } from 'react';


const data = [
  { link: '/about', label: 'About', icon: IconInfoSquareRounded },
  { link: '/ai-poc', label: 'AI Trial', icon: IconAi }
];

export function Navbar() {
  const [active, setActive] = useState('About');

  const links = data.map((item) => (
    <Link to={item.link}
      className={classes.link}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Placeholder</span>
        </a>
      </div>
    </nav>
  );
}