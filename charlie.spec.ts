import { combinationSum } from "./run";

describe("combinationSum test", ()=>{
    it("Test Case 001", ()=>{
        let candidates = [2,3,5];
        let target = 7;
        let results = combinationSum(candidates, target);
        expect(results.length).toBe(2);
    });
});