export interface Problem {
  title: string;
  point: number;
  key: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
