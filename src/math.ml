(* Mathematical Constants *)

let pi = 4.0 *. atan 1.0;;

(* Defining Functions *)

let safeValue value =
    if value < 0.0 then 0.0 else value;;

let areaCircle radius =
    let safeRadius = safeValue radius in
    pi *. safeRadius *. safeRadius;;

let areaParallelogram base height =
    let safeBase = safeValue base in
    let safeHeight = safeValue height in
    safeBase *. safeHeight;;

let areaRectangle length width =
    let safeLength = safeValue length in
    let safeWidth = safeValue width in 
    safeLength *. safeWidth;;

let areaSquare side =
    let safeSide = safeValue side in
    safeSide *. safeSide;;

let areaTrapezoid base1 base2 height =
    let safeBase1 = safeValue base1 in
    let safeBase2 = safeValue base2 in
    let safeHeight = safeValue height in
    match (safeBase1 *. safeBase2 *. safeHeight) with
      0.0 -> 0.0
    | _ -> 0.5 *. (safeBase1 +. safeBase2) *. safeHeight
    ;;

let areaTriangle base height =
    let safeBase = safeValue base in
    let safeHeight = safeValue height in
    0.5 *. safeBase *. safeHeight;;

let removeNegatives values =
    Js.Array.filter (fun x -> x > 0.0) values;;

let removePositives values =
    Js.Array.filter (fun x -> x < 0.0) values;;

let surfaceAreaCube side =
    let safeSide = safeValue side in
    6.0 *. safeSide *. safeSide;;

let surfaceAreaCylinder radius height =
    let safeRadius = safeValue radius in
    let safeHeight = safeValue height in
    2.0 *. pi *. safeRadius *. safeHeight;;

let surfaceAreaSphere radius =
    let safeRadius = safeValue radius in
    4.0 *. pi *. safeRadius *. safeRadius;;
