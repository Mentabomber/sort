import { NumbersCollection } from "./NumbersCollection";
export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
  // function swap(arr: any, index1: any, index2: any) {
  //   arr.splice(index1, 1, arr.splice(index2, 1, arr[index1])[0]);
  // }
  // for (let index = 0; index < this.collection.length; index++) {
  //   if (this.collection[index] > this.collection[index + 1]) {
  //     swap(this.collection, index, index + 1);
  //   }
  // }
}
