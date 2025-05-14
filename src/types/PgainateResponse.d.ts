export interface PgainateResponse<T> {
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  hasMore: boolean;
  docs: [T];
  totalDocs: number;
  page: number;
  totalPages: number;
  pagingCounter: number;
}
