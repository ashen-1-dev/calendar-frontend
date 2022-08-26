import React from 'react';
import Input, { InputProps } from '../inputs/Input';
import { Tag } from '../../models/Tag';
import TagList from './tag-list/TagList';
import TagDropDown from './tag-dropdown/TagDropDown';
import { Wrapper } from './styled';
import { useSearchedTags } from '../../hooks/useSearchedTags';

export interface TagInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  showIcon?: boolean;
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}

const TagInput: React.FC<TagInputProps> = props => {
  let { placeholder, showIcon = false, size, onChange, tags, ...rest } = props;
  const { searchedTags, addTag, removeTag, value, handleOnChange } =
    useSearchedTags(tags, onChange);

  if (tags.length) {
    placeholder = '';
  }

  return (
    <Wrapper>
      <Input
        autoComplete={'off'}
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
        <TagDropDown items={searchedTags} onItemClick={addTag} />
      )}
    </Wrapper>
  );
};

export default TagInput;
