"use strict";
exports.__esModule = true;
var m = require("../src/math.bs");
var standardBadRequest = { ok: false, data: null };
var allNumbers = function (dataArray) {
    var typeArray = dataArray.map(function (n) { return typeof n; }).filter(function (t) { return t === 'number'; });
    return typeArray.length > 0 && typeArray.length === dataArray.length;
};
var appRouter = function (app) {
    app.post('/areaCircle', function (req, res) {
        var radius = req.body.radius;
        if (radius !== undefined && typeof radius === 'number') {
            res.status(200).json({ ok: true, data: m.areaCircle(radius) });
        }
        else
            res.status(400).json(standardBadRequest);
    });
    app.post('/areaParallelogram', function (req, res) {
        var base = req.body.base;
        var height = req.body.height;
        if (base && height && allNumbers([base, height])) {
            res.status(200).json({ ok: true, data: m.areaParallelogram(base, height) });
        }
        else
            res.status(400).json(standardBadRequest);
    });
};
exports._appRouter = appRouter;
