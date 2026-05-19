import { useState } from "react";

const CONTENT = {
  zh: {
    greeting: "Hi wassup~ 欢迎来到我的个人网站",
    hint: "点击任意位置进入网站",
  },
  en: {
    greeting: "Hey, wassup ~ glad you're visiting my personal website!",
    hint: "Click anywhere to enter",
  },
};

function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  const handleClick = () => {
    window.location.href = "/old-index.html";
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#f0f0ee] cursor-pointer"
      onClick={handleClick}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />

      {/* Foreground */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none pb-16 sm:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
        {/* Language toggle - top */}
        <div className="flex justify-center pt-6 sm:pt-8">
          <div className="flex gap-2 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLang("zh");
              }}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                lang === "zh"
                  ? "bg-gray-900 text-white"
                  : "bg-[#EDEDED] text-gray-600 hover:bg-gray-200"
              }`}
            >
              中文
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLang("en");
              }}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                lang === "en"
                  ? "bg-gray-900 text-white"
                  : "bg-[#EDEDED] text-gray-600 hover:bg-gray-200"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Greeting - bottom left */}
        <div className="flex-1 flex items-end">
          <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight max-w-xs">
            {CONTENT[lang].greeting}
          </h1>
        </div>

        {/* Blinking entry hint - centered below */}
        <div className="flex justify-center mt-6">
          <span className="text-[15px] text-gray-600 font-semibold animate-blink">
            {CONTENT[lang].hint}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
