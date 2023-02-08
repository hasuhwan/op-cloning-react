import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface NavValue {
  name: string;
  link: string;
}

export default function TopNav() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const staticNavArray: NavValue[] = [
    { name: "홈", link: "/" },
    { name: "챔피언 분석", link: "/champions" },
    { name: "게임 모드", link: "/modes/aram" },
    { name: "통계", link: "/statistics/champions" },
    { name: "랭킹", link: "/leaderboards/tier" },
    { name: "프로관전", link: "/spectate/live/pro-gamer" },
    { name: "멀티서치", link: "/multisearch" },
    { name: "커뮤니티", link: "/community" },
  ];

  return (
    <div className="w-full justify-center bg-mainColor h-[50px] relative flex px-3 ">
      <img
        src="/opgglogo.svg"
        alt="logo"
        className="w-[70px] h-full absolute left-3"
      />
      <ul className="flex  h-full items-center justify-center ">
        {staticNavArray.map<JSX.Element>((el, idx) => {
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
                  active === idx ? "text-white" : "text-[#B3CDFF]"
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
  );
}
