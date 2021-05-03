import React, { FC } from "react";

// components
import RecoverForm from "modules/session/components/RecoverForm";

// ui
import SessionLayout from "ui/layouts/SessionLayout";

const Recover: FC = () => (
  <SessionLayout>
    <RecoverForm />
  </SessionLayout>
);

export default Recover;
