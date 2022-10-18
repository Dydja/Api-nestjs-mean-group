import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Continent } from './schemas/continent.schema';
import { ContinentUpdateDto } from './schemas/continentUpdate.dto';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('/create')
  async createContinent(@Body() continentDto: Continent) {
    return this.appService.createContinent(continentDto);
  }

  /**
   * Api get all continent
   */
  @Get()
  getAllContinent() {
    return this.appService.find({});
  }

  /**Recherche de data */

  @Get('search')
  async Search(@Req() req: Request) {
    /** on déclare un objet vide */
    let options = {};
    /** Condition sur la recherche */
    if (req.query.s) {
      options = {
        $or: [
          { code: new RegExp(req.query.s.toString(), 'i') },
          { name: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }
    const data = this.appService.find(options);
    return data;
  }

  /**
   * Api de suppresion de data via l'id
   */
  @Delete(':id')
  async deleteContinent(@Param('id') id: string) {
    return this.appService.deleteContinent(id);
  }
}
