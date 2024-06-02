import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#4ade80] pb-[28px] pt-[96px]">
      <div className="ml-auto mr-auto flex w-[1170px] ">
        <div className="w-[410px]">
          <h2 className="text-3xl font-bold text-white">GROUP 12</h2>
          <p className="mt-6 w-[267px] text-sm/[26px] text-white">
            Cần trợ giúp cho sự nghiệp mơ ước của bạn? Hãy tin tưởng chúng tôi.
            Với những cuốn sách chất lượng, việc học trở nên dễ dàng hơn rất
            nhiều.
          </p>
          <div className="mt-[22px] flex gap-[18px]">
            <a href="#">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a href="#">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
            <a href="#">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-white">Cửa hàng</h2>
          <p className=" mb-[30px] mt-4 h-[1px] w-32 bg-white"></p>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm/[26px] text-white">
              Thông tin cửa hàng
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Đặc trưng
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Tin mới nhất
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-white">Hỗ trợ</h2>
          <p className=" mb-[30px] mt-4 h-[1px] w-32 bg-white"></p>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm/[26px] text-white">
              Câu hỏi thường gặp
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Điều khoản và dịch vụ
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Liên hệ cửa hàng
            </a>
          </div>
        </div>
        <div className="max-w-[253px] flex-grow">
          <h2 className="text-lg font-semibold text-white">Địa chỉ</h2>
          <p className=" mb-[30px] mt-4 h-[1px] w-32 bg-white"></p>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm/[26px] text-white">
              Phường An Khánh, Quận Ninh Kiều, Cần Thơ.
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Email: group12@gmail.com
            </a>
            <a href="#" className="text-sm/[26px] text-white">
              Số điện thoại: 0123456789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
