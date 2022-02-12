import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitionController } from './exhibition.controller';
import { ExhibitionService } from './exhibition.service';

describe('ExhibitionController', () => {
  let controller: ExhibitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExhibitionController],
      providers: [ExhibitionService],
    }).compile();

    controller = module.get<ExhibitionController>(ExhibitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
