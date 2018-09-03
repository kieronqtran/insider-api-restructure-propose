export interface LogActivityChangeContent {
	tableName: string;
	queryType: 'insert' | 'update' | 'delete';
	rowId: number | number[];
	attributes: { [key: string]: any; };
}
