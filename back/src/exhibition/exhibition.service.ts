import { Injectable } from '@nestjs/common';
import { CreateExhibitionDto } from './dto/create-exhibition.dto';
import { UpdateExhibitionDto } from './dto/update-exhibition.dto';

@Injectable()
export class ExhibitionService {
  create(createExhibitionDto: CreateExhibitionDto) {
    return 'This action adds a new exhibition';
  }

  findAll() {
    return `This action returns all exhibition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exhibition`;
  }

  update(id: number, updateExhibitionDto: UpdateExhibitionDto) {
    return `This action updates a #${id} exhibition`;
  }

  remove(id: number) {
    return `This action removes a #${id} exhibition`;
  }
}
