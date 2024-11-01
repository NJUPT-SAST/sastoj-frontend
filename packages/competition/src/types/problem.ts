export interface Problem {
  title: string;
  point: number;
  index: number;
  id: number;
  content: string;
  score: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
