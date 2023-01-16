import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import {BsFillPiggyBankFill} from 'react-icons/bs'
import "react-pro-sidebar/dist/css/styles.css";
import imageBg from '../../assets/bg2.jpg'
import { Link } from "react-router-dom";
const SideBar = (props) => {
  const {image, collapsed, rtl, toggled, handleToggleSidebar} = props
  return (
    <div>
      <ProSidebar
        image={imageBg}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <BsFillPiggyBankFill size={'2em'} color={''} /> Doing-Quizz
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={
                <span className="badge red">
                  New
                </span>
              }
            >
            Dashboard
            <Link to="/admin"/>
            </MenuItem>
            <MenuItem icon={<FaGem />}>
              {" "}
              Người dùng
              <Link to="/admin/manage-user"/>
            </MenuItem>
            
          </Menu>
          
          <Menu iconShape="circle">
          </Menu>
        </SidebarContent>

        {/* <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                View
              </span>
            </a>
          </div>
        </SidebarFooter> */}
      </ProSidebar>
    </div>
  );
};

export default SideBar;
