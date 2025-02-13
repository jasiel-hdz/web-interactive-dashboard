/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'viewers',
        title: 'Observadores Identificados',
        type : 'basic',
        icon : 'heroicons_outline:eye',
        link : '/viewers'
    },
    {
        id   : 'ots',
        title: 'Observadores No Identificados',
        icon : 'heroicons_outline:eye-slash',
        type : 'basic',
        link : '/ots'
    },
    {
        id   : 'vs',
        title: 'Comparar Observadores',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/vs'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
