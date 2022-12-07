import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useSessionStorage from "../common/useSessionStorage";
import useModal from "../common/useModal";
import { authLoginRequest } from "../../apis/authService";

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

  const { setSessionStorageItem } = useSessionStorage();
  const { isModalOpen, handleIsModalOpenStateChange } = useModal();

  const handleLoginSubmit = async (formData) => {
    const { email, password } = formData;
    const { data } = await authLoginRequest(email, password);
    if (!data) {
      handleIsModalOpenStateChange();
      return;
    }
    const { result } = data;
    setSessionStorageItem(result.accessToken);
    window.location.replace("/");
  };

  return {
    register,
    errors,
    isModalOpen,
    handleSubmit,
    handleLoginSubmit,
    handleIsModalOpenStateChange,
  };
};

export default useSignIn;
