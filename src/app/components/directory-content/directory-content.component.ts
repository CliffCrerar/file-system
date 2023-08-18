import { Component, OnInit, Input } from '@angular/core';
import { DirectoryService } from 'src/app/services/directory.service';


@Component({
	selector: 'app-directory-content',
	templateUrl: './directory-content.component.html',
	styleUrls: ['./directory-content.component.scss']
})
export class DirectoryContentComponent implements OnInit {
	content: any;

	constructor(private _directoryService: DirectoryService) {
		this._directoryService.getMainList().subscribe(payload => {
			console.log(payload);
		})
	}

	ngOnInit() {
		this.content = this._directoryService.getMainList();
	}
}
