import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

}
