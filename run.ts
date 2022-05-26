
export function combinationSum(candidates: number[], target: number): number[][] {

    function toFindConbinationsToTarget(results:number[][], combination:number[], 
        target:number, startIndex:number) 
    { 
        if (target===0) {
            results.push([...combination]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] > target) {
                break;
            }
            let combination_copy =  [...combination];
            combination_copy.push(candidates[i]);
            toFindConbinationsToTarget(results, combination_copy, target-candidates[i], i);
        }
    }
    let rets: number[][] = [];
    if (!candidates || candidates.length === 0)
        return rets;
    candidates.sort((a,b)=>a-b);
    let combination : number[] = [];
    toFindConbinationsToTarget(rets, [...combination], target, 0);
    return rets;
}

let candidates = [2,3,6,7];
let target = 7;
let results = combinationSum(candidates, target);
for (let r of results) {
    console.log(`items=`);
    for (let lc of r) {
        console.log(` ${lc} `)
    }
}