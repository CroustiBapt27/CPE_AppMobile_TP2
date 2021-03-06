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
    nom_ville: string;
    afficher_resultat: boolean;
    icone_meteo: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController, public http: Http) {

        this.afficher_resultat = false;
    }

    afficher() {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Code postal non reconnu :/',
            buttons: ['OK']
        });
        this.afficher_resultat = true;
        this.url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.code_postal;
        this.url += ',fr&appid=68a40fffe840bac1f3463b4c9a130473&units=metric&lang=fr';

        this.http.get(this.url).map(result => result.json()).subscribe(
            data => {
                this.temperature = data.main.temp;
                this.meteo = data.weather[0].main;
                this.nom_ville = data.name;
                var icone = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                this.icone_meteo = icone;
                console.log(data)
            },
            (err) => {
                alert.present();
                //TODO: something else ?
            }
        );
    }
}
