import { useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const userSignUpSchema = yup.object().shape({
  email: yup.string().email("Please check your email information"),
  nickname: yup
    .string()
    .min(4, "Nickname must be 4 characters or more")
    .max(15, "Nickname must be 15 characters or less"),
  password: yup
    .string()
    .min(8, "Please check your password information")
    .max(15, "Please check your password information")
    .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/),
});

const useSignUp = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(userSignUpSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
    },
  });

  const handleRegisterSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return {
    register,
    errors,
    handleSubmit,
    handleRegisterSubmit,
  };
};

export default useSignUp;
