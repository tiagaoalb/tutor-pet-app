import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Tutor } from './tutor'
import { environment } from '../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class TutorService {
    private apiUrl = environment.apiTutorUrl;
    constructor(private http: HttpClient) {}

    public getTutors(): Observable<Tutor[]> {
        return this.http.get<Tutor[]>(`${this.apiUrl}`);
    }

    public addTutor(tutor: Tutor): Observable<Tutor> {
        return this.http.post<Tutor>(`${this.apiUrl}`, tutor);
    }

    public getTutorById(id: number): Observable<Tutor> {
        return this.http.get<Tutor>(`${this.apiUrl}${id}`);
    }

    public getTutorByName(name: string): Observable<Tutor> {
        return this.http.get<Tutor>(`${this.apiUrl}/name/${name}`);
    }
}
