import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Profile } from '../profile.model';
import { MATCHES } from '../mock-matches';


@Injectable()
export class MatchService {

  constructor() { }

  getMatches(): Observable<Profile[]>{
    return of(MATCHES);
  }

  getMatch(id: number): Observable<Profile> {
    return of(MATCHES.find(match => match.id === id));
  }

}
