import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TutorService } from './tutor.service'
import { Tutor } from './tutor'
import { HttpErrorResponse } from '@angular/common/http'
import { PetService } from './pet.service'
import { Pet } from './pet'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { TutorModalComponent } from './tutor-modal/tutor-modal.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tutor-pet-app';

  public tutors: Tutor[] = [];
  public pets: Pet[] = [];

  constructor(
    private tutorService: TutorService,
    private petService: PetService,
    private modalService: NgbModal
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

  openTutorModal() {
    const modalRef = this.modalService.open(TutorModalComponent);

    modalRef.result.then(
      (result) => {
        // Handle the result (tutor data) here
        this.tutors.push(result);
      },
      (reason) => {
        // Handle the modal closing without saving if needed
      }
    );
  }
}
