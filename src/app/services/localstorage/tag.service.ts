import { Tag } from '../../models/Tag';
import { TAGS } from './keys';
import { Appointment } from '../../models/Appointment';
import { ITagService } from '../tag.interface';
import { generateId } from '../../helpers/uuid-generator';

export class TagServiceImpl implements ITagService {
  public getTags(): Tag[] {
    const rawTags = localStorage.getItem(TAGS);
    if (!rawTags) {
      return [];
    }
    return JSON.parse(rawTags);
  }

  public removeTag(id: string): void {
    const rawTags = localStorage.getItem(TAGS);
    const tags: Appointment[] = rawTags && JSON.parse(rawTags);
    if (!tags) {
      return;
    }
    return localStorage.setItem(
      TAGS,
      JSON.stringify(tags.filter(x => x.uuid !== id)),
    );
  }

  public addTag(tag: Tag): void {
    const allRawTags = localStorage.getItem(TAGS) || '[]';
    tag.uuid = generateId();
    const tags: Tag[] = JSON.parse(allRawTags);
    return localStorage.setItem(TAGS, JSON.stringify([...tags, tag]));
  }
}

export const TagService = new TagServiceImpl();
