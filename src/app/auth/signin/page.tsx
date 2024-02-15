"use client";

import useUserStore, { initUserStoreAndAuth } from "@/context/useUserStore";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import SignInBlock from "./modules/SignInBlock";

// 동적으로 컴포넌트를 가져옵니다. SSR을 비활성화합니다.
// const GalleryContent = dynamic(() => import("./modules/GalleryPage"), {
//   suspense: true,
//   ssr: false,
// });

export default function Page() {
  useEffect(() => {
    initUserStoreAndAuth();
  }, []);

  const { user, loadingUser } = useUserStore((state) => ({
    user: state.user,
    loadingUser: state.loadingUser,
  }));

  console.log(user, loadingUser);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      welcome to the page
      <SignInBlock />
    </Suspense>
  );
}
