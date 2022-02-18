import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface ITextInput {
  name: string;
  label: string;
  type: "text" | "password";
}

export function TextInput({ name, label, type }: ITextInput) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          {...field}
          type={type}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}
