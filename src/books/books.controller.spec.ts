import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers:[BooksService]
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', ()=>{
    it('should return an array of books', async () => {
      const result = ['test'];
      
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(await controller.findAll()).toBe(result);
      


    })
  })
});
