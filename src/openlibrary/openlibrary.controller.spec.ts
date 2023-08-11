import { Test, TestingModule } from '@nestjs/testing';
import { OpenlibraryController } from './openlibrary.controller';

describe('OpenlibraryController', () => {
  let controller: OpenlibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenlibraryController],
    }).compile();

    controller = module.get<OpenlibraryController>(OpenlibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
