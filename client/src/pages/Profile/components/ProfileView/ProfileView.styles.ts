import styled, { css } from 'styled-components';
import Flex from '../../../../components/Flex';
import Text from '../../../../components/Text';
import { Media } from '../../../../styles';

export const Container = styled(Flex)`
  width: 100%;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[5]}px;
    color: ${theme.colors.text.main};

    ${Media.thone} {
      font-size: ${theme.fontSizes[3]}px;
    }
  `};
`;

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.border.gray2};
  `};
  margin: 1rem 0;
  width: 100%;
  ${Media.thone} {
    border: none;
  }
`;

export const ProfileHeader = styled(Flex)`
  padding: 2.6rem 4rem;
  border-bottom: 1px solid #d3d3d3;
  ${Media.thone} {
    padding: 2.6rem 0rem;
    justify-content: space-between;
  }
`;

export const ProfileInfo = styled(ProfileHeader)`
  :last-child {
    border: none;
  }
`;

export const ProfileLabel = styled(Text)`
  flex: 0 0 30%;
`;
