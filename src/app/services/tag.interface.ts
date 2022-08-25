import { Tag } from '../models/Tag';

export interface ITagService {
  addTag: (tag: Tag) => void | Promise<void>;
  getTags: () => Tag[] | Promise<Tag[]>;
  removeTag: (uuid: string) => void | Promise<void>;
}
