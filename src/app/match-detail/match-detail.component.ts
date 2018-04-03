import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Profile } from '../profile.model';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  @Input() match: Profile;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMatch();
  }

  getMatch(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.matchService.getMatch(id)
      .subscribe(match => this.match = match);
  }

}
