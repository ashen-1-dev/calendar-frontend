import { Tag } from '../../models/Tag';
import { TAGS } from './keys';
import { ITagService } from '../tag.interface';
import { Appointment } from '../../models/Appointment';

export class TagService {
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
      JSON.stringify(tags.filter(x => x.id !== id)),
    );
  }

  public addTag(tag: Tag): void {
    const allRawTags = localStorage.getItem(TAGS);
    const tags: Tag[] = JSON.parse(allRawTags || '');
    return localStorage.setItem(TAGS, JSON.stringify([...tags, tag]));
  }
}
