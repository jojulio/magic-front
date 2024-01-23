import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../../enviroments/enviroment";
import {ICard} from "../interfaces/ICard";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ICard[]>(`${API_PATH}export/matches`);
  }
}
