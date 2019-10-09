import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // redireciona para esta rota quando inicia aplicativo
  // localhost/tabs
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  // outras rotas
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
