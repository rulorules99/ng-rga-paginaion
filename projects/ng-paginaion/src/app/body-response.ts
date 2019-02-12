export interface Data {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface BodyResponse {
  data: Data[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
