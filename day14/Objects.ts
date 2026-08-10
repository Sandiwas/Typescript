type product = {
  name: string;
  price: number;
  getInfo: () => string;
};

let book1: product = {
  name: "learning java",
  price: 500,
  getInfo() {
    return `${this.name} costs ${this.price}`;
  },
};

console.log(book1.getInfo());
