import { Component, EventEmitter, Output } from '@angular/core';
import { Tutor } from '../tutor'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, NgForm } from '@angular/forms'
import { TutorService } from '../tutor.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-tutor-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tutor-modal.component.html',
  styleUrl: './tutor-modal.component.css'
})
export class TutorModalComponent {
  tutor: any = {
    name: '',
    nickName: '',
    birthDate: '',
    pets: [],
  };

  public tutors: Tutor[] = [];

  @Output() tutorAdded = new EventEmitter<Tutor>();

  constructor(
    public activeModal: NgbActiveModal,
    public tutorService: TutorService,
  ) {}

  public getTutors(): void {
    this.tutorService.getTutors().subscribe(
      (response: Tutor[]) => {
        this.tutors = response;
        console.log(this.tutors);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSaveTutor(): void {
    
  }
}