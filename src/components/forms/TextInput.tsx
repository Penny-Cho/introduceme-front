import {
  FormControl,
  InputBase,
  InputLabel,
  alpha,
  styled,
} from "@mui/material";
import React from "react";

interface ITextInput {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
  disabled = false,
  error,
  helperText,
  fullWidth,
}: ITextInput) => {
  return (
    <FormControl variant="filled">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputWrapper
        id={name}
        onChange={onChange}
        type={type}
        disabled={disabled}
        required={required}
        value={value}
      />
    </FormControl>
  );
};

export default TextInput;

const InputWrapper = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(0),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
