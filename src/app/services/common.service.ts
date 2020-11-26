  
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
    providedIn: "root"
})
export class CommonService {
    constructor(private http: HttpClient) {
    }


    getPrediction(data: any, option: number): Observable<HttpResponse<any>> {
        return this.http.get<any>(`/api/predict?data=${data}&option=${option}`, { observe: "response"});
    }

}