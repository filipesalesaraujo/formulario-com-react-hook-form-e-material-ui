import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface ITextInput {
  name: string;
  label: string;
  type: string;
}

export const RHFTextInput: React.FC<ITextInput> = ({ name, label, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input type={type} placeholder={label} {...register(name)} />
      <Typography variant="caption" sx={{ color: "red" }}>
        {errors[name]?.message}
      </Typography>
    </>
  );
};
