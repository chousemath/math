(* Mathematical Constants *)

let pi = 4.0 *. atan 1.0;;

(* Defining Functions *)

let safe value =
    if value < 0.0 then 0.0 else value;;

let mult x y = x *. y;;

(* $$Area = \pi \times Radius^2$$ *)
let areaCircle r =
    Array.fold_left mult pi (Array.map safe [|r;r|]);;

(* $$Area = Base \times Height$$ *)
let areaParallelogram b h =
    Array.fold_left mult 1.0 (Array.map safe [|b;h|]);;

(* $$Area = Length \times Width$$ *)
let areaRectangle len w =
    Array.fold_left mult 1.0 (Array.map safe [|len;w|]);;

(* $$Area = Side^2$$ *)
let areaSquare s =
    Array.fold_left mult 1.0 (Array.map safe [|s;s|]);;

let areaTrapezoid b1 b2 h =
    0.5 *. ((safe b1) +. (safe b2)) *. (safe h);;

(* $$Area = {1 \over 2} \times Base \times Height$$ *)
let areaTriangle b h =
    Array.fold_left mult 0.5 (Array.map safe [|b;h|]);;

let distanceTwoPoints x1 y1 x2 y2 =
    let xdiff = x2 -. x1 in
    let ydiff = y2 -. y1 in
    Js.Math.sqrt (xdiff *. xdiff +. ydiff *. ydiff);;

let perimeterCircle r =
    2.0 *. pi *. (safe r);;

let perimeterRectangle len w =
    Array.fold_left (fun x y -> x +. y) 0.0 (Array.map (fun x -> 2.0 *. (safe x)) [|len;w|]);;

let perimeterSquare s =
    4.0 *. (safe s);;

let perimeterTriangle s1 s2 s3 =
    let mappedArray = Array.map safe [|s1;s2;s3|] in
    match (Array.fold_left mult 1.0 mappedArray) with
    | 0.0 -> Array.fold_left (fun x y -> if x > y then x else y) 0.0 mappedArray
    | _ -> Array.fold_left (fun x y -> x +. y) 0.0 mappedArray

let removeNegatives values =
    Js.Array.filter (fun x -> x > 0.0) values;;

let removePositives values =
    Js.Array.filter (fun x -> x < 0.0) values;;

let slope x1 y1 x2 y2 = (y2 -. y1) /. (x2 -. x1);;

let surfaceAreaCube s =
    Array.fold_left mult 6.0 (Array.map safe [|s;s|]);;

let surfaceAreaCylinder r h =
    Array.fold_left mult (2.0 *. pi) (Array.map safe [|r;h|]);;

let surfaceAreaSphere r =
    Array.fold_left mult (4.0 *. pi) (Array.map safe [|r;r|]);;

let volumeCone r h =
    Array.fold_left mult (pi /. 3.0) (Array.map safe [|r;r;h|]);;

let volumeCube s =
    Array.fold_left mult 1.0 (Array.map safe [|s;s;s|]);;

let volumeCylinder r h =
    Array.fold_left mult pi (Array.map safe [|r;r;h|]);;

let volumeRectangularContainer len w h =
    Array.fold_left mult 1.0 (Array.map safe [|len;w;h|]);;

let volumeRightCircularCylinder r h =
    Array.fold_left mult pi (Array.map safe [|r;r;h|]);;

let volumeSquarePyramid b h =
    Array.fold_left mult (1.0 /. 3.0) (Array.map safe [|b;b;h|]);;

let volumeSphere r =
    Array.fold_left mult (4.0 *. pi /. 3.0) (Array.map safe [|r;r;r|]);;
