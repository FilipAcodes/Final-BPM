import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { RiPlayListFill, RiSearchLine } from "react-icons/ri";
import { FaMusic } from "react-icons/fa";
import Login from "../SubComponents/UserAuthentication/Login";
import Logout from "../SubComponents/UserAuthentication/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { IoLogOut, IoLogIn } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useAuth0();
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  return (
    <>
      <SidebarWrapper
        className={isExpanded ? "expanded" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <ul>
            <MainName>{!isExpanded ? <FaMusic /> : "BPM"}</MainName>
            <li>
              {!isExpanded ? (
                <StyledBsHouseDoorFill />
              ) : (
                <Link to="/">HomePage</Link>
              )}
            </li>
            <li>
              {!isExpanded ? (
                <StyledSearchIcon />
              ) : (
                <Link to="/search">Search</Link>
              )}
            </li>
            {user ? (
              <li>
                {!isExpanded ? (
                  <StyledRiPlayListFill />
                ) : (
                  <Link to="/playlist">Playlist</Link>
                )}
              </li>
            ) : null}
            {user ? (
              <li>
                {!isExpanded ? (
                  <StyledLikedSongsIcon />
                ) : (
                  <Link to="/likedsongs">Liked Songs</Link>
                )}
              </li>
            ) : null}
            <LogOutli>
              {user ? (
                isExpanded ? (
                  <Logout />
                ) : (
                  <StyledLogOut />
                )
              ) : isExpanded ? (
                <Login />
              ) : (
                <StyledBsPower />
              )}
            </LogOutli>
          </ul>
        </div>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;

const SidebarWrapper = styled.div`
  background-color: black;
  color: white;
  height: calc(100vh - 35px);
  width: 203px;
  position: fixed;
  top: 10px;
  left: 0;
  transition: all 0.3s ease;
  transform: translateX(-200px);
  z-index: 5;
  margin-left: 52px;
  border: 2px solid #9d00ff;
  border-radius: 8px;
  &.expanded {
    transform: translateX(-60px);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: flex-end;
      flex-direction: column-reverse;
      margin: 10px 0;
      padding: 0 20px;
    }
  }
`;

const MainName = styled.li`
  font-size: 25px;
`;

const LogOutli = styled.li`
  position: absolute;
  bottom: 2%;
  right: 0%;
`;

const StyledBsHouseDoorFill = styled(BsHouseDoorFill)`
  font-size: 25px;
`;

const StyledRiPlayListFill =
  StyledBsHouseDoorFill.withComponent(RiPlayListFill);
const StyledBsPower = StyledBsHouseDoorFill.withComponent(IoLogIn);
const StyledLogOut = StyledBsHouseDoorFill.withComponent(IoLogOut);
const StyledSearchIcon = StyledBsHouseDoorFill.withComponent(RiSearchLine);
const StyledLikedSongsIcon = StyledBsHouseDoorFill.withComponent(FcLike);
