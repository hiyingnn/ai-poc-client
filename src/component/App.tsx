import { AppShell } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import { Navbar } from './Navbar';

export function App() {
    return (
        <AppShell
            navbar={{
                width: 300,
                breakpoint: 'sm',
            }}
        >
            <AppShell.Navbar><Navbar /></AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}