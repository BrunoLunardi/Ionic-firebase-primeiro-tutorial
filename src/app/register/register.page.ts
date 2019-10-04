import { Component, OnInit } from '@angular/core';
//import para library @angular/fire
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";

  //construtor com autenticação para firebase
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  //método para inserir usuário no sistema
  async register(){
    const { username, password, cpassword } = this
    if(password !== cpassword){
      return console.error("Passwords don't match");
    }

    try{
      //cria usuário com email e senha
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password);
      console.log(res);
    }catch(error){
      console.dir(error);
    }
  }

}
