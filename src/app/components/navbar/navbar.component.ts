import { Component, OnInit } from '@angular/core';
import { NavbarElement } from "../../models/navbar-element";
import { HomeComponent } from "../../pages/home/home.component";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { TmdbService } from "../../services/tmdb.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarElements: NavbarElement[];
  public homeComponent!: HomeComponent;

  public searchTerm: string = '';

  constructor(public movieService: TmdbService, public authenticationService: AuthenticationService, public router: Router) {
    this.navbarElements = [
      {name: "Home", route: "/"},
      {name: "Top Rated", route: "/top-rated"},
      {name: "Popular", route: "/popular"},
      {name: "Search", route: "/search"},
    ];
  }

  ngOnInit(): void {
  }

}
