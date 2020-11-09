import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomepageComponent,
  GameComponent,
} from './views';

const routes: Routes = [
  {
    path: 'game/:BoardSize/:NumberOfStones',
    component: GameComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomepageComponent,
  GameComponent,
];
