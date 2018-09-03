import { ObjectLiteral } from 'typeorm';

export interface LogActivityChangeContent {
	tableName: string;
	queryType: 'insert' | 'update' | 'delete';
	rowId: number | number[];
	attributes: ObjectLiteral;
}
