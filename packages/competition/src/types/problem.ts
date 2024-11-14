export interface Problem {
  title: string;
  point: number;
  index: number;
  id: string;
  content: string;
  score: number;
  type: string;
  metadata: {
    options: string;
    size: string;
    [property: string]: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
