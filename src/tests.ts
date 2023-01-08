// Product: price, isNew, isSale, title;

// Vehicle: wheels, year, brand;

// Car: type, model + Product, +Vehicle;

// type Product = "price" | "isNew" | "isSale" | "title";
// type Vehicle = "wheels" | "year" | "brand";
// type Car = Product | Vehicle;
// const carFirst: Car = {
//   type: "string",
//   model: "string",
// };

// interface IProduct {
//   price: number;
//   isNew: boolean;
//   isSale: boolean;
//   title: string;
// }

// interface IVehicle {
//   wheels: number;
//   year: number;
//   brand: string;
// }

// interface ICar extends IProduct, IVehicle {
//   type: string;
//   model: string;
// }

// type Product = {
//   price: number;
//   isNew: boolean;
//   isSale: boolean;
//   title: string;
// };

// type Vehicle = {
//   wheels: number;
//   year: number;
//   brand: string;
// };

// type Car = {
//   type: string;
//   model: string;
// } & Product &
//   Vehicle;

// // const tcar: Car {}

// interface Order {
//   address: string;
// }
// interface TelephoneOrder extends Order {
//   callerNumber: string;
// }
// interface InternetOrder extends Order {
//   email: string;
// }

// type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

// function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
//   return !!order && 'email' in order;
// }

// function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//   return !!order && 'callerNumber' in order;
// }

// function makeOrder(order: PossibleOrders) {
//   if (isAnInternetOrder(order)) {
//     console.log(order.email);
//   } else if (isATelephoneOrder(order)) {
//     console.log(order.callerNumber);
//   }
// }

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

// border-style
type BorderStyle = `${Style} ${Uncapitalize<Color>}`;

// let borderStyle: BorderStyle = 'solid red';
// let borderStyle2: BorderStyle = 'dashed white';
