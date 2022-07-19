import { HomePage } from '../pages/Home';
import { FollowingPage } from '../pages/FollowingPage';
import { Upload } from '../pages/Upload';
import { HeaderOnly } from '../components/Layout/HeaderOnly';
import { ProfilePage } from '../pages/Profile';
import { Search } from '../pages/Search';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: ProfilePage },
    { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
