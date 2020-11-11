import React from 'react';
// import styled from 'styled-components';
import Flex from '../Flex';
import Text from '../Text';

const CopyRight: React.FC = () => {
  return (
    <Flex fullWidth justify='space-between'>
      <Text appearance='hint'>ProxN</Text>
      <Text appearance='hint'>devchallenges.io</Text>
    </Flex>
  );
};

export default CopyRight;
