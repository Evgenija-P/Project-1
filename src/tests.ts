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

interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

// const tcar: Car {}
