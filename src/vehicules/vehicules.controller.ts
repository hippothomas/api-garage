import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
  import { VehiculesService } from './vehicules.service';
  import { Vehicules } from '../vehicules';
  import { Vehicule } from '../vehicule';
  
  @Controller('vehicules')
  export class VehiculesController {
    constructor(private readonly vehiculesService: VehiculesService) {}
  
    @Get()
    async findAll(): Promise<Vehicules> {
      return this.vehiculesService.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: number): Promise<Vehicule> {
      return this.vehiculesService.find(id);
    }
  
    @Post()
    async create(@Body('vehicule') vehicule: Vehicule): Promise<void> {
      this.vehiculesService.create(vehicule);
    }
  
    @Put()
    async update(@Body('vehicule') vehicule: Vehicule): Promise<void> {
      this.vehiculesService.update(vehicule);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      this.vehiculesService.delete(id);
    }
  }