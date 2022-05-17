import { Component, Input, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // guard equality
  checkEquality = false;
  //inizializate map
  array = ['', '', '', '', '', '', '', '', ''];
  //check of position
  check = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  //inizializate winner
  winner = '';
  //inizializate player
  opc = '';
  //inializate turn
  turn = '';

  //define alert and menu
  constructor(public alertC: AlertController, private menu: MenuController) {}

  //function to controll possibile position state of map
  async result(array) {
    //scroll through the possible positions on the map
    for (let i = 0; i < this.check.length; i++) {
      //controll the position for check the positions for the result of game
      if (
        this.array[this.check[i][0]] == this.array[this.check[i][1]] &&
        this.array[this.check[i][0]] == this.array[this.check[i][2]]
      ) {
        this.winner = this.array[this.check[i][0]];
        //declare the winner
        if (this.winner != '') {
          console.log('Vincitore', this.winner);

          const alert = await this.alertC.create({
            cssClass: 'my-custom-class',
            header: 'Congratulazioni',
            message: 'Vincitore: ' + this.turn,
            buttons: ['OK'],
          });
          //restart parameter after vinner
          await alert.present();
          this.array = ['', '', '', '', '', '', '', '', ''];
          this.turn = '';
          this.opc = '';
        }
      }
    }
  }

  //function to change turn of the player
  changeTurn(opc) {
    if (opc == 'x') {
      this.turn = 'Giocatore 1  X';
    } else if (this.opc == '0') {
      this.turn = 'Giocatore 2  0';
    } else {
      this.turn = '';
    }
  }

  //function to start with player 1 X
  start() {
    this.opc = 'x';
    this.changeTurn(this.opc);

    this.array = ['', '', '', '', '', '', '', '', ''];
    this.turn = 'Giocatore 1 X';
  }

  //function to write in the button after click
  async click(i) {
    if (this.array[i] == '') {
      this.array[i] = this.opc;
    }
    this.result(this.array);
    this.checkEquality = false;
    this.array.map((position) => {
      if (position == '') {
        this.checkEquality = true;
      }
    });
    console.log(this.checkEquality);
    //change turn after click
    if (this.opc == 'x') {
      this.opc = '0';
      this.changeTurn(this.opc);
    } else if (this.opc == '0') {
      this.opc = 'x';
      this.changeTurn(this.opc);
    }
    //check if no one has won with print alert
    if (this.checkEquality == false && this.winner == '') {
      const alert = await this.alertC.create({
        cssClass: 'my-custom-class',
        header: 'Pareggio',
        buttons: ['OK'],
      });

      await alert.present();
      this.start();
    }
    console.log(this.array);
  }

  ngOnInit() {
    this.menu.close();
  }
}
