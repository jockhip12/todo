import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTestModule } from '../../../shared/test/create-test-module';
import { createTestHarness, TestHarness } from '../../../shared/test/tets-harness';
import { TodoModule } from '../../todo.module';

import { ListToDoComponent } from './list-to-do.component';


describe('ListTodosComponent', () => {
  let testHarness: TestHarness<ListToDoComponent>;

  beforeEach(async () => {
    await setupTestModule(TodoModule);
    testHarness = createTestHarness(ListToDoComponent);
  });

  it('should create', () => {
    expect(testHarness.hasComponentCreated).toBeTruthy();
  });
});
