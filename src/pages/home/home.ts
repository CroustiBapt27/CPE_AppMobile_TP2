import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MeteoPage } from '../meteo/meteo';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
    login: string;
    password: string;

    readonly APP_LOGIN: string = 'vincent';
    readonly APP_PASSWORD: string = 'cpe';

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    }

    connexion() {
        let alert = this.alertCtrl.create({
            title: 'Connexion refusée',
            subTitle: 'Le mot et de passe et/ou le login ne sont pas valides',
            buttons: ['OK']
        });
        if (this.login == this.APP_LOGIN && this.password == this.APP_PASSWORD) {
            this.navCtrl.push(MeteoPage); // Redirection vers la page liée. On indique
            //ici le nom de la classe de type component qui est lié à la page
        } else {
            alert.present();
        }
        this.login = '';
        this.password = '';
        }
    }