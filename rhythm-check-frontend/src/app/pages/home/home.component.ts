import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GenericAnchorComponent } from "../../shared/components/generic-anchor/generic-anchor.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GenericAnchorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userID = ''

  ngOnInit() {
    this.userID = '';
  }
}
