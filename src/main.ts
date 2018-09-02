import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logActivity from './common/log-activity/log-activity.middleware';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(logActivity());
	await app.listen(3000);
}
bootstrap();
