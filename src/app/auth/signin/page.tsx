import dynamic from "next/dynamic";
import { Suspense } from "react";

// 동적으로 컴포넌트를 가져옵니다. SSR을 비활성화합니다.
// const GalleryContent = dynamic(() => import("./modules/GalleryPage"), {
//   suspense: true,
//   ssr: false,
// });

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>test</Suspense>;
}
