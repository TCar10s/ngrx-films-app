export interface CastResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  original_name: string;
  profile_path: null | string;
}
