import { Tag } from '../../app/models/Tag';

export interface TagState {
  tags: Tag[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}
