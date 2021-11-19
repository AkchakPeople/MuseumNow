import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExhibitionService } from './exhibition.service';
import { CreateExhibitionDto } from './dto/create-exhibition.dto';
import { UpdateExhibitionDto } from './dto/update-exhibition.dto';

@Controller('exhibition')
export class ExhibitionController {
  constructor(private readonly exhibitionService: ExhibitionService) {}

  @Post()
  create(@Body() createExhibitionDto: CreateExhibitionDto) {
    return this.exhibitionService.create(createExhibitionDto);
  }

  @Get()
  findAll() {
    return this.exhibitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exhibitionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExhibitionDto: UpdateExhibitionDto) {
    return this.exhibitionService.update(+id, updateExhibitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exhibitionService.remove(+id);
  }
}
