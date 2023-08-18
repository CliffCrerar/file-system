import { Component, OnInit } from '@angular/core';
import { DirectoryService } from './services/directory.service';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'file-system';
	directoryMainList: any;

	constructor(private _dirService: DirectoryService) {

	}

	ngOnInit() {
		this.directoryMainList = this._dirService.getMainList();
	}
}
