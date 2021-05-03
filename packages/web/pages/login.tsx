import React, { FC } from "react";

// components
import LoginForm from "modules/session/components/LoginForm";

// ui
import SessionLayout from "ui/layouts/SessionLayout";

const Login: FC = () => (
  <SessionLayout>
    <LoginForm />
  </SessionLayout>
);

export default Login;
