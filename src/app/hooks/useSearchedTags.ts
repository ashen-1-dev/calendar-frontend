import { useMemo, useState } from 'react';
import { Tag } from '../models/Tag';
import { useAppSelector } from './useAppSelector';
import { selectAllTags } from '../../store/tags/selectors';

export const useSearchedTags = (
  tags: Tag[],
  onChange: (tags: Tag[]) => void,
) => {
  const [value, setValue] = useState('');
  const { tags: allTags } = useAppSelector(selectAllTags);
  const handleOnChange = (value: string) => {
    setValue(value);
  };
  const searchedTags = useMemo(() => {
    if (value === '') {
      return [];
    }
    const searchedTags: Tag[] = allTags.filter(tag =>
      tag.name.toLowerCase().includes(value.toLowerCase()),
    );
    return searchedTags.filter(
      searchedTag =>
        !(tags || []).map(tag => tag.name).includes(searchedTag.name),
    );
  }, [value, allTags]);

  const removeTag = (uuid: string) => {
    onChange(tags.filter(tag => tag.id !== uuid));
  };

  const addTag = (tag: Tag) => {
    onChange([...tags, tag]);
    setValue('');
  };
  return {
    value: value,
    setValue: setValue,
    searchedTags: searchedTags,
    handleOnChange: handleOnChange,
    removeTag: removeTag,
    addTag: addTag,
  };
};
