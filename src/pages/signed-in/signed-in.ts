import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { StartupPage } from '../startup/startup';

/**
 * Generated class for the SignedInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signed-in',
  templateUrl: 'signed-in.html',
})
export class SignedInPage {
  
  startups: Object[] = [];
  startupsSubscription;

  constructor(public alertCtrl: AlertController, public fireDb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.startupsSubscription =
      fireDb.list("startups").valueChanges().subscribe(this.onStartupAdded.bind(this));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignedInPage');
  }
  
  onStartupAdded(startups) {
    this.startups = startups;
  }
  
  onViewStartupClick(startup) {
    this.navCtrl.push(StartupPage, {
      "startup": startup
    });
  }
  
  onAddStartupClick() {
    this.alertCtrl.create({
      title: "Enter parameters",
      message: "Enter a name and description of your startup",
      inputs: [
        {
          name: "name",
          placeholder: "Name"
        },
        {
          name: "description",
          placeholder: "Description"
        }
      ],
      buttons: [
        {text: "Cancel"},
        {
          text: "Save",
          handler: this.addStartup.bind(this)
        }
      ]
    }).present();
  }
  
  addStartup(data) {
    console.log("Saved clicked");
    this.fireDb.list("startups").push(data);
  }
}
