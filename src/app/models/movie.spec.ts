import { Movie } from '../models/movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });
});
