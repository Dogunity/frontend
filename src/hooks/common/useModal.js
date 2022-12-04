import { useCallback, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsModalOpenStateChange = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen, setIsModalOpen]);

  return {
    isModalOpen,
    handleIsModalOpenStateChange,
  };
};

export default useModal;
