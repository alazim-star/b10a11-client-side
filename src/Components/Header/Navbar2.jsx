import React from "react";
import Theme from "./Theme";
import { useTranslation } from "react-i18next";
import "../../i18n"; // Ensure i18n is imported so it's initialized

const Navbar2 = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="bg-[#af9556]">
      {/* Contact and Address */}
      <div className="flex flex-row lg:gap-4 items-center mx-auto container lg:ml-96 ">
        <p className="text-sm">
          {t("call_now")}: <span className="font-bold">+1900 849 867</span>
        </p>
        <p className="text-sm">{t("address")}</p>

        {/* Language Selector */}
        <div className="flex items-center gap-4">
          <p className="text-sm">LNG</p>
          <select
            className="bg-[#af9556] h-10 border border-[#af9556] px-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#af9556]"
            aria-label="Language Selector"
            onChange={changeLanguage}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
