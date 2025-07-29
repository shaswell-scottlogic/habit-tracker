import { Routes } from '@angular/router';
import { Nope } from './components/nope/nope';
import { Home } from './components/home/home';

const homeRoute = {
    path: '',
    component: Home,
    title: 'Habit Tracker App'
}

// TODO: consider parameterising for specific habit guid?
const blobRoute = {
    path: 'blob',
    loadComponent: () => import('./components/blob-view/blob-view').then(m => m.BlobView),
    title: 'Blob'
}

const gridRoute = {
    path: 'grid',
    loadComponent: () => import('./components/grid-view/grid-view').then(m => m.GridView),
    title: 'Grid'
}

const habitRoute = {
    path: 'habit/:id',
    loadComponent: () => import('./components/habit/habit').then(m => m.HabitView),
    title: 'Habit', // todo: make a getter that gets a name
    children: [
        blobRoute,
        gridRoute
    ]
}

const nopeRoute = {
    path: '**',
    component: Nope,
    title: 'Here be dragons'
}

export const routes: Routes = [habitRoute, homeRoute, nopeRoute];
