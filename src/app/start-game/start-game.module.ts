import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartGamePageRoutingModule } from './start-game-routing.module';

import { StartGamePage } from './start-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartGamePageRoutingModule
  ],
  declarations: [StartGamePage]
})
export class StartGamePageModule {}
