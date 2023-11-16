import { countDown } from "../task";

test("Count down from -2", () =>{
  expect(countDown(-2)).toEqual([]);
});

test("Count down from 1", () =>{
  expect(countDown(1)).toEqual([1]);
});

xtest("Count down from 0", () =>{
  expect(countDown(0)).toEqual([]);
})


describe("test for countDown function", ()=> {
        it("Count down from 4, Count down from 10, Count down from 6", () => {
            expect(countDown(4)).toEqual([4,3,2,1]);
            expect(countDown(10)).toEqual([10,9,8,7,6,5,4,3,2,1]);
            expect(countDown(6)).toEqual([6,5,4,3,2,1]);
          })
    });

    