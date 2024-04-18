export interface Problem {
  title: string;
  point: number;
  tag: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
