import { Injectable } from '@angular/core';

interface user {
  username: string;
  uid: string;
}

// service para comunicar com coleções de usuários no firebase
// Service será usado em login/login.page.ts
// UserService deve ser adicionado em providers de app.module.ts
@Injectable()
export class UserService {
  private user: user;

  constructor() {}

  setUser(user: user) {
    this.user = user;
  }

  getUID() {
    return this.user.uid;
  }

}
