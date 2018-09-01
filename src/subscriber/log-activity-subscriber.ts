import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';

@EventSubscriber()
export class LogActivitySubscriber implements EntitySubscriberInterface {

	async afterInsert(event: InsertEvent<any>) {

	}

	async afterUpdate(event: UpdateEvent<any>) {

	}

	async afterRemove(event: RemoveEvent<any>) {

	}
}
