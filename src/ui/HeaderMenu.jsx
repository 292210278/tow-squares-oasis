import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const Li = styled.li`
  list-style-type: none;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <Li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </Li>
      <Li>
        <DarkModeToggle />
      </Li>
      <Li>
        <Logout />
      </Li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
