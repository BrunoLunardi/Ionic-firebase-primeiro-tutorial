import { Component, OnInit } from '@angular/core';
//import para library @angular/fire
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  //construtor com autenticação para firebase
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  //método assíncrono para login
  async login(){
    const { username, password } = this
    try{
      //await -> espera por um Promise
      /*Promise ->Promise é um objeto usado para processamento assíncrono. 
      Um Promise (de "promessa") representa um valor que pode estar disponível 
      agora, no futuro ou nunca.*/
      //login utilizando email e senha do usuário
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
    }catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log("User not found"); 
      }
    }
  }

}
