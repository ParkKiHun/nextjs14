import "styles/global.css";
import Navigation from "components/navigation";
import { Metadata } from "next";

/**
 * 메타데이터 전체 페이지 템플릿
 * 다른 페이지는 matedate의 title를 추가(%s)
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
