import React from 'react';
import TagInput from '../tag-input/TagInput';
import Button from '../buttons/Button';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CurrentTime from './CurrentTime';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
`;

const Logo = styled.div`
  font-size: 1.625rem;
  color: ${Colors.Blue2};
  padding-left: 1.875rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Календарь</Logo>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <TagInput
          placeholder={'Поиск по тегам'}
          showIcon={true}
          size={'large'}
        />
        <Button size={'large'} variant={'primary'}>
          Редактировать теги
        </Button>
      </div>
      <CurrentTime />
    </Wrapper>
  );
};

export default Header;
