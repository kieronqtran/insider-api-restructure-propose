import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent, ObjectLiteral } from 'typeorm';
import { getNamespace } from 'continuation-local-storage';
import { snake } from 'change-case';
import { LogActivityService, LogActivityChangeContent } from '../../log-activity';
import { AppBaseEntity } from '../entity/app-base-entity';

export abstract class AbstractSubscriber<Entity extends AppBaseEntity> implements EntitySubscriberInterface<Entity> {

    // tslint:disable-next-line:ban-types
    abstract listenTo(): Function;

		async afterLoad(entity: Entity): Promise<void> {
			// Empty on purpose
		}

    async beforeInsert(event: InsertEvent<Entity>): Promise<void> {

		}

    async afterInsert(event: InsertEvent<Entity>): Promise<void> {
			const changeContent: LogActivityChangeContent = {
				tableName: snake(this.listenTo().name),
				queryType: 'insert',
				rowId: event.entity.id,
				attributes: Object.keys(event.entity).reduce((pre, cur) => {
					pre[snake(cur)] = event.entity[cur];
					return pre;
				} , {}),
			};
			LogActivityService.addChangeContent(changeContent);
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
