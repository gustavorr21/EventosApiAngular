import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserUpdate } from '../models/identity/UserUpdate';
import { User } from '../models/identity/User';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccountService {
  private currentUserSource = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource.asObservable();

  private authData: User | any;

  baseUrl = environment.apiURL + 'api/account/'
  constructor(private http: HttpClient) { }

  public login(model: any): Observable<void> {
    return this.http.post<User>(this.baseUrl + 'login', model).pipe(
      take(1),
      map((user: User) => {
        if (user) {
          this.setCurrentUser(user)
        }
      })
    );
  }

  getUser(): Observable<UserUpdate> {
    return this.http.get<UserUpdate>(this.baseUrl + 'getUser').pipe(take(1));
  }

  updateUser(model: UserUpdate): Observable<void> {
    return this.http.put<UserUpdate>(this.baseUrl + 'atualizar-usuario', model).pipe(
      take(1),
      map((user: UserUpdate) => {
          this.setCurrentUser(user);
        }
      )
    )
  }

  public register(model: any): Observable<void> {
    return this.http.post<User>(this.baseUrl + 'incluir-usuario', model).pipe(
      take(1),
      map((user: User) => {
        if (user) {
          this.setCurrentUser(user)
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    // this.currentUserSource.next(null as any);
    // this.currentUserSource.complete();
  }

  public setCurrentUser(user: User): void {
    this.authData = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  get userName(): string {
    let { userName } = this.getAuthData();

    if (!userName) {
      if (!userName) {
        return null as any;
      }
    }

    return userName;
  }

  getAuthData(): User {
    const defaultAuthData: User = {
      primeiroNome: null as any,
      token: null as any,
      userName: null as any,
      email: null as any,
      password: null as any,
      ultimoNome: null as any
    };

    return this.authData || defaultAuthData;
  }
  // postUpload(file: File): Observable<UserUpdate> {
  //   // const fileToUpload = file[0] as File;
  //   // const formData = new FormData();
  //   // formData.append('file', fileToUpload);

  //   // return this.http
  //   //   .post<UserUpdate>(`${this.baseUrl}upload-image`, formData)
  //   //   .pipe(take(1));
  // }
}
