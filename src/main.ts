import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from './env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*'
  })

  const config = new DocumentBuilder()
    .setTitle('Animal Adoption API')
    .setDescription('API documentation for My Project')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);



  await app.listen(env.PORT ?? 3001);
}
bootstrap();
