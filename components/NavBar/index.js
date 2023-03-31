import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "favorites", path: "/favorites" },
    { label: "settings", path: "/settings" },
  ];

  return (
    <StyledNav>
      <StyledList>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <Button className={pathname === item.path ? "active" : ""}>
                {item.label}
              </Button>
            </Link>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: darkgray;
  color: white;
  &.active {
    background-color: black;
  }
`;
