// Custom hooks
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
