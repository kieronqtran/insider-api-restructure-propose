import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { snake } from 'change-case';
import { LogActivityService } from './log-activity.service';

@Injectable()
export class LogActivityMiddleware implements NestMiddleware {

  constructor(
    private readonly logActivityService: LogActivityService,
  ) {}

  resolve(...args: any[]): MiddlewareFunction {
    return (req: Request, res: Response, next: NextFunction) => {
			LogActivityService.globalNamespace.bindEmitter(req);
			LogActivityService.globalNamespace.bindEmitter(res);
			return LogActivityService.globalNamespace.run(() => {
				res.on('finish', () => {
					const changeContent = LogActivityService.globalNamespace.get('changeContents') || [];
					const log: { [key: string]: any }[] = changeContent.map(e => Object.keys(e).reduce((pre, cur) => {
						pre[snake(cur)] = e[cur];
						return pre;
					} , {}));
					this.logActivityService.insertLogActivity(log);
				});
				next();
			});
    };
  }
}
