import React, { useMemo, useState } from 'react';
import Input, { InputProps } from '../inputs/Input';
import styled from 'styled-components';
import { Tag } from '../../models/Tag';
import TagList from './TagList';
import DropDownTag from './DropDownTag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TagInput: React.FC<Omit<InputProps, 'value' | 'onChange'>> = props => {
  let { placeholder, showIcon, size } = props;
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const allTags: Tag[] = [
    { uuid: '1', name: 'Не важно', description: 'Да это не жестко' },
    { uuid: '2', name: 'Ва же', description: 'Да это жестко' },
  ];

  const removeTag = (id: string) => {
    setTags(prevTags => prevTags.filter(tag => tag.uuid !== id));
  };

  const handleOnChange = (value: string) => {
    setValue(value);
  };

  const addTag = (tag: Tag) => {
    setValue('');
    setTags(prevTags => [...prevTags, tag]);
  };

  const searchedTags = useMemo(() => {
    if (value === '') {
      return [];
    }
    const searchedTags: Tag[] = allTags.filter(tag =>
      tag.name.toLowerCase().includes(value.toLowerCase()),
    );
    return searchedTags.filter(
      searchedTag => !tags.map(tag => tag.name).includes(searchedTag.name),
    );
  }, [value, allTags]);

  if (tags.length) {
    placeholder = '';
  }
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        showIcon={showIcon}
        size={size}
        value={value}
        onChange={event => handleOnChange(event.target.value)}
      >
        <TagList onRemoval={removeTag} items={tags} />
      </Input>
      {!!searchedTags.length && (
        <DropDownTag items={searchedTags} onItemClick={addTag} />
      )}
    </Wrapper>
  );
};

export default TagInput;
