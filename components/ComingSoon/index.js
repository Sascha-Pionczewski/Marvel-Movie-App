import React from "react";
import Image from "next/image";

export default function ComingSoon() {
  const groot = "/pngegg.png";
  return (
    <>
      <Image src={groot} alt="groot" width={200} height={300} />
      <h3>comming soon...</h3>
    </>
  );
}
