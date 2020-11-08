import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomepageComponent,
  GameComponent,
  SelectionScreenComponent,
} from './views';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'selections',
    component: SelectionScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomepageComponent,
  SelectionScreenComponent,
  GameComponent,
];
