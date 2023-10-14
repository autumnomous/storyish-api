import { Test, TestingModule } from '@nestjs/testing';
import { OpenlibraryService } from './openlibrary.service';

describe('OpenlibraryService', () => {
  let service: OpenlibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenlibraryService],
    }).compile();

    service = module.get<OpenlibraryService>(OpenlibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
