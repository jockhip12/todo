import { TestBed, inject } from '@angular/core/testing';
import { ListToDoService } from './list-to-do.service';

//import { ListToDoService } from '../modules/todo/services/list-to-do.service';

describe('ListToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListToDoService]
    });
  });

  it('should be created', inject([ListToDoService], (service: ListToDoService) => {
    expect(service).toBeTruthy();
  }));
});
