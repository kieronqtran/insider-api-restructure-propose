import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent, ObjectLiteral } from 'typeorm';
import { getNamespace } from 'continuation-local-storage';
import { snake } from 'change-case';
import { globalNamespace } from '../log-activity/log-activity.middleware';
import { AppBaseEntity } from './app-base-entity';

interface LogActivityChangeContent {
	tableName: string;
	queryType: 'insert' | 'update' | 'delete';
	rowId: number | number[];
	attributes: ObjectLiteral;
}

type LogActivityChangeContents = LogActivityChangeContent[];

export abstract class AbstractSubscriber<Entity extends AppBaseEntity> implements EntitySubscriberInterface<Entity> {

    // tslint:disable-next-line:ban-types
    abstract listenTo(): Function;

		async afterLoad(entity: Entity): Promise<void> {
			// Empty on purpose
		}

    async beforeInsert(event: InsertEvent<Entity>): Promise<void> {

		}

    async afterInsert(event: InsertEvent<Entity>): Promise<void> {
			const httpNamespace = globalNamespace;
			const changeContentsVar: LogActivityChangeContents = httpNamespace.get('changeContents') || [];
			const changeContent: LogActivityChangeContent = {
				tableName: snake(this.listenTo().name),
				queryType: 'insert',
				rowId: event.entity.id,
				attributes: Object.keys(event.entity).reduce((pre, cur) => {
					pre[snake(cur)] = event.entity[cur];
					return pre;
				} , {}),
			};
			changeContentsVar.push(changeContent);
			httpNamespace.set('changeContents', changeContentsVar);
		}

    async beforeUpdate?(event: UpdateEvent<Entity>): Promise<void> {

		}

    async afterUpdate?(event: UpdateEvent<Entity>): Promise<void> {

		}

		async beforeRemove?(event: RemoveEvent<Entity>): Promise<void> {

		}

		async afterRemove?(event: RemoveEvent<Entity>): Promise<void> {

		}
}
