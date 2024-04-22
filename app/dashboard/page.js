import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/dashboard/invoice"}>HEY</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
