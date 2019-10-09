import { Component, OnInit } from '@angular/core';
// import para library @angular/fire
import { AngularFireAuth } from '@angular/fire/auth';
// autenticação com firebase
import { auth } from 'firebase/app';
// service para user
import { UserService } from '../user.service';
// import para utilizar redirect para rota após usuário logar
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  // construtor com autenticação para firebase e service
  constructor(public afAuth: AngularFireAuth, public user: UserService,
              public router: Router) { }

  ngOnInit() {
  }

  // método assíncrono para login
  async login() {
    const { username, password } = this;
    try {
      // await -> espera por um Promise
      /*Promise ->Promise é um objeto usado para processamento assíncrono.
      Um Promise (de "promessa") representa um valor que pode estar disponível
      agora, no futuro ou nunca.*/
      // login utilizando email e senha do usuário
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);

      if (res.user) {
        // setUser está em user.service.ts
        this.user.setUser({
          username,
          uid: res.user.uid
        });

        // redireciona para a seguinte rota:
        this.router.navigate(['/tabs']);
      }

    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

}
