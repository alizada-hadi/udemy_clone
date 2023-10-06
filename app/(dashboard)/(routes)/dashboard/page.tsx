import React from "react";

import { UserButton } from "@clerk/nextjs";

const page = () => {
  return <UserButton afterSignOutUrl="/" />;
};

export default page;
