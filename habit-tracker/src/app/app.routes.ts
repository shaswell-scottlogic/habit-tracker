import { Routes } from '@angular/router';
import { BlobView } from './components/blob-view/blob-view';
import { GridView } from './components/grid-view/grid-view';
import { Nope } from './components/nope/nope';
import { Home } from './components/home/home';

const homeRoute = {
    path: '',
    component: Home
}

// TODO: consider parameterising for specific habit guid?
const blobRoute = {
    path: 'blob',
    component: BlobView
}

const gridRoute = {
    path: 'grid',
    component: GridView
}

const nopeRoute = {
    path: '**',
    component: Nope
}

export const routes: Routes = [blobRoute, gridRoute, homeRoute, nopeRoute];
