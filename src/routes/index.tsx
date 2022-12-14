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
            path: 'about',
            name: 'About',
            element: lazyLoadRoutes('About'),
        },
    ];

    return useRoutes(routes);
}