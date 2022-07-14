import React from "react";
import { useForm } from "react-hook-form";

//require react-hook-form, cors, axios, nodemailer

function Contact({ t }) {
  const list = t("common:topicList");
  const newList = list.split(",");
  const [selectedTopic, setSelectedTopic] = React.useState(
    "Banking and Finance"
  );
  const handleChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  //sent email
  const axios = require("axios");
  const [sent, setSent] = React.useState(false);
  const toggle = () => {
    setSent(!sent);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    setSent(true);
    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

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
        <h3 className="text-[24px] xl:text-[48px] py-[19px] font-alta">
          {t("common:contactTag")}
          <span className="text-subTwo">{t("common:contactTag2")}</span>
        </h3>
        <form
          className="flex flex-col gap-2 items-center w-full"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-evenly w-full">
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
                  errors.name ? `ring-2 ring-red-500 focus:ring-red-500` : null
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
                  errors.email ? `ring-2 ring-red-500 focus:ring-red-500` : null
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

          {!sent ? (
            <button className="w-[160px] h-[50px] bg-main text-white mt-[40px]">
              {t("common:contactBtn")}
            </button>
          ) : (
            <div
              className="w-[160px] h-[50px] bg-main text-white mt-[40px] flex items-center justify-center cursor-pointer"
              onClick={toggle}
            >
              {t("common:successBtn")}
            </div>
          )}
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
    </div>
  );
}

export default Contact;
