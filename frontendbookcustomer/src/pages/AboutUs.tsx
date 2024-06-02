import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="ml-auto mr-auto mt-7 min-h-[70vh] w-[1170px]">
        <h1 className="text-3xl font-semibold">Bài làm web nhóm 12</h1>
        <h2 className="mt-5 text-lg">Tên thành viên nhóm:</h2>
        <p className="mt-3 text-base">Nguyễn Hoàng Phúc</p>
        <p className="mt-3 text-base">Nguyễn Minh Tân</p>
        <p className="mt-3 text-base">Nguyễn Hoàng Phi</p>
        <p className="mt-3 text-base">Nguyễn Chí Nhân</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
