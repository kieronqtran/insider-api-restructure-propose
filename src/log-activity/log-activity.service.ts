import { Injectable } from '@nestjs/common';
import { LogActivityChangeContent } from './change-content.interface';

// tslint:disable-next-line:no-var-requires
const createNamespace = require('cls-hooked').createNamespace;

@Injectable()
export class LogActivityService {
	static globalNamespace = createNamespace('httpRequest');

	static addChangeContent(changeContent: LogActivityChangeContent) {
		const changeContentsVar: LogActivityChangeContent[] = LogActivityService.globalNamespace.get('changeContents') || [];
		changeContentsVar.push(changeContent);
		LogActivityService.globalNamespace.set('changeContents', changeContentsVar);
	}

	static setAction(action: string) {
		LogActivityService.globalNamespace.set('action', action);
	}

	insertLogActivity(log: {

	}) {

	}
}

function getDefaultAction() {

}
