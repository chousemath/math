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
            A.equal(T.areaTrapezoid(13, 100, 0), 0.0);
            A.equal(T.areaTrapezoid(-100, 100, 10), 0.0);
            A.equal(T.areaTrapezoid(100, -100, 2), 0.0);
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
    M.describe('#removeNegatives', function () {
        M.it('should correctly replace all negative values with 0', function () {
            var result = T.removeNegatives([-3, -2, -1, 0, 1, 2, 3]);
            A.equal(result.length, 7);
            A.equal(result[0], 0.0);
            A.equal(result[1], 0.0);
            A.equal(result[2], 0.0);
            A.equal(result[3], 0.0);
            A.equal(result[4], 1.0);
            A.equal(result[5], 2.0);
            A.equal(result[6], 3.0);
        });
    });
    M.describe('#removePositives', function () {
        M.it('should correctly replace all negative values with 0', function () {
            var result = T.removePositives([-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0]);
            A.equal(result.length, 7);
            A.equal(result[0], -3.0);
            A.equal(result[1], -2.0);
            A.equal(result[2], -1.0);
            A.equal(result[3], 0.0);
            A.equal(result[4], 0.0);
            A.equal(result[5], 0.0);
            A.equal(result[6], 0.0);
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
