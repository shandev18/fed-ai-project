import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AudioOutlined,
  FontSizeOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Sidebar = styled.div`
  background-color: black;
  width: 180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.i`
  color: white;
  font-size: 24px;
  margin: 10px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background-color: #222222;
  margin-bottom: -15px;
  cursor: pointer;
  color: white;
  &:hover {
    color: #006fee;
    background-color: #333333;
  }
`;

const SidebarItem = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Icon>
      <Link to={to} onClick={handleClick}>
        <IconBox>{children}</IconBox>
      </Link>
    </Icon>
  );
};

const Sider = () => {
  return (
    <Sidebar>
      <SidebarItem to="/webcam">
        <AudioOutlined />
      </SidebarItem>
      <SidebarItem to="/text">
        <FontSizeOutlined />
      </SidebarItem>
      <SidebarItem to="/attachment">
        <PaperClipOutlined />
      </SidebarItem>
    </Sidebar>
  );
};

export default Sider;

// import {
//   AudioOutlined,
//   FontSizeOutlined,
//   PaperClipOutlined,
// } from "@ant-design/icons";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const Sidebar = styled.div`
//   background-color: black;
//   width: 180px;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Icon = styled.i`
//   color: white;
//   font-size: 24px;
//   margin: 10px;
// `;

// const IconBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 4rem;
//   width: 4rem;
//   background-color: #222222;
//   margin-bottom: -15px;
//   cursor: pointer;
//   &:hover {
//     color: #006fee;
//     background-color: #333333;
// `;

// const Sider = () => {
//   //const nevigate = useNavigate();
//   return (
//     <Sidebar>
//       <Icon>
//         <IconBox>
//           <AudioOutlined />
//         </IconBox>
//       </Icon>
//       <Icon>
//         <IconBox>
//           <FontSizeOutlined />
//         </IconBox>
//       </Icon>
//       <Icon>
//         <IconBox>
//           <PaperClipOutlined />
//         </IconBox>
//       </Icon>
//     </Sidebar>
//   );
// };

// export default Sider;
