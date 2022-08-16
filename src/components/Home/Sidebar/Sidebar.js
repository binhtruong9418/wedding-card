import React from "react";
import styled from "styled-components";
import { Avatar, Button, Typography } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import Category from "./Category";

const WrappedStyled = styled.div`
  background-color: #F7ECDE;
  border-radius: 15px;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

export default function Sidebar() {
  return (
    <WrappedStyled>
      <div className="d-flex justify-content-between align-items-center px-2 py-2 border-bottom ">
        <div className="d-flex align-items-center">
          <Avatar src={null} size="small">
            AAAA
          </Avatar>
          <Typography.Text className="fs-6 fw-bold ms-1">
            Trương Đức Bình
          </Typography.Text>
        </div>
        <Button shape="round" ghost className="text-dark" onClick={() => signOut(auth)}>
          Đăng Xuất
        </Button>
      </div>
      <Category />
    </WrappedStyled>
  );
}
