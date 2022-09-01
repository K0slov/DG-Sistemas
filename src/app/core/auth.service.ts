import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable()
export class AuthService {
  doLogout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signOut()
      .then((res: any) => {
        resolve(res);
      }, (error: any) => {
        reject(error);
      });
    })
  }

  constructor(
   public afAuth: AngularFireAuth
 ){}

doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth
    .signInWithPopup(provider)
    .then((res: any) => {
      resolve(res);
    })
  })
}}
