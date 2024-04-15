export class Calc {
    add(numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    subtract(numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc - curr);
    }
}
