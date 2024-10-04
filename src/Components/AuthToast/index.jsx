import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const AuthToast = ({ login, description }) => {
  const toast = useToast();
  useEffect(() => {
    if (login != null) {
      toast({
        title: login ? "Login Successed" : "Login Failed",
        description: description,
        status: login ? "success" : "error",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [login, description, toast]);
  return null;
};

export default AuthToast;
