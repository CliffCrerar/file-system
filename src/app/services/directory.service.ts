import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DirectoryService {

	private _apiUrl: string = 'http://localhost:3000/api/';

	constructor(private _http: HttpClient) {

	}

	getMainList() {
		return this._http.get(this._apiUrl);
	}



}
