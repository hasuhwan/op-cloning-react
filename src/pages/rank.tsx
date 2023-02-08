import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { listArr } from "../staticItems";
export function Rank() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white w-[1000px]">
      <div className="h-[70px] w-full flex items-center px-2">
        <span className=" font-bold text-2xl">랭킹</span>
      </div>
      <div className="h-[50px] w-full flex items-center px-2">
        <ul className="flex  h-full items-center justify-center ">
          {listArr.map<JSX.Element>((el, idx) => {
            return (
              <div
                className="mr-5 hover:cursor-pointer flex flex-col relative h-full items-center justify-center"
                onClick={() => {
                  setActive(idx);
                  navigate(el.link);
                }}
                key={idx}
              >
                <li
                  className={`${
                    active === idx ? "text-mainColor bg-#ECF2FF" : "text-black"
                  }`}
                >
                  {el.name}
                </li>
                {active === idx ? (
                  <div className="bg-white w-full h-[3px] absolute bottom-0"></div>
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
