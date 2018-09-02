import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { snake } from 'change-case';
// import { createNamespace } from 'continuation-local-storage';

// tslint:disable-next-line:no-var-requires
const createNamespace = require('cls-hooked').createNamespace;

export const globalNamespace = createNamespace('httpRequest');

export default function logActivityMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    globalNamespace.bindEmitter(req);
    globalNamespace.bindEmitter(res);
    return globalNamespace.run(() => {
      res.on('finish', () => {
				const changeContent = globalNamespace.get('changeContents') || [];
				const log = changeContent.map(e => Object.keys(e).reduce((pre, cur) => {
					pre[snake(cur)] = e[cur];
					return pre;
				} , {}));
				console.log('changeContents: ', log);
      });
      next();
    });
  };
}
