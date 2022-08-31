import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable()
export class UserService {

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ){
 }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  updateCurrentUser(value: { name: any; }){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user?.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then((res: any) => {
        resolve(res);
      }, (err: any) => reject(err))
    })
  }
}
