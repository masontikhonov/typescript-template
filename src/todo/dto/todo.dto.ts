import type { Day } from '../../common/types/day.type';

export interface TodoDto {
  id: number;
  description: string;
  completed: boolean;
  started?: Day;
  finished?: Day;
}
