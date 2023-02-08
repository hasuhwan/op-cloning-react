import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { regionArray } from "../staticItems";
import type { regionValue } from "../staticItems";
function Home() {
  const [value, setValue] = useState("");
  const [region, setRegion] = useState<regionValue>({
    name: regionArray[0].name,
    url: regionArray[0].url,
  });
  const [isDropDown, setIsDropDown] = useState(false);
  const onDropDownHandle = (): void => {
    setIsDropDown(!isDropDown);
  };
  const onSubmitHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(value);
    const response = await axios
      .get(
        `https://${region.url}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${process.env.REACT_APP_RIOT_KEY}`
      )
      .then((data) => data.data);
    console.log(response);
  };
  return (
    <div className="w-full flex flex-col items-center h-screen bg-mainColor pt-20">
      <img
        src="20230117085602.373024fa48a847da87c6eadcadec5db9.webp"
        alt="logo"
        className="w-1/5 mb-10"
      />
      <form className="w-1/3 bg-white rounded-full h-[60px] flex items-center px-2 ">
        <div className="w-[20%] h-full flex flex-col justify-center pl-5  relative ">
          <span className="text-[10px] font-semibold">Region</span>
          <div
            className="flex items-center w-full justify-between hover:cursor-pointer"
            onClick={() => {
              onDropDownHandle();
            }}
          >
            <span className="text-[14px] text-[#9AA4AF]">{region.name}</span>
            <IoMdArrowDropdown
              className={`${
                isDropDown === true ? "rotate-180" : null
              } text-[#9AA4AF] text-[20px]`}
            />
          </div>
          {isDropDown === true ? (
            <ul className="absolute top-[60px] bg-white w-full rounded-md">
              {regionArray.map((el, idx) => {
                return (
                  <li
                    key={idx}
                    className={`text-[14px] h-[30px] text-[#9AA4AF] flex items-center px-1 hover:bg-[#e4e5e7] hover:cursor-pointer ${
                      idx === regionArray.length - 1 ? null : "border-b"
                    }`}
                    onClick={() => {
                      setIsDropDown(false);
                      setRegion({ name: el.name, url: el.url });
                    }}
                  >
                    {el.name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="w-[1px] h-1/3 bg-[#e4e5e7]"></div>
        <div className="w-[70%] h-full flex flex-col justify-center px-3">
          <label htmlFor="searchInput" className="text-[10px] font-semibold">
            Search
          </label>
          <input
            id="searchInput"
            className="text-[14px] focus:outline-none"
            placeholder="소환사명, 소환사명, ..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button
          className="w-[10%] h-full text-mainColor font-bold text-[30px] flex items-center"
          onClick={(e) => {
            onSubmitHandle(e);
          }}
        >
          .GG
        </button>
      </form>
    </div>
  );
}

export default Home;
