import React, { FC } from "react";

// components
import ResetForm from "modules/session/components/ResetForm";

// ui
import SessionLayout from "ui/layouts/SessionLayout";

const Reset: FC = () => (
  <SessionLayout>
    <ResetForm />
  </SessionLayout>
);

export default Reset;
