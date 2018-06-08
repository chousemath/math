import * as m from '../src/math.bs';

const standardBadRequest = { ok: false, data: null };
const allNumbers = (dataArray: Array<number>): boolean => {
  const typeArray: Array<string> = dataArray.map((n: number) => typeof n).filter((t: string) => t === 'number');
  return typeArray.length > 0 && typeArray.length === dataArray.length;
};

const appRouter = (app) => {

  app.post('/areaCircle', (req, res) => {
    const radius: number = req.body.radius;
    if (radius !== undefined && typeof radius === 'number') {
      res.status(200).json({ ok: true, data: m.areaCircle(radius) });
    } else res.status(400).json(standardBadRequest);
  });

  app.post('/areaParallelogram', (req, res) => {
    const base: number = req.body.base;
    const height: number = req.body.height;
    if (base && height && allNumbers([base, height])) {
      res.status(200).json({ ok: true, data: m.areaParallelogram(base, height) });
    } else res.status(400).json(standardBadRequest);
  });

}

export const _appRouter = appRouter;