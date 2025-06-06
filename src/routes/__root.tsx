import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { App } from '../component/App'

export const Route = createRootRoute({
    component: () => (
        <>
            <App />
            <TanStackRouterDevtools />
        </>
    ),
})