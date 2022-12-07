import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useModal from "../common/useModal";
import { authRegisterRequest } from "../../apis/authService";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSignUpSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
    },
  });

  const { isModalOpen, handleIsModalOpenStateChange } = useModal();

  const handleRegisterSubmit = async (formData) => {
    const { email, password, nickname } = formData;
    const { data } = await authRegisterRequest(email, password, nickname);
    if (!data) {
      handleIsModalOpenStateChange();
      return;
    }
    window.location.replace("/login");
  };

  return {
    register,
    errors,
    isModalOpen,
    handleSubmit,
    handleRegisterSubmit,
    handleIsModalOpenStateChange,
  };
};

export default useSignUp;
