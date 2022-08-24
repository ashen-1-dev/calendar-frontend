import React from 'react';
import Input from '../inputs/Input';
import Button from '../buttons/Button';
import { Tag } from '../../models/Tag';
import TagTable from './TagTable';
import { StyledForm, Wrapper } from './styled-form';
import { VerticalLine } from './styled-form';
import { Field, Form } from 'react-final-form';

const validation = (values: Omit<Tag, 'uuid'>) => {
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
  const onSubmit = (tag: Omit<Tag, 'uuid'>) => {
    console.log(tag);
  };
  return (
    <>
      <VerticalLine />
      <Wrapper>
        <Form
          validate={validation}
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <StyledForm onSubmit={handleSubmit}>
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
                onClick={() => null}
                variant={'primary'}
              >
                Добавить тег
              </Button>
            </StyledForm>
          )}
        />
        <TagTable />
      </Wrapper>
    </>
  );
};

export default TagEditForm;
