import React, { useState } from "react";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { handleUpdating } from "../../Helpers/Updating";

function EditModal({ fileName, id, refetchData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textUpdate, setTextUpdate] = useState("");

  const updateButtonPressed = () => {
    handleUpdating(fileName, id, textUpdate, refetchData);
    onClose();
  };

  return (
    <>
      <FaRegEdit onClick={onOpen} className="text-fuchsia-500 cursor-pointer" />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            bg="#ffffff"
            color="#b91c1c"
            border="2px solid #b91c1c"
            _hover={{ bg: "#f87171", color: "#ffffff" }}
            size="sm"
          />

          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Please enter the updated text:
            </Text>
            <Textarea
              borderColor="#9ca3af"
              placeholder="Enter text"
              onChange={(e) => setTextUpdate(e.target.value)}
            />
            <Button
              bg="#1d4ed8"
              size="sm"
              color="#ffffff"
              _hover={{ bg: "#3b82f6" }}
              mt={3}
              onClick={updateButtonPressed}>
              Update
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default EditModal;
