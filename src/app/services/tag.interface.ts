import { Tag } from '../models/Tag';

export interface ITagService {
  addTag: (tag: Tag) => void;
  getTags: () => Tag[];
  removeTag: (uuid: string) => void;
}
