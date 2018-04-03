import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  matchesCollapsed = true;


  matches: Profile[];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches);
  }

}
