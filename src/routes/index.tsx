import { useRoutes } from 'react-router-dom';
import { lazyLoadRoutes } from './LazyLoadRoutes';

export function RouterElement() {
    const routes = [
        {
            path: '/',
            name: 'Home',
            element: lazyLoadRoutes('Home'),
        },
        {
            path: 'origins-of-you',
            name: 'OriginsOfYou',
            element: lazyLoadRoutes('Book'),
        },
    ];

    return useRoutes(routes);
}