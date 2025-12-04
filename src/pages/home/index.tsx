// pages/index.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

interface NewsItem {
  id: string;
  name: string;
  avatarLink: string;
}

interface NewsGroup {
  groupName: string;
  detail: NewsItem[];
}

interface HomeProps {
  data: NewsGroup[];
}

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container">
      {/* BANNER */}
      <div className="banner-container">
        <div className="banner-custom">
          <div className="banner">
            <Image
              src="/hinh0.png"
              alt="hinh0"
              className="image-full"
              width={500}
              height={300}
              priority // chỉ ưu tiên 1 hình lớn nhất
            />
          </div>
        </div>

        <div className="banner-item">
          <div className="banner">
            <Image
              src="/hinh1.png"
              alt="hinh1"
              className="image-full"
              width={500}
              height={300}
            />
          </div>
          <div className="banner">
            <Image
              src="/hinh2.png"
              alt="hinh2"
              className="image-full"
              width={500}
              height={300}
            />
          </div>
          <div className="banner">
            <Image
              src="/hinh3.png"
              alt="hinh3"
              className="image-full"
              width={500}
              height={300}
            />
          </div>
          <div className="banner">
            <Image
              src="/hinh4.png"
              alt="hinh4"
              className="image-full"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* LIST TIN */}
      <div className="news-container">
        {data.map((group, index) => (
          <React.Fragment key={group.groupName || index}>
            <h1>{group.groupName}</h1>
            <div className="news-list">
              {group.detail.map((item) => (
                <div className="news-item" key={item.id}>
                  <Image
                    src={item.avatarLink}
                    alt={item.name}
                    className="image-full"
                    width={300}
                    height={300}
                    // Nếu bạn cấu hình domain ảnh trong next.config, có thể bỏ `unoptimized`
                    unoptimized
                  />
                  <p className="new-title">{item.name}</p>

                  {/* Nếu chi tiết đang ở /[slug] thì sửa lại href thành slug phù hợp */}
                  <Link className="read-more" href={`/${item.id}`}>
                    Read more...
                  </Link>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ✅ Dùng SSG + ISR: cache HTML + data, tự rebuild sau X giây
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const res = await fetch(`${process.env.APP_API2}/News/news-list`);
    const json = await res.json();

    return {
      props: {
        data: (json.data || []) as NewsGroup[],
      },
      // ISR: cache trang chủ trong 120s, sau đó lần truy cập tiếp theo sẽ regenerate
      revalidate: 120, // 2 phút – chỉnh 60/300 tuỳ mức độ realtime bạn muốn
    };
  } catch (error) {
    console.error("Error fetching home data:", error);

    return {
      props: {
        data: [],
      },
      revalidate: 60, // vẫn cache 1 chút, tránh lỗi là rebuild liên tục
    };
  }
};
