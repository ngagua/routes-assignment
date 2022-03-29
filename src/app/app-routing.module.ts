import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./components/customer-list/customer-list.module').then(
        (m) => m.CustomerListModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./components/customer-details/customer-details.module').then(
        (m) => m.CustomerDetailsModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
