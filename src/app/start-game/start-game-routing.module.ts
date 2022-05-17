import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartGamePage } from './start-game.page';

const routes: Routes = [
  {
    path: '',
    component: StartGamePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartGamePageRoutingModule {}
