"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //All of this only works if collection  is number[]
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    // <-- Type Guard
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //Only going to work if collection is a string
                //If collection is a sting, do this logic instead:
                if (typeof this.collection === "string") {
                    // <-- Type Guard
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
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
