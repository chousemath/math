(* Mathematical Constants *)

let pi = 4.0 *. atan 1.0;;

(* Defining Functions *)

let areaCircle radius =
    let safeRadius = if radius < 0.0 then 0.0 else radius in
    pi *. safeRadius *. safeRadius;;

let areaParallelogram base height =
    let safeBase = if base < 0.0 then 0.0 else base in
    let safeHeight = if height < 0.0 then 0.0 else height in
    safeBase *. safeHeight;;

let areaRectangle length width =
    let safeLength = if length < 0.0 then 0.0 else length in
    let safeWidth = if width < 0.0 then 0.0 else width in 
    safeLength *. safeWidth;;

let areaSquare side =
    let safeSide = if side < 0.0 then 0.0 else side in
    safeSide *. safeSide;;

let areaTrapezoid base1 base2 height =
    let safeBase1 = if base1 < 0.0 then 0.0 else base1 in
    let safeBase2 = if base2 < 0.0 then 0.0 else base2 in
    let safeHeight = if height < 0.0 then 0.0 else height in
    match (safeBase1 *. safeBase2 *. safeHeight) with
      0.0 -> 0.0
    | _ -> 0.5 *. (safeBase1 +. safeBase2) *. safeHeight
    ;;

let areaTriangle base height =
    let safeBase = if base < 0.0 then 0.0 else base in
    let safeHeight = if height < 0.0 then 0.0 else height in
    0.5 *. safeBase *. safeHeight;;

let removeNegatives values =
    Array.map (fun x -> if x < 0.0 then 0.0 else x) values;;

let removePositives values =
    Array.map (fun x -> if x > 0.0 then 0.0 else x) values;;

let surfaceAreaSphere radius =
    let safeRadius = if radius < 0.0 then 0.0 else radius in
    4.0 *. pi *. safeRadius *. safeRadius;;
