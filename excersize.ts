export function sum(a: number, b:number){
    return a + b
}

export function stringLength(a:string){
    return a.length
}

export function isPalindrome(str: string) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

export function arrangeLth(arr :number[]): number[]{
   return arr.slice().sort((a,b) => a - b)
}



export function findSqrt(num: number){
    return Math.sqrt(num)
}

export function sumArray(arr: number[]) {
    let sum = 0
    arr.forEach( num => {
        sum +=  num
    })
    return sum
};
