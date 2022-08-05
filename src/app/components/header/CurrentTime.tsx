import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import useCurrentTime from '../../hooks/useCurrentTime';

const Wrapper = styled.div`
  font-weight: bold;
  padding-right: 1.875rem;
`;

const CurrentTime = () => {
  const time = useCurrentTime();
  const currentDate = format(time, 'dd.MM.yyyy HH:mm');
  return <Wrapper>{currentDate}</Wrapper>;
};

export default CurrentTime;
