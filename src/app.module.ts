import { Module } from '@nestjs/common';
import { UserModuleModule } from './modules/user-module/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/data-base-config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CourseModuleModule } from './modules/course-module/course.module';

@Module({
  imports: [
    UserModuleModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => config(configService),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    CourseModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
