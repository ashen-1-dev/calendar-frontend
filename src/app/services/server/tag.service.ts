import { ITagService } from '../tag.interface';
import { Tag } from '../../models/Tag';
import axios from 'axios';

class TagServiceImpl implements ITagService {
  constructor() {
    axios.defaults.baseURL =
      process.env.SERVER_BASE_URL || 'http://localhost:3001';
  }

  public async addTag(tag: Tag): Promise<void> {
    return axios.post('/tags', tag).then(resp => resp.data);
  }

  public async getTags(): Promise<Tag[]> {
    return axios.get<Tag[]>('/tags').then(resp => resp.data);
  }

  public async removeTag(uuid: string): Promise<void> {
    return axios.delete(`/tags/${uuid}`);
  }
}

export const TagService = new TagServiceImpl();
