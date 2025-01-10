import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const AuthToast = ({ status, description, title, position }) => {
  const toast = useToast();
  useEffect(() => {
    if (status != null) {
      toast({
        title: title,
        description: description,
        status: status, // "success", "error", "info", "warning"
        position: position,
        duration: 5000,
        isClosable: false,
      });
    }
  }, [status, description, position, title, toast]);
  return null;
};

export default AuthToast;
