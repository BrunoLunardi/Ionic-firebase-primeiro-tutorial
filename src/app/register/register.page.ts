import { Component, OnInit } from '@angular/core';
// import para library @angular/fire
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// import para usar Firestone do Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = '';
  password = '';
  cpassword = '';

  // construtor com autenticação para firebase
  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router,
    ) { }

  ngOnInit() {
  }
  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }

  // método para inserir usuário no sistema
  async register() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert('Error!', 'Password don\'t match');
      return console.error('Passwords don\'t match');
    }

    try {
      // cria usuário com email e senha
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password);
      // console.log(res);

      // define a colection que será utilizada do Cloud Firestore do Firebase
      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      });

      // setUser está em user.service.ts
      this.user.setUser({
          username,
          uid: res.user.uid
        });

      this.presentAlert('Success', 'You are registered');

      // this.showAlert('Success!', 'Welcome aboard!');
      // redireciona para a página de tabs após registrar usuário
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.dir(error);
      this.showAlert('Error!', error.message);
    }
  }

 /*
  // método para exibir alerts
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Ok']
    });

    await alert.present();

  }
*/

}
