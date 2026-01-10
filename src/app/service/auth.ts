import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  signup(email: string, password: string): Observable<User> {
    const promise = createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => userCredential.user);
    return from(promise);
  }

  login(email: string, password: string): Observable<User> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => userCredential.user);
    return from(promise);
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  // Observe the authentication state in real-time
  get currentUser(): Observable<User | null> {
    return new Observable(observer => {
      this.auth.onAuthStateChanged(user => {
        observer.next(user);
      });
    });
  }
}
