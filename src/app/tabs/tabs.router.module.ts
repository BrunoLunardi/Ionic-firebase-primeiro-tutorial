// arquivo de rota para as 3 tabs

import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // rotas para cada uma das tabs
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];
