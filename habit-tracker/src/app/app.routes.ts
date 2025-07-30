import { Routes } from '@angular/router';
import { Nope } from './components/nope/nope';
import { Home } from './components/home/home';

const homeRoute = {
    path: '',
    component: Home,
    title: 'Habit Tracker App'
}

const habitRoute = {
    path: 'habit/:id',
    loadComponent: () => import('./components/habit-view/habit-view').then(m => m.HabitView),
    title: 'Habit', // todo: make a getter that gets a name
}

const nopeRoute = {
    path: '**',
    component: Nope,
    title: 'Here be dragons'
}

export const routes: Routes = [habitRoute, homeRoute, nopeRoute];
