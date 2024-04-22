import {
    OutlinedInputProps,
    TextField as TextFieldMUI,
    TextFieldProps as TextFieldMUIProps,
    styled,
} from "@mui/material";

const TextField = styled((props: TextFieldMUIProps) => (
  <TextFieldMUI
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAutocomplete-input": {
    width: "auto !important",
    fontSize: theme.typography.fontSize,
  },
}));

export default TextField;
