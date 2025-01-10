import React, { useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";

const DataTable = ({ data }) => {
  const { langState } = useContext(LangContext);

  return (
    <Box overflowX="auto">
      <Table size="sm" variant="simple">
        <Thead className="bg-cyan-100">
          <Tr>
            <Th>ID</Th>
            <Th>Text</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((record) => (
            <Tr key={record.id} borderBottom="2px" borderColor="gray.200">
              <Td>{parseInt(record.id) + 1}</Td>
              <Td
                // Ensure the text wraps when it's too long
                whiteSpace="normal"   // Allow text to wrap
                wordBreak="break-word" // Break long words onto the next line
                overflow="hidden"      // Hide anything that overflows the box
              >
                {langState === "en" ? record.text : record.arText || record.text}
              </Td>
              <Td>
                <Flex justify="flex-end">
                  <Link to="/admin/editor" state={{ record }}>
                    <MdEdit className="hover:text-cyan-600" />
                  </Link>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
