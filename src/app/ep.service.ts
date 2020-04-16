import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpService {

  private getAllEPUrl = "https://sheet.best/api/sheets/91a01df6-0425-4bb1-949b-3bf07fc376b7";

  constructor(private http:HttpClient) { }

  getAllEP(){
    return this.http.get<any>(this.getAllEPUrl); 
  }

}
