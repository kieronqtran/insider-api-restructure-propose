import { Injectable } from '@nestjs/common';
import { createNamespace } from 'cls-hooked';
import { Repository } from 'typeorm';
import { LogActivityChangeContent } from './interface/change-content.interface';
import { LogActivity } from './log-activity.entity';

@Injectable()
export class LogActivityService {
  static globalNamespace = createNamespace('httpRequest');

  constructor(
    private readonly logActivityRepository: Repository<LogActivity>,
  ) {}

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
    this.logActivityRepository.create(log);
	}
}

function getDefaultAction() {

}
