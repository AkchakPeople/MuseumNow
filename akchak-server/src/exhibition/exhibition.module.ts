import { Module } from '@nestjs/common';
import { ExhibitionService } from './exhibition.service';
import { ExhibitionController } from './exhibition.controller';

@Module({
  controllers: [ExhibitionController],
  providers: [ExhibitionService]
})
export class ExhibitionModule {}
