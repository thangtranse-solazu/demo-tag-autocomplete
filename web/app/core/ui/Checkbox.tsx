import {
  Checkbox as CheckboxMUI,
  CheckboxProps as CheckboxMUIProps,
  styled,
} from "@mui/material";

const Checkbox = styled((props: CheckboxMUIProps) => (
  <CheckboxMUI {...props} />
))(({ theme }) => ({}));

export default Checkbox;
