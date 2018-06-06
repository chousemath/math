(* Mathematical Constants *)

let pi = 4.0 *. atan 1.0;;

(* Defining Functions *)

let safeValue value =
    if value < 0.0 then 0.0 else value;;

let areaCircle radius =
    let safeRadius = safeValue radius in
    pi *. safeRadius *. safeRadius;;

let areaParallelogram base height =
    (safeValue base) *. (safeValue height);;

let areaRectangle length width =
    (safeValue length) *. (safeValue width);;

let areaSquare side =
    let safeSide = safeValue side in
    safeSide *. safeSide;;

let areaTrapezoid base1 base2 height =
    0.5 *. ((safeValue base1) +. (safeValue base2)) *. (safeValue height);;

let areaTriangle base height =
    0.5 *. (safeValue base) *. (safeValue height);;

let perimeterCircle radius =
    2.0 *. pi *. (safeValue radius);;

let perimeterRectangle length width =
    2.0 *. (safeValue length) +. 2.0 *. (safeValue width);;

let perimeterSquare side =
    4.0 *. (safeValue side);;

let perimeterTriangle side1 side2 side3 =
    let mappedArray = Array.map (fun x -> safeValue x) [|side1;side2;side3|] in
    match (Array.fold_left (fun x y -> x *. y) 1.0 mappedArray) with
    | 0.0 -> Array.fold_left (fun x y -> if x > y then x else y) 0.0 mappedArray
    | _ -> Array.fold_left (fun x y -> x +. y) 0.0 mappedArray

let removeNegatives values =
    Js.Array.filter (fun x -> x > 0.0) values;;

let removePositives values =
    Js.Array.filter (fun x -> x < 0.0) values;;

let surfaceAreaCube side =
    let safeSide = safeValue side in
    6.0 *. safeSide *. safeSide;;

let surfaceAreaCylinder radius height =
    2.0 *. pi *. (safeValue radius) *. (safeValue height);;

let surfaceAreaSphere radius =
    let safeRadius = safeValue radius in
    4.0 *. pi *. safeRadius *. safeRadius;;

let volumeCube side =
    let safeSide = safeValue side in
    safeSide *. safeSide *. safeSide;;
