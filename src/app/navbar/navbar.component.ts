import { Component, OnInit } from '@angular/core';
import { MATCHES } from '../../mock-matches';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  matchesCollapsed = true;

  matches: Profile[] = MATCHES;

  constructor() { }

  ngOnInit() {
    console.log(this.matches.name)
  }

}
