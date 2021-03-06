import * as A from 'assert';
import * as M from 'mocha';
import * as T from '../index';

M.describe('Math', () => {
  M.describe('#areaCircle', () => {
    M.it('should correctly give the area of a circle', () => {
      A.equal(T.areaCircle(0), 0.0);
      A.equal(T.areaCircle(-120), 0.0);
      A.equal(Math.round(T.areaCircle(10) * 1000.0) / 1000.0, 314.159);
      A.equal(Math.round(T.areaCircle(123) * 1000.0) / 1000.0, 47529.155)
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
      A.equal(T.areaTrapezoid(-100, 100, 10), 500.0);
      A.equal(T.areaTrapezoid(100, -100, 2), 100.0);
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

  M.describe('#distanceTwoPoints', () => {
    M.it('should correctly calculate the distance between two points', () => {
      A.equal(Math.round(T.distanceTwoPoints(1, 2, 3, 4) * 1000.0) / 1000.0, 2.828);
      A.equal(Math.round(T.distanceTwoPoints(-11, 23.3, 32.1, -44.1) * 1000.0) / 1000.0, 80.002);
      A.equal(Math.round(T.distanceTwoPoints(0, 23.3, 32.1, 0) * 1000.0) / 1000.0, 39.665);
    });
  });

  M.describe('#perimeterCircle', () => {
    M.it('should correctly calculate the perimeter of a circle', () => {
      A.equal(Math.round(T.perimeterCircle(2) * 1000.0) / 1000.0, 12.566);
      A.equal(Math.round(T.perimeterCircle(3) * 1000.0) / 1000.0, 18.850);
      A.equal(Math.round(T.perimeterCircle(0) * 1000.0) / 1000.0, 0.0);
      A.equal(Math.round(T.perimeterCircle(-10) * 1000.0) / 1000.0, 0.0);
      A.equal(Math.round(T.perimeterCircle(32) * 1000.0) / 1000.0, 201.062);
    });
  });
  M.describe('#perimeterRectangle', () => {
    M.it('should correctly calculate the perimeter of a rectangle', () => {
      A.equal(T.perimeterRectangle(2, 3), 10.0);
      A.equal(T.perimeterRectangle(0, 3), 6.0);
      A.equal(T.perimeterRectangle(3, 0), 6.0);
      A.equal(T.perimeterRectangle(-3, 3), 6.0);
      A.equal(T.perimeterRectangle(3, -3), 6.0);
    });
  });
  M.describe('#perimeterSquare', () => {
    M.it('should correctly calculate the perimeter of a square', () => {
      A.equal(T.perimeterSquare(10), 40.0);
      A.equal(T.perimeterSquare(0), 0.0);
      A.equal(T.perimeterSquare(-10), 0.0);
    });
  });
  M.describe('#perimeterTriange', () => {
    M.it('should correctly calculate the perimeter of a triangle', () => {
      A.equal(T.perimeterTriangle(1, 2, 3), 6);
      A.equal(T.perimeterTriangle(11, 22, 33), 66);
      A.equal(T.perimeterTriangle(-1, 2, 3), 3);
      A.equal(T.perimeterTriangle(0, 22, 3), 22);
    });
  });
  M.describe('#removeNegatives', () => {
    M.it('should correctly replace all negative values with 0', () => {
      const result: Array<number> = T.removeNegatives([-3, -2, -1, 0, 1, 2, 3]);
      A.equal(result.length, 3);
      A.equal(result[0], 1.0);
      A.equal(result[1], 2.0);
      A.equal(result[2], 3.0);
    });
  });
  M.describe('#removePositives', () => {
    M.it('should correctly replace all negative values with 0', () => {
      const result: Array<number> = T.removePositives([-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0]);
      A.equal(result.length, 3);
      A.equal(result[0], -3.0);
      A.equal(result[1], -2.0);
      A.equal(result[2], -1.0);
    });
  });

  M.describe('#slope', () => {
    M.it('should calculate the slope of the line between two points', () => {
      A.equal(T.slope(1, 2, 3, 4), 1.0);
      A.equal(Math.round(T.slope(-22, 123, 99, -170.2) * 1000.0) / 1000.0, -2.423)
    });
  });

  M.describe('#surfaceAreaCube', () => {
    M.it('should correctly give you the surface area of a cube', () => {
      A.equal(T.surfaceAreaCube(0), 0.0);
      A.equal(T.surfaceAreaCube(-1000), 0.0);
      A.equal(T.surfaceAreaCube(10), 600.0);
      A.equal(T.surfaceAreaCube(23), 3174.0);
    });
  });
  M.describe('#surfaceAreaCylinder', () => {
    M.it('should correctly give you the surface area of a cylinder', () => {
      A.equal(T.surfaceAreaCylinder(0, 0), 0.0);
      A.equal(T.surfaceAreaCylinder(-1000, 100), 0.0);
      A.equal(Math.round(T.surfaceAreaCylinder(2, 5) * 1000.0) / 1000.0, 62.832);
      A.equal(Math.round(T.surfaceAreaCylinder(12.12, 22.33) * 1000.0) / 1000.0, 1700.479);
    });
  });
  M.describe('#surfaceAreaSphere', () => {
    M.it('should correctly give you the surface area of a sphere', () => {
      A.equal(T.surfaceAreaSphere(0), 0.0);
      A.equal(T.surfaceAreaSphere(-1000), 0.0);
      A.equal(Math.round(T.surfaceAreaSphere(10) * 1000.0) / 1000.0, 1256.637);
      A.equal(Math.round(T.surfaceAreaSphere(23) * 1000.0) / 1000.0, 6647.610);
    });
  });
  M.describe('#volumeCone', () => {
    M.it('should correctly calculate the volume of a cone', () => {
      A.equal(Math.round(T.volumeCone(12, 13) * 1000.0) / 1000.0, 1960.354);
      A.equal(Math.round(T.volumeCone(321.123, 23.33) * 1000.0) / 1000.0, 2519336.517);
      A.equal(T.volumeCone(0, 22), 0.0);
      A.equal(T.volumeCone(-10, 44), 0.0);
    });
  });
  M.describe('#volumeCube', () => {
    M.it('should correctly calculate the volume of a cube', () => {
      A.equal(T.volumeCube(12), 1728.0);
      A.equal(Math.round(T.volumeCube(321.123) * 1000.0) / 1000.0, 33114197.700);
      A.equal(T.volumeCube(0), 0.0);
      A.equal(T.volumeCube(-10), 0.0);
    });
  });
  M.describe('#volumeCylinder', () => {
    M.it('should correctly calculate the volume of a cylinder', () => {
      A.equal(Math.round(T.volumeCylinder(12, 13) * 1000.0) / 1000.0, 5881.061);
      A.equal(Math.round(T.volumeCylinder(321.123, 22.33) * 1000.0) / 1000.0, 7234048.575);
      A.equal(T.volumeCylinder(0, 2), 0.0);
      A.equal(T.volumeCylinder(-10, 3), 0.0);
    });
  });
  M.describe('#volumeRectangularContainer', () => {
    M.it('should correctly calculate the volume of a rectangular container', () => {
      A.equal(T.volumeRectangularContainer(12, 11, 33), 4356.0);
      A.equal(Math.round(T.volumeRectangularContainer(12.22, 11.11, 33.33) * 1000.0) / 1000.0, 4525.021);
      A.equal(T.volumeRectangularContainer(0, 1, 2), 0.0);
      A.equal(T.volumeRectangularContainer(-10, 2, 3), 0.0);
    });
  });
  M.describe('#volumeRightCircularCylinder', () => {
    M.it('should correctly calculate the volume of a circular cylinder', () => {
      A.equal(Math.round(T.volumeRightCircularCylinder(11.11, 33.33) * 1000.0) / 1000.0, 12924.487);
      A.equal(Math.round(T.volumeRightCircularCylinder(12.22, 11.11) * 1000.0) / 1000.0, 5212.023);
      A.equal(T.volumeRightCircularCylinder(0, 1), 0.0);
      A.equal(T.volumeRightCircularCylinder(-10, 2), 0.0);
    });
  });
  M.describe('#volumeSquarePyramid', () => {
    M.it('should correctly calculate the volume of a square pyramid', () => {
      A.equal(T.volumeSquarePyramid(12, 11), 528.0);
      A.equal(Math.round(T.volumeSquarePyramid(12.22, 11.11) * 1000.0) / 1000.0, 553.013);
      A.equal(T.volumeSquarePyramid(0, 1), 0.0);
      A.equal(T.volumeSquarePyramid(-10, 2), 0.0);
    });
  });
  M.describe('#volumeSphere', () => {
    M.it('should correctly calculate the volume of a sphere', () => {
      A.equal(Math.round(T.volumeSphere(123.321) * 1000.0) / 1000.0, 7855968.303);
      A.equal(Math.round(T.volumeSphere(11.11) * 1000.0) / 1000.0, 5744.216);
      A.equal(T.volumeSphere(0), 0.0);
      A.equal(T.volumeSphere(-10), 0.0);
    });
  });
});