import * as A from 'assert';
import * as M from 'mocha';
import * as T from '../index';

M.describe('Math', () => {
  M.describe('#areaCircle', () => {
    M.it('should correctly give the area of a circle', () => {
      A.equal(T.areaCircle(0), 0.0);
      A.equal(T.areaCircle(-120), 0.0);
      A.equal(Math.round(T.areaCircle(10) * 1000) / 1000, 314.159);
      A.equal(Math.round(T.areaCircle(123) * 1000) / 1000, 47529.155)
    });
  });
  M.describe('#areaParallelogram', () => {
    M.it('should correctly give you the area of a parallelogram', () => {
      A.equal(T.areaParallelogram(0, 100), 0.0);
      A.equal(T.areaParallelogram(-100, 100), 0.0);
      A.equal(T.areaParallelogram(1, 2), 2.0);
      A.equal(T.areaParallelogram(9, 3), 27.0);
    });
  });
  M.describe('#areaRectangle', () => {
    M.it('should correctly give you the area of a rectangle', () => {
      A.equal(T.areaRectangle(0, 100), 0.0);
      A.equal(T.areaRectangle(-100, 100), 0.0);
      A.equal(T.areaRectangle(1, 2), 2.0);
      A.equal(T.areaRectangle(9, 3), 27.0);
    });
  });
  M.describe('#areaSquare', () => {
    M.it('should correctly give you the area of a square', () => {
      A.equal(T.areaSquare(0), 0.0);
      A.equal(T.areaSquare(-100), 0.0);
      A.equal(T.areaSquare(2), 4.0);
      A.equal(T.areaSquare(9), 81.0);
    });
  });
  M.describe('#areaTrapezoid', () => {
    M.it('should correctly give you the area of a trapezoid', () => {
      A.equal(T.areaTrapezoid(13, 100, 0), 0.0);
      A.equal(T.areaTrapezoid(-100, 100, 10), 0.0);
      A.equal(T.areaTrapezoid(100, -100, 2), 0.0);
      A.equal(T.areaTrapezoid(100, 100, -22), 0.0);
      A.equal(T.areaTrapezoid(1, 2, 4), 6.0);
      A.equal(T.areaTrapezoid(3, 5, 2), 8.0);
    });
  });
  M.describe('#areaTriangle', () => {
    M.it('should correctly give you the area of a triangle', () => {
      A.equal(T.areaTriangle(0, 100), 0.0);
      A.equal(T.areaTriangle(-100, 100), 0.0);
      A.equal(T.areaTriangle(1, 2), 1.0);
      A.equal(T.areaTriangle(9, 3), 13.5);
    });
  });
});