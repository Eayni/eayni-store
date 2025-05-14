export type City = {
  _id: string;
  name: string;
  count: number;
  child: [
    {
      id: string;
      name: string;
    }
  ];
};
