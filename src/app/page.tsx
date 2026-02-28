"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WEDDING_INFO = {
  groomName: "야마다 쇼",
  brideName: "이지혜",
  date: "2026년 04월 29일 수요일 오후 1시",
  venue: "Allamanda Chapel",
  address: "926-25 Ueno Shinzato, Miyakojima-shi, Okinawa 906-0202, Japan",
  accountInfo: [
    {
      bank: "우체국",
      account: "01334202338219",
      name: "신부측 이진석",
    },
    {
      bank: "농협은행",
      account: "10003052108085",
      name: "신부측 김향숙",
    },
    {
      bank: "우리은행",
      account: "1002853333181",
      name: "신부측 이지혜",
    },
  ],
};
const MUSIC_URL = "/audio/background.mp3";
export default function Home() {
  const { groomName, brideName, date, venue, address, accountInfo } =
    WEDDING_INFO;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
  }, []);

  const handleToggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        audioRef.current.muted = false; // 소리 켜기
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.warn("재생 실패", e);
      }
    }
  };

  return (
    <div className="min-h-screen px-4 py-4">
      <div className="fixed top-4 right-4 z-50">
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 animate-melody"></span>
              <span className="w-1 animate-melody delay-100"></span>
              <span className="w-1 animate-melody delay-200"></span>
            </div>
          )}

          <button
            onClick={handleToggle}
            className="rounded-full bg-white/60 p-2 text-xs text-zinc-400 shadow-sm w-8 h-8"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <audio ref={audioRef} src={MUSIC_URL} />
        </div>
      </div>

      <main className="mx-auto w-full max-w-xl bg-white/95 px-6 py-10">
        {/* 상단 타이틀 */}
        <section className="text-center space-y-2 mb-4">
          <h2 className="text-sm tracking-[0.3em] text-rose-300 uppercase">
            Wedding Invitation
          </h2>
        </section>
        <section className="mb-10 text-center">
          <div className="mb-3 text-xs text-zinc-400 tracking-[0.25em] uppercase">
            우리 결혼합니다
          </div>
          <div className="flex items-center justify-center gap-2 text-xl text-gray-800">
            <span>{groomName}</span>
            <span
              className="inline-block"
              style={{ transform: "translateY(5px)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,6 c-0.7,-3 -5.5,-4 -5.5,-1 c0,3 4,6 5.5,7 c1.5,-1 5.5,-4 5.5,-7 c0,-3 -4.8,-2 -5.5,1"
                  fill="#eca6c5"
                  className="animate-pulse"
                />
              </svg>
            </span>
            <span>{brideName}</span>
          </div>

          {/* main visual image */}
          <div className="relative mb-6 mt-10 w-full max-w-xs mx-auto overflow-hidden aspect-[3/4]">
            <Image
              src="/images/main_visual.jpg"
              alt="main visual"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
          <p className="mt-6 px-4 py-4 text-sm leading-relaxed text-zinc-700">
            먼 곳에서 예식을 올리게 되어 직접 모시지 못함을 너그럽게 양해
            부탁드립니다.
            <br /> 참석이 어려우신 만큼 보내주시는 축하의 마음은 더욱 감사히
            간직하겠습니다. <br /> 소중한 마음 깊이 감사드립니다.
          </p>
        </section>
        {/* 날짜 & 장소 - wedding-project 초대장 박스 느낌 */}
        <section className="mb-10">
          <div className="relative mx-auto max-w-md">
            {/* 모서리 장식 */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-rose-200/80" />
              <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-rose-200/80" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-rose-200/80" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-rose-200/80" />
            </div>

            <div className="bg-rose-50/60 px-8 py-6 text-center">
              <p className="mb-1 text-sm text-gray-600">{date}</p>

              <div className="my-5 flex justify-center">
                <div className="h-px w-12 bg-rose-200" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700">{venue}</p>
                <p className="text-xs leading-relaxed text-gray-500">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* 계좌 안내 + 복사 가능 */}
        <section className="space-y-3 border border-dashed border-rose-100 bg-rose-50/40 px-4 py-4 text-sm text-zinc-700">
          <p className="text-[11px] font-medium tracking-[0.25em] text-rose-300 uppercase">
            감사의 마음
          </p>
          <p className="text-xs leading-relaxed text-zinc-500">
            축하의 마음을 전해주시고자 하는 분들을 위해 아래에 마음 전하실 곳을
            함께 안내드립니다. <br /> 예식 후 작은 정성으로 인사드리겠습니다.
          </p>
          {accountInfo.map((info) => (
            <div
              key={info.account}
              className="flex items-center justify-between gap-2 bg-white/80 px-3 py-2 text-xs text-zinc-800"
            >
              <span className="truncate">
                {info.bank} {info.account}
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(info.account)}
                className="shrink-0 border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500 transition hover:bg-rose-100 active:scale-95"
              >
                복사
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
