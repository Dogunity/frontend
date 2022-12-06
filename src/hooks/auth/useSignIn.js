import { useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const userSignInSchema = yup.object().shape({
  email: yup.string().email("Please check your email information"),
  password: yup
    .string()
    .min(8, "Please check your password information")
    .max(15, "Please check your password information")
    .matches(/(?=.*\d)(?=.*[a-z]).{8,15}/),
});

const useSignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSignInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return {
    register,
    errors,
    handleSubmit,
    handleLoginSubmit,
  };
};

export default useSignIn;
