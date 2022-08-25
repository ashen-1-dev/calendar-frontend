import React, { useState } from 'react';
import TagInput from '../tag-input/TagInput';
import Button from '../buttons/Button';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import CurrentTime from './CurrentTime';
import Modal from '../modal/Modal';
import TagEditForm from '../tag/TagEditForm';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Tag } from '../../models/Tag';
import { addFilter } from '../../../store/filter/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeCurrentService } from '../../../store/used-service/actions';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.625rem;
  color: ${Colors.Blue2};
  padding-left: 1.875rem;
`;

const Header = props => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const currentService = useAppSelector(
    state => state.usedServiceState.service,
  );
  const [tags, setTags] = useState<Tag[]>([]);
  const handleOnClick = () => {
    dispatch(changeCurrentService());
  };
  const handleOnChange = (tags: Tag[]) => {
    setTags(tags);
    dispatch(addFilter({ tags: tags }));
  };
  const [modalActive, setModalActive] = useState(false);
  return (
    <Wrapper className={className}>
      <Modal
        active={modalActive}
        label={'Редактрование тегов'}
        setActive={setModalActive}
      >
        <TagEditForm />
      </Modal>
      <Logo>Календарь</Logo>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <TagInput
          tags={tags}
          onChange={tags => handleOnChange(tags)}
          placeholder={'Поиск по тегам'}
          showIcon
          size={'large'}
        />
        <Button
          onClick={() => setModalActive(true)}
          size={'large'}
          variant={'primary'}
        >
          Редактировать теги
        </Button>
        <Button
          size={'large'}
          variant={'primary'}
          onClick={() => handleOnClick()}
        >
          Сменить сервис
        </Button>
        <span>Текущий сервис: {currentService}</span>
      </div>
      <CurrentTime />
    </Wrapper>
  );
};

export default Header;
