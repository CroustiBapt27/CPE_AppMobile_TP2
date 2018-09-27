import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
    temperature: number;
    meteo: string;
    code_postal: number;
    url: any;
    name: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController, public http: Http) {
    }

    afficher() {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Something went wrong :/',
            buttons: ['OK']
        });

        this.url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.code_postal;
        this.url += ',fr&appid=68a40fffe840bac1f3463b4c9a130473&units=metric&lang=fr';

        this.http.get(this.url).map(result => result.json()).subscribe(
            data => {
                this.temperature = data.main.temp;
                this.meteo = data.weather[0].main;
                this.name = data.name;
            },
            (err) => {
                alert.present();
                //TODO: something else ?
            }
        );
    }
}
