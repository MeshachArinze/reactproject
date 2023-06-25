/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export const Header = styled.header`
  height: 8vh;
  box-shadow: -1px 15px 17px -8px rgba(0, 0, 0, 0.1);
`;

export const HeaderUl = styled.ul`
  line-height: 8vh;
`;

export const HeaderLi = styled.li`
  margin-left: 30px;
`;

export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  transition: 0.5s;
  font-size: 15px;
  font-weight: 400;
`;