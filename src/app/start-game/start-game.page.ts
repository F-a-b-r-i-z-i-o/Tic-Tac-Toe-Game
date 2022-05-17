import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.page.html',
  styleUrls: ['./start-game.page.scss'],
})
export class StartGamePage implements OnInit {
  constructor(private route: Router) {}

  async goGame() {
    this.route.navigate(['home']);
  }
  ngOnInit() {}
}
