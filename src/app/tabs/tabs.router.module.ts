// arquivo de rota para as 3 tabs

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '', // default
    component: TabsPage, // localhost/tabs/children (feed ou uploader ou profile)
    children: [
      // rotas para cada uma das tabs
      { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
      { path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    ]
  }

];

@NgModule({
  // indica que é rota filha
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
