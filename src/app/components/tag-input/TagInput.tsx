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
  input {
    padding-left: 0.625rem;
  }
`;

export interface TagInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  showIcon?: boolean;
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}

const TagInput: React.FC<TagInputProps> = props => {
  let { placeholder, showIcon = false, size, onChange, tags, ...rest } = props;
  const [value, setValue] = useState('');
  const allTags: Tag[] = [
    { id: 1, name: 'Не важно', description: 'Да это не жестко' },
    { id: 2, name: 'Ва же', description: 'Да это жестко' },
  ];

  const handleOnChange = (value: string) => {
    setValue(value);
  };

  const removeTag = (id: number) => {
    onChange(tags.filter(tag => tag.id !== id));
  };

  const addTag = (tag: Tag) => {
    onChange([...tags, tag]);
    setValue('');
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
        onChange={value => handleOnChange(value)}
        {...rest}
      >
        <TagList onRemoval={removeTag} items={tags || []} />
      </Input>
      {!!searchedTags.length && (
        <DropDownTag items={searchedTags} onItemClick={addTag} />
      )}
    </Wrapper>
  );
};

export default TagInput;
