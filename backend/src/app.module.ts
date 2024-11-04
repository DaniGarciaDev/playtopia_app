import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,                     
      username: 'admin',    
      password: 'admin', 
      database: 'playtopia_db',        
      entities: [User],                
      synchronize: true,              
    }),
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
