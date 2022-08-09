import React, { useState } from 'react';
import TagInput from '../tag-input/TagInput';
import Button from '../buttons/Button';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CurrentTime from './CurrentTime';
import Modal from '../modal/Modal';
import TagEdit from '../tag/TagEdit';

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
  const [modalActive, setModalActive] = useState(false);
  return (
    <Wrapper>
      <Modal
        active={modalActive}
        label={'Редактрование тегов'}
        setActive={setModalActive}
      >
        <TagEdit />
      </Modal>
      <Logo>Календарь</Logo>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <TagInput placeholder={'Поиск по тегам'} showIcon size={'large'} />
        <Button
          onClick={() => setModalActive(true)}
          size={'large'}
          variant={'primary'}
        >
          Редактировать теги
        </Button>
      </div>
      <CurrentTime />
    </Wrapper>
  );
};

export default Header;
