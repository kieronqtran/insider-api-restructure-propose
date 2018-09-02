import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';
import { AbstractSubscriber } from '../common';
import { Employee } from './employee.entity';

@EventSubscriber()
export class EmployeeSubscriber extends AbstractSubscriber<Employee> {

	listenTo() {
		return Employee;
	}

}
