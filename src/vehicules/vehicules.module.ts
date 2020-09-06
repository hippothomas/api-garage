import { Module } from '@nestjs/common';
import { VehiculesService } from './vehicules.service';
import { VehiculesController } from './vehicules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicules } from './vehicules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicules])],
  providers: [VehiculesService],
  controllers: [VehiculesController]
})
export class VehiculesModule {}
