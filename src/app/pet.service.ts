import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet } from './pet'

@Injectable({
    providedIn: 'root',
})
export class PetService {
    private apiUrl = environment.apiPetUrl
    constructor(private http: HttpClient) {}

    public getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(`${this.apiUrl}`)
    }

    public getPetById(petId: number): Observable<Pet> {
        return this.http.get<Pet>(`${this.apiUrl}/${petId}`)
    }

    public addPet(pet: Pet): Observable<Pet> {
        return this.http.post<Pet>(`${this.apiUrl}`, pet)
    }

    public updatePet(petId: number): Observable<Pet> {
        return this.http.patch<Pet>(`${this.apiUrl}/${petId}`, petId)
    }

    public deletePet(petId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${petId}`)
    }
}
