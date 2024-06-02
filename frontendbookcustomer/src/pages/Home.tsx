import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#f1f5f9] py-20">
        <div className="ml-auto mr-auto flex w-[1170px] justify-between  ">
          <section className="flex w-[470px] flex-col justify-center">
            <h1 className="text-[58px]/[68px] font-bold text-[#171100]">
              Khám phá thế giới sách tại Group 12!
            </h1>
            <p className="mt-[22px] text-lg/[30px] font-normal">
              Tận hưởng hàng ngàn đầu sách đa dạng và chất lượng, từ văn học
              kinh điển đến truyện tranh hấp dẫn, mang đến cho bạn những trải
              nghiệm mua sắm tuyệt vời.
            </p>
            <button className="mt-9 h-16 w-48 rounded-full bg-[#4ade80] text-lg font-semibold text-white hover:bg-green-600">
              Mua ngay!
            </button>
          </section>
          <section className="relative w-[570px]">
            <div className="h-[685px] w-[470px] rounded-2xl bg-gray-400">
              <img
                src="https://res.cloudinary.com/dp4tp9gwa/image/upload/v1716791959/img-header_vmw20d.jpg"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="absolute right-0 top-[350px] flex w-[244px] flex-col gap-[14px] rounded-xl bg-white p-6 shadow-xl">
              <div className="flex items-center p-1">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-book"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                  </svg>
                </div>
                <div className="">
                  <p className="text-sm/[26px] text-gray-400">58 quyển sách</p>
                  <p className="text-lg/[30px] font-semibold">Thiếu Nhi</p>
                </div>
              </div>
              <div className="flex items-center p-1">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-book"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                  </svg>
                </div>
                <div className="">
                  <p className="text-sm/[26px] text-gray-400">30 quyển sách</p>
                  <p className="text-lg/[30px] font-semibold">Tiểu thuyết</p>
                </div>
              </div>
              <div className="flex items-center p-1">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-book"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                  </svg>
                </div>
                <div className="">
                  <p className="text-sm/[26px] text-gray-400">66 quyển sách</p>
                  <p className="text-lg/[30px] font-semibold">Truyện tranh</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
