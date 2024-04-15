import { Calc } from './calc';

export class AnotherClass {
  readonly calc = new Calc();

  add(numbers: number[]): number {
    const data = this.calc.add(numbers);
    this.write(`Result: ${data}`);
    return data;
  }

  write(txt: string) {
    console.log(txt);
  }
}
