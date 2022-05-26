import { combinationSum } from "./run";

describe("combinationSum test", ()=>{
    it("Test Case 001", ()=>{
        let candidates = [2,3,6,7];
        let target = 7;
        let results = combinationSum(candidates, target);
        expect(results.length).toBe(2);
        expect(results[0].length).toBe(3);
        expect(results[0][0]).toBe(2);
        expect(results[0][1]).toBe(2);
        expect(results[0][2]).toBe(3);
        expect(results[1].length).toBe(1);
        expect(results[1][0]).toBe(7);
    });
    it("Test Case 002", ()=>{
        let candidates = [2,3,5];
        let target = 8;
        let results = combinationSum(candidates, target);
        expect(results.length).toBe(3);
        expect(results[0].length).toBe(4);
        expect(results[0][0]).toBe(2);
        expect(results[0][1]).toBe(2);
        expect(results[0][2]).toBe(2);
        expect(results[0][3]).toBe(2);
        expect(results[1].length).toBe(3);
        expect(results[1][0]).toBe(2);
        expect(results[1][1]).toBe(3);
        expect(results[1][2]).toBe(3);
        expect(results[2].length).toBe(2);
        expect(results[2][0]).toBe(3);
        expect(results[2][1]).toBe(5);
    });
});