import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	await app.listen(process.env.PORT || 3000, () => {
		new Logger('Application').log(`Application started at PORT ${process.env.PORT || 3000}`);
	});
}
bootstrap();
