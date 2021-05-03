import React, { FC } from "react";

// ui components
import MainLayout from "ui/layouts/MainLayout";

// components
import Endpoints from "modules/dashboard/components/Endpoints";
import NewEndpointLink from "modules/dashboard/components/NewEndpointLink";

const Dashboard: FC = () => (
  <MainLayout>
    <Endpoints />
    <NewEndpointLink />
  </MainLayout>
);

export default Dashboard;
