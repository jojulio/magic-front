import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ApiService} from "../../services/api.service";
import {ICard} from "../../interfaces/ICard";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards: ICard[] = [];

  constructor(private api: ApiService) {
  }

  getAllCards() {
    this.api.getAll().subscribe({
        next: cards => this.cards = cards,
        error: err => console.error(err),
        complete: () => console.log('HTTP request completed.')
      }
    )
  }
}
