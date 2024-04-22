import { ReactNode } from "react";

import { Checkbox, CheckboxProps } from "@mui/material";

const SelectBoxAutocomplete = ({
  checkboxProps,
  checkboxIcon,
  checkedboxIcon,
  isSelected,
  value,
  ...props
}: {
  checkboxProps: CheckboxProps;
  checkboxIcon: ReactNode;
  checkedboxIcon: ReactNode;
  isSelected: boolean;
  value: string;
}) => (
  <li {...props}>
    <Checkbox
      {...checkboxProps}
      icon={checkboxIcon}
      checkedIcon={checkedboxIcon}
      checked={isSelected}
    />
    {value}
  </li>
);

export default SelectBoxAutocomplete;
