import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferType } from '../models/offer-type';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OfferTypeService {
    private apiUrl = environment.api_url; // Use the environment variable

    constructor(private httpClient: HttpClient) { }

    getOfferTypes(): Observable<OfferType[]> {
        return this.httpClient.get<OfferType[]>(`${this.apiUrl}/OfferType`);
    }

    getOfferTypesById(id: number): Observable<OfferType> {
        return this.httpClient.get<OfferType>(`${this.apiUrl}/OfferType/${id}`);
    }

    postOfferType(category: OfferType): Observable<OfferType> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.post<OfferType>(`${this.apiUrl}/OfferType`, category, { headers: headers });
    }

    putOfferType(id: number, category: OfferType): Observable<OfferType> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.put<OfferType>(`${this.apiUrl}/OfferType/${id}`, category, { headers: headers });
    }

    deleteOfferType(id: number): Observable<OfferType> {
        return this.httpClient.delete<OfferType>(`${this.apiUrl}/OfferType/${id}`);
    }
}