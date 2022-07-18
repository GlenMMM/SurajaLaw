import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//require react-hook-form, cors, axios, nodemailer

function Contact({ t }) {
  const list = t("common:topicList");
  const newList = list.split("; ");

  //sent email v2
  const [contactDetail, setContactDetail] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received", res);
        if (res.status === 200) {
          toast(t("common:toastOk"));
        } else {
          toast(t("common:toastFail"));
        }
      })
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <div
      className="flex justify-center px-8 md:px-0 pb-[70px]  xl:pb-[225px]"
      id="contact"
    >
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] z-10">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-lato">
            {t("common:contactTtl")}
          </h2>
        </div>
        <h3 className="text-[24px] xl:text-[40px] py-[19px] font-alta pb-10">
          {t("common:contactTag")}
          <span className="text-subTwo">{t("common:contactTag2")}</span>
        </h3>
        <form
          className="flex flex-col gap-2 items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-10 justify-evenly w-full">
            <div className="flex flex-col xl:flex-row justify-between w-full gap-10 xl:gap-0">
              <div className="flex flex-col xl:w-[200px]">
                <label htmlFor="name">{t("common:contactName")}</label>
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "You must enter your name",
                    },
                  })}
                  className={`border-b border-subTwo bg-inherit outline-none p-2 ${
                    errors.name
                      ? `ring-2 ring-red-500 focus:ring-red-500`
                      : null
                  }`}
                ></input>
              </div>
              <div className="flex flex-col xl:w-[200px]">
                <label htmlFor="email">{t("common:contactEmail")}</label>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must enter your email",
                    },
                    minLength: {
                      value: 8,
                      message: "This is too short to be an email",
                    },
                    maxLength: {
                      value: 120,
                      message: "This is too long to be an email",
                    },
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                      message: "This is not a valid email",
                    },
                  })}
                  className={`border-b border-subTwo bg-inherit outline-none p-2 ${
                    errors.email
                      ? `ring-2 ring-red-500 focus:ring-red-500`
                      : null
                  }`}
                ></input>
              </div>
              <div className="flex flex-col xl:w-[200px]">
                <label htmlFor="phone">{t("common:contactPhone")}</label>
                <input
                  type="text"
                  {...register("phone")}
                  className="border-b border-subTwo bg-inherit outline-none p-2"
                ></input>
              </div>
              <div className="flex flex-col xl:w-[200px]">
                <label htmlFor="date">{t("common:contactDate")}</label>
                <input
                  type="date"
                  {...register("date")}
                  className="border-b border-subTwo bg-inherit outline-none p-2"
                ></input>
              </div>
              <div className="flex flex-col xl:w-[200px]">
                <label htmlFor="time">{t("common:contactTime")}</label>
                <input
                  type="text"
                  {...register("time")}
                  className="border-b border-subTwo bg-inherit outline-none p-2"
                  placeholder="17:00"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="topic">{t("common:contactTopic")}</label>
              <select
                {...register("topic")}
                className="bg-inherit p-2 border-b border-subTwo"
              >
                {newList.map((list, index) => (
                  <option key={index} value={list} className="bg-bgCol">
                    {list}
                  </option>
                ))}
              </select>
              <textarea
                {...register("msg")}
                placeholder={t("common:contactMsg")}
                className="p-2 outline-none border focus:border-subTwo mt-2 bg-inherit"
              ></textarea>
            </div>
          </div>

          <button className="w-[160px] h-[50px] bg-main text-white mt-[40px]">
            {t("common:contactBtn")}
          </button>
        </form>
        <div className="text-center w-full pt-10">
          <p>
            {t("common:contactAlt")}
            <a
              className="font-semibold"
              href="mailto:info@surajalaw.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@surajalaw.com
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
