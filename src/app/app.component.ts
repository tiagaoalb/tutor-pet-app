import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TutorService } from './tutor.service'
import { Tutor } from './tutor'
import { HttpErrorResponse } from '@angular/common/http'
import { PetService } from './pet.service'
import { Pet } from './pet'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tutor-pet-app';

  public tutors: Tutor[] = [];
  public pets: Pet[] = [];

  constructor(
    private tutorService: TutorService,
    private petService: PetService
  ) { }
  
  ngOnInit(): void {
    this.getTutors();
  }

  public getTutors(): void {
    this.tutorService.getTutors().subscribe(
      (response: Tutor[]) => {
        this.tutors = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPets(): void {
    this.petService.getPets().subscribe(
      (response: Pet[]) => {
        this.pets = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
