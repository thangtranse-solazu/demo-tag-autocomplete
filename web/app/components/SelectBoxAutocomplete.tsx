import { ReactNode } from "react";

import { CheckboxProps } from "@mui/material";

import Checkbox from "../core/ui/Checkbox";

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
