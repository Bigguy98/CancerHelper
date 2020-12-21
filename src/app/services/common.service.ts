  
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
    providedIn: "root"
})
export class CommonService {

    constructor(private http: HttpClient) {
    }


    getPrediction(data: any): Observable<HttpResponse<any>> {
        return this.http.get<any>(`py/api/predict?data=${data}`, { observe: "response"});
    }

    getStatistic(type: string): Observable<HttpResponse<any>> {
        return this.http.get<any>(`py/api/stat?type=${type}`, { observe: "response"});
    }

}