export interface IPagination<T> {
  total_count: number;
  total_page: number;
  current_page: number;
  last_page: boolean;

  first: {
    page: number;
    limit: number;
  };

  next: {
    page: number;
    limit: number;
  };

  previous: {
    page: number;
    limit: number;
  };

  last: {
    page: number;
    limit: number;
  };

  current_count_per_page: number;
  range: number;

  paginated_data: T[];
}
