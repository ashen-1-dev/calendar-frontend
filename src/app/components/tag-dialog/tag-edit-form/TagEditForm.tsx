import React, { useEffect } from 'react';
import Input from '../../inputs/Input';
import Button from '../../buttons/Button';
import { Tag } from '../../../models/Tag';
import TagTable from '../tag-table/TagTable';
import { Styled, Wrapper } from './styled';
import { VerticalLine } from './styled';
import { Field, Form } from 'react-final-form';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { createTag, getTags } from '../../../../store/tags/actions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAllTags } from '../../../../store/tags/selectors';

const validation = (values: Omit<Tag, 'id'>) => {
  const errors: {
    name?: string;
    description?: string;
  } = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  if (!values.description) {
    errors.description = 'Обязательное поле';
  }
  return errors;
};

const TagEditForm = () => {
  const dispatch = useAppDispatch();
  const { tags, isError, error, isLoading } = useAppSelector(selectAllTags);

  useEffect(() => {
    dispatch(getTags());
  }, []);
  const onSubmit = (tag: Omit<Tag, 'id'>, form) => {
    dispatch(createTag(tag));
    form.reset();
  };
  return (
    <>
      <VerticalLine />
      <Wrapper>
        <Form
          validate={validation}
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <Styled onSubmit={handleSubmit}>
              <Field name={'name'}>
                {({ input }) => (
                  <Input
                    name={input.name}
                    placeholder={'Введите название'}
                    value={input.value}
                    size={'very-small'}
                    onChange={input.onChange}
                  />
                )}
              </Field>
              <Field name={'description'}>
                {({ input }) => (
                  <Input
                    placeholder={'Введите описание'}
                    size={'small'}
                    value={input.value}
                    onChange={input.onChange}
                  />
                )}
              </Field>
              <Button
                disabled={!valid}
                size={'medium'}
                style={{ width: '8.813rem' }}
                variant={'primary'}
              >
                Добавить тег
              </Button>
            </Styled>
          )}
        />
        <TagTable tags={tags} />
      </Wrapper>
    </>
  );
};

export default TagEditForm;
