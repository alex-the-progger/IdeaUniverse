import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StartupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startup',
  templateUrl: 'startup.html',
})
export class StartupPage {
  
  startup: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startup = navParams.get("startup");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartupPage');
  }

}
