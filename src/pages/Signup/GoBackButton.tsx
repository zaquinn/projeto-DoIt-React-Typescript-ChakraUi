import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { theme } from "../../styles/theme";

interface IGoBackButtonProps {
  top: string;
  left: string;
}

export const GoBackButton = ({ top, left }: IGoBackButtonProps) => {
  const history = useHistory();
  return (
    <Center
      as="button"
      position="absolute"
      top={top}
      left={left}
      bg="purple.500"
      fontSize="2xl"
      borderRadius="md"
      w={["60px", "80px"]}
      h="60px"
      _hover={{
        bg: "purple.600",
      }}
      onClick={() => history.push("/")}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
};
