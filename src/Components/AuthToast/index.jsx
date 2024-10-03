import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const AuthToast = ({ login, description }) => {
  const toast = useToast();
  useEffect(() => {
    if (login != null) {
      toast({
        title: login ? "Login Successed" : "Login Failed",
        description: login ? description : "Please check your credentials.",
        status: login ? "success" : "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [login]);
  return null;
};

export default AuthToast;
