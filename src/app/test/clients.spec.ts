import { Client } from '../model/clients';

describe('Clients', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });
});
