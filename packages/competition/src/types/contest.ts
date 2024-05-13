export interface Contest {
  description?: string;
  endTime?: string;
  extraTime?: number;
  id: number;
  language?: string;
  startTime?: string;
  state?: number;
  title: string;
  type?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}
