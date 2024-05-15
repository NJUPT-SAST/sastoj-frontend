export interface Problem {
  title: string;
  point: number;
  key: string;
  tag: string;
  id: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
