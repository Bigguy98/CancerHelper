  
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { createRequestOption } from '../layouts/utils/request-util';

@Injectable({
    providedIn: "root"
})
export class CommonService {

    javaServerUrl = 'java-api/api';

    constructor(private http: HttpClient) {
    }


    getPrediction(data: any): Observable<HttpResponse<any>> {
        return this.http.get<any>(`py/api/predict?data=${data}`, { observe: "response"});
    }

    getStatistic(type: string): Observable<HttpResponse<any>> {
        return this.http.get<any>(`py/api/stat?type=${type}`, { observe: "response"});
    }
    
    authenticate(account: any): Observable<HttpResponse<any>> {
        return this.http.post<any>(this.javaServerUrl + `/authenticate`, account, { observe: "response"});
    }

    getQuestions(req: any) {
        const options = createRequestOption(req);
        return this.http.get<any>(this.javaServerUrl + `/question/search`, { params: options, observe: 'response' });
    }

}