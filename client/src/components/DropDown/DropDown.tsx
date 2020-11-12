import React from 'react';
import { DropDownProps, ItemProps } from './types';
import {
  DropDownContainer,
  Item,
  ItemIcon,
  ItemText,
  Line,
} from './DropDown.styles';

const DropDownItem: React.FC<ItemProps> = (props) => {
  const { icon, text } = props;
  return (
    <Item>
      {icon && <ItemIcon>{icon}</ItemIcon>}
      <ItemText>{text}</ItemText>
    </Item>
  );
};

const Divider: React.FC = () => <Line />;

const DropDown = (props: DropDownProps): React.ReactElement => {
  const { children, ...rest } = props;
  return <DropDownContainer {...rest}>{children}</DropDownContainer>;
};

DropDown.Item = DropDownItem;
DropDown.Divider = Divider;

DropDown.defaultProps = {
  width: '100%',
};

export default DropDown;
