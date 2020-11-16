import { TestBed } from "@angular/core/testing";

export function setupTestModule<T>(moduleType: Type<T>, providers: any[] = []) {
    return TestBed.configureTestingModule({
      imports: [
        moduleType
      ],
      providers: providers
    })
    .compileComponents();
  }