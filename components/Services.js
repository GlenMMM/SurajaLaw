import React from "react";

function Services({ t }) {
  return (
    <div
      className="flex justify-center pb-[70px] xl:pb-[225px] px-8 md:px-0"
      id="services"
    >
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px]">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-semibold">
            {t("common:servicesTtl")}
          </h2>
        </div>
        <h3 className="text-[24px] xl:text-[36px] py-[19px]">
          {t("common:servicesTag")}
          <span className="text-subTwo">{t("common:servicesTag2")}</span>
        </h3>
        <div className="flex flex-col xl:flex-row items-center gap-4  justify-between w-full xl:pt-[120px]">
          <div className="relative p-4 shadow-xl w-[320px] h-[320px] bg-white flex items-center justify-center">
            <div className="hidden xl:flex absolute top-[40px] right-[20px] border-2 border-boxBorder w-[320px] h-[320px]" />
            <ul className="list-['-'] flex flex-col gap-[8px] text-[16px] md:text-[22px] p-[20px] w-full">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2913 9.25H7.70801C5.1537 9.25 3.08301 11.3207 3.08301 13.875V18.0697L13.624 21.5833H23.3753L33.9163 18.0697V13.875C33.9163 11.3207 31.8457 9.25 29.2913 9.25Z"
                  fill="#DFEBEA"
                />
                <path
                  d="M15.4163 9.25V7.70833H21.583V9.25H24.6663V7.70833C24.6644 6.00626 23.2851 4.62694 21.583 4.625H15.4163C13.7143 4.62694 12.335 6.00626 12.333 7.70833V9.25H15.4163ZM13.624 21.5833L3.08301 18.0696V27.75C3.0858 30.3032 5.15484 32.3722 7.70801 32.375H29.2913C31.8445 32.3722 33.9136 30.3032 33.9163 27.75V18.0696L23.3753 21.5833H13.624Z"
                  fill="#294745"
                />
              </svg>

              <li>{t("common:services1")}</li>
              <li>{t("common:services2")}</li>
              <li>{t("common:services3")}</li>
              <li>{t("common:services4")}</li>
            </ul>
          </div>
          <div className="relative p-4 shadow-xl w-[320px] h-[320px] bg-white flex items-center justify-center">
            <div className="hidden xl:flex absolute bottom-[40px] left-[20px] border-2 border-boxBorder w-[320px] h-[320px]" />
            <ul className="list-['-'] flex flex-col gap-[8px] text-[16px] md:text-[22px] p-[20px] w-full">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7913 16.958C9.8803 16.958 8.97817 16.7786 8.13648 16.4299C7.29478 16.0813 6.52999 15.5703 5.88579 14.9261C5.24158 14.2819 4.73057 13.5171 4.38193 12.6754C4.03328 11.8337 3.85384 10.9316 3.85384 10.0205C3.85384 9.10946 4.03328 8.20734 4.38193 7.36564C4.73057 6.52395 5.24158 5.75916 5.88579 5.11495C6.52999 4.47075 7.29478 3.95974 8.13648 3.61109C8.97817 3.26245 9.8803 3.08301 10.7913 3.08301C12.6313 3.08301 14.3959 3.81392 15.6969 5.11495C16.9979 6.41599 17.7288 8.18057 17.7288 10.0205C17.7288 11.8604 16.9979 13.625 15.6969 14.9261C14.3959 16.2271 12.6313 16.958 10.7913 16.958ZM26.9788 23.1247C25.3433 23.1247 23.7748 22.475 22.6184 21.3185C21.4619 20.162 20.8122 18.5935 20.8122 16.958C20.8122 15.3225 21.4619 13.754 22.6184 12.5975C23.7748 11.441 25.3433 10.7913 26.9788 10.7913C28.6143 10.7913 30.1829 11.441 31.3393 12.5975C32.4958 13.754 33.1455 15.3225 33.1455 16.958C33.1455 18.5935 32.4958 20.162 31.3393 21.3185C30.1829 22.475 28.6143 23.1247 26.9788 23.1247ZM26.9788 24.6663C28.8188 24.6663 30.5834 25.3973 31.8844 26.6983C33.1854 27.9993 33.9163 29.7639 33.9163 31.6038V32.3747H20.0413V31.6038C20.0413 29.7639 20.7723 27.9993 22.0733 26.6983C23.3743 25.3973 25.1389 24.6663 26.9788 24.6663ZM10.7913 18.4997C11.8036 18.4997 12.806 18.6991 13.7412 19.0864C14.6764 19.4738 15.5262 20.0416 16.242 20.7574C16.9577 21.4732 17.5255 22.3229 17.9129 23.2582C18.3003 24.1934 18.4997 25.1957 18.4997 26.208V32.3747H3.08301V26.208C3.08301 24.1636 3.89513 22.203 5.34073 20.7574C6.78632 19.3118 8.74696 18.4997 10.7913 18.4997Z"
                  fill="#294745"
                />
              </svg>

              <li>{t("common:services5")}</li>
              <li>{t("common:services6")}</li>
              <li>{t("common:services7")}</li>
              <li>{t("common:services8")}</li>
            </ul>
          </div>
          <div className="relative p-4 shadow-xl w-[320px] h-[320px] bg-white flex items-center justify-center">
            <div className="hidden xl:flex absolute top-[40px] left-[20px] border-2 border-boxBorder w-[320px] h-[320px]" />
            <ul className="list-['-'] flex flex-col gap-[8px] text-[16px] md:text-[22px] p-[20px] w-full">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.208 29.2917H29.2913V16.9583H20.0413V29.2917H23.1247V20.0417H26.208V29.2917ZM4.62467 29.2917V6.16667C4.62467 5.75779 4.7871 5.36566 5.07622 5.07654C5.36534 4.78743 5.75747 4.625 6.16634 4.625H27.7497C28.1586 4.625 28.5507 4.78743 28.8398 5.07654C29.1289 5.36566 29.2913 5.75779 29.2913 6.16667V13.875H32.3747V29.2917H33.9163V32.375H3.08301V29.2917H4.62467ZM10.7913 16.9583V20.0417H13.8747V16.9583H10.7913ZM10.7913 23.125V26.2083H13.8747V23.125H10.7913ZM10.7913 10.7917V13.875H13.8747V10.7917H10.7913Z"
                  fill="#294745"
                />
              </svg>

              <li>{t("common:services9")}</li>
              <li>{t("common:services10")}</li>
              <li>{t("common:services11")}</li>
              <li>{t("common:services12")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
