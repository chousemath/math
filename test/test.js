"use strict";
exports.__esModule = true;
var A = require("assert");
var M = require("mocha");
var T = require("../index");
M.describe('Math', function () {
    M.describe('#areaCircle', function () {
        M.it('should correctly give the area of a circle', function () {
            A.equal(T.areaCircle(0), 0.0);
            A.equal(T.areaCircle(-120), 0.0);
            A.equal(Math.round(T.areaCircle(10) * 1000.0) / 1000.0, 314.159);
            A.equal(Math.round(T.areaCircle(123) * 1000.0) / 1000.0, 47529.155);
        });
    });
    M.describe('#areaParallelogram', function () {
        M.it('should correctly give you the area of a parallelogram', function () {
            A.equal(T.areaParallelogram(0, 100), 0.0);
            A.equal(T.areaParallelogram(-100, 100), 0.0);
            A.equal(T.areaParallelogram(1, 2), 2.0);
            A.equal(T.areaParallelogram(9, 3), 27.0);
        });
    });
    M.describe('#areaRectangle', function () {
        M.it('should correctly give you the area of a rectangle', function () {
            A.equal(T.areaRectangle(0, 100), 0.0);
            A.equal(T.areaRectangle(-100, 100), 0.0);
            A.equal(T.areaRectangle(1, 2), 2.0);
            A.equal(T.areaRectangle(9, 3), 27.0);
        });
    });
    M.describe('#areaSquare', function () {
        M.it('should correctly give you the area of a square', function () {
            A.equal(T.areaSquare(0), 0.0);
            A.equal(T.areaSquare(-100), 0.0);
            A.equal(T.areaSquare(2), 4.0);
            A.equal(T.areaSquare(9), 81.0);
        });
    });
    M.describe('#areaTrapezoid', function () {
        M.it('should correctly give you the area of a trapezoid', function () {
            A.equal(T.areaTrapezoid(-100, 100, 10), 500.0);
            A.equal(T.areaTrapezoid(100, -100, 2), 100.0);
            A.equal(T.areaTrapezoid(100, 100, -22), 0.0);
            A.equal(T.areaTrapezoid(1, 2, 4), 6.0);
            A.equal(T.areaTrapezoid(3, 5, 2), 8.0);
        });
    });
    M.describe('#areaTriangle', function () {
        M.it('should correctly give you the area of a triangle', function () {
            A.equal(T.areaTriangle(0, 100), 0.0);
            A.equal(T.areaTriangle(-100, 100), 0.0);
            A.equal(T.areaTriangle(1, 2), 1.0);
            A.equal(T.areaTriangle(9, 3), 13.5);
        });
    });
    M.describe('#perimeterRectangle', function () {
        M.it('should correctly calculate the perimeter of a rectangle', function () {
            A.equal(T.perimeterRectangle(2, 3), 10.0);
            A.equal(T.perimeterRectangle(0, 3), 6.0);
            A.equal(T.perimeterRectangle(3, 0), 6.0);
            A.equal(T.perimeterRectangle(-3, 3), 6.0);
            A.equal(T.perimeterRectangle(3, -3), 6.0);
        });
    });
    M.describe('#perimeterSquare', function () {
        M.it('should correctly calculate the perimeter of a square', function () {
            A.equal(T.perimeterSquare(10), 40.0);
            A.equal(T.perimeterSquare(0), 0.0);
            A.equal(T.perimeterSquare(-10), 0.0);
        });
    });
    M.describe('#perimeterTriange', function () {
        M.it('should correctly calculate the perimeter of a triangle', function () {
            A.equal(T.perimeterTriangle(1, 2, 3), 6);
            A.equal(T.perimeterTriangle(11, 22, 33), 66);
            A.equal(T.perimeterTriangle(-1, 2, 3), 3);
            A.equal(T.perimeterTriangle(0, 22, 3), 22);
        });
    });
    M.describe('#removeNegatives', function () {
        M.it('should correctly replace all negative values with 0', function () {
            var result = T.removeNegatives([-3, -2, -1, 0, 1, 2, 3]);
            A.equal(result.length, 3);
            A.equal(result[0], 1.0);
            A.equal(result[1], 2.0);
            A.equal(result[2], 3.0);
        });
    });
    M.describe('#removePositives', function () {
        M.it('should correctly replace all negative values with 0', function () {
            var result = T.removePositives([-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0]);
            A.equal(result.length, 3);
            A.equal(result[0], -3.0);
            A.equal(result[1], -2.0);
            A.equal(result[2], -1.0);
        });
    });
    M.describe('#surfaceAreaCube', function () {
        M.it('should correctly give you the surface area of a cube', function () {
            A.equal(T.surfaceAreaCube(0), 0.0);
            A.equal(T.surfaceAreaCube(-1000), 0.0);
            A.equal(T.surfaceAreaCube(10), 600.0);
            A.equal(T.surfaceAreaCube(23), 3174.0);
        });
    });
    M.describe('#surfaceAreaCylinder', function () {
        M.it('should correctly give you the surface area of a cylinder', function () {
            A.equal(T.surfaceAreaCylinder(0, 0), 0.0);
            A.equal(T.surfaceAreaCylinder(-1000, 100), 0.0);
            A.equal(Math.round(T.surfaceAreaCylinder(2, 5) * 1000.0) / 1000.0, 62.832);
            A.equal(Math.round(T.surfaceAreaCylinder(12.12, 22.33) * 1000.0) / 1000.0, 1700.479);
        });
    });
    M.describe('#surfaceAreaSphere', function () {
        M.it('should correctly give you the surface area of a sphere', function () {
            A.equal(T.surfaceAreaSphere(0), 0.0);
            A.equal(T.surfaceAreaSphere(-1000), 0.0);
            A.equal(Math.round(T.surfaceAreaSphere(10) * 1000.0) / 1000.0, 1256.637);
            A.equal(Math.round(T.surfaceAreaSphere(23) * 1000.0) / 1000.0, 6647.610);
        });
    });
});
