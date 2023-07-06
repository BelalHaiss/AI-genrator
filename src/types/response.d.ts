export type WriteResType = {
  content: string;
  count: number;
};

export type WriteResponse = {
  response: WriteResType[];
  total_count: number;
};
