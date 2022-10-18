import { Injectable } from '@nestjs/common';
import { Continent, ContinentDocument } from './schemas/continent.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  constructor(
    @InjectModel('continent')
    private readonly continentModel: Model<ContinentDocument>,
  ) {}

  /** Creating a continent*/
  async createContinent(continent: Continent): Promise<Continent> {
    const newContinent = new this.continentModel(continent);
    return newContinent.save();
  }
  /** Afficher tout les continents */

  async find(options) {
    return this.continentModel.find(options).exec();
  }

  // async getAllContinent() {
  //   return this.continentModel
  //     .find({})
  //     .then((continent) => {
  //       return continent;
  //     })
  //     .catch((err) => console.log(err));
  // }

  /**
   *
   * id Delete continent
   */
  async deleteContinent(id) {
    return this.continentModel.findByIdAndRemove(id);
  }
}
