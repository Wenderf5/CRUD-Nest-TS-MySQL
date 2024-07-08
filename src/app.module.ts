import { Module } from '@nestjs/common';
import { UserModuleModule } from './user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/data-base-config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModuleModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => config(configService),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
