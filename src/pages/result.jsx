import LinkButton from "@/components/common/LinkButton";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Result = () => {
  const [animationCounter, setAnimationCounter] = useState(0);
  const firstAnimationClass =
    animationCounter >= 1 ? "opacity-100" : "opacity-0";

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationCounter((prev) => {
        if (prev >= 3) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-off-white text-black h-svh px-5 w-full pt-10 flex flex-col gap-y-3 overflow-hidden">
      <div className="flex flex-col gap-y-8">
        <div className="flex gap-2 items-center">
          <ArrowLeft />
          <span className="text-xl font-medium text-left ">
            Your Career Archetype
          </span>
        </div>

        <h2
          className={`text-base font-bold text-left transition-opacity duration-1000 ${firstAnimationClass}`}
        >
          You are a blend of:
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex z-10  w-full relative">
          <div
            className={`pl-2 flex flex-1 items-end transition-transform duration-1000
           ${animationCounter >= 1 ? "translate-x-0" : "-translate-x-52"}
          `}
          >
            <p
              style={{
                transform: "rotate(180deg)",
                writingMode: "vertical-rl",
              }}
              className="font-Edo text-lg font-normal text-left uppercase text-white -mr-4"
            >
              EXPLORER
            </p>

            <img
              width={117}
              height={255}
              src="https://s3-alpha-sig.figma.com/img/cc67/3930/4a1cfbd86ee2a31801a50fe8f00ccd1d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kmd-sICZqnTDytnVQar8Ya2sMwWjVqwPi7srl8cGB1Jt9gXZefXzbStFS42KlaxFVRYSQLKuwSIdApsKEReWgESw1a~Xuo91dmwGTD7Dft2NLnQ-cZUrFCt0A-861m60YzzBr-CHQ4orAnoTQrfF0dGZUdOWrmZPLHgbTb9XhuIoFftz-lFUB87uxD1B3lqSaRQz0T-DlYQEaemk3ia0tIbGG58tMgP405FMbpYl6hWBCXfbr3k~1dCwHU0Ljh927-EMf~HzFF-5dsr1VdNIa0fEzvUaGALo5VzqnwvThV9EzNTSpy-D7R4OmrwQ0tr7A4EXmMQcGDAes9DoK~Y2xA__"
              className=""
              alt="Image"
            />
          </div>

          <Image
            className="self-end mb-8"
            width={66}
            height={67}
            src={"/images/icons/blend-icon.png"}
            alt="blend icon"
          />

          <div
            className={`pr-2  flex flex-1 items-end  transition-transform duration-1000
                       ${
                         animationCounter >= 2
                           ? "translate-x-0"
                           : "translate-x-48"
                       }
            `}
          >
            <img
              width={117}
              height={255}
              src="https://s3-alpha-sig.figma.com/img/cc67/3930/4a1cfbd86ee2a31801a50fe8f00ccd1d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kmd-sICZqnTDytnVQar8Ya2sMwWjVqwPi7srl8cGB1Jt9gXZefXzbStFS42KlaxFVRYSQLKuwSIdApsKEReWgESw1a~Xuo91dmwGTD7Dft2NLnQ-cZUrFCt0A-861m60YzzBr-CHQ4orAnoTQrfF0dGZUdOWrmZPLHgbTb9XhuIoFftz-lFUB87uxD1B3lqSaRQz0T-DlYQEaemk3ia0tIbGG58tMgP405FMbpYl6hWBCXfbr3k~1dCwHU0Ljh927-EMf~HzFF-5dsr1VdNIa0fEzvUaGALo5VzqnwvThV9EzNTSpy-D7R4OmrwQ0tr7A4EXmMQcGDAes9DoK~Y2xA__"
              alt="Image"
            />
            <p
              style={{
                writingMode: "vertical-rl",
              }}
              className="font-Edo text-lg font-normal text-left uppercase text-white -ml-4"
            >
              EXPLORER
            </p>
          </div>
        </div>

        <div
          className={`z-0 absolute h-64 w-full  -translate-x-1/2  top-20 left-1/2 rounded-3xl border-2 border-white transition-opacity ${firstAnimationClass}`}
          style={{
            transitionDuration: "1s", // Adjust the duration here
            background:
              animationCounter >= 1
                ? "linear-gradient(90deg, #F0B30E 0%, #7F87DA 100%)"
                : "none",
          }}
        >
          <p
            className={`absolute w-full  bottom-0 font-normal  text-sm text-white m-0 p-4
          
          transition-transform duration-1000
          ${animationCounter >= 3 ? "translate-y-0" : "translate-y-full"}
          `}
          >
            A unique combination, this allows you to have an informed and
            prepared approach your career, while keeping passion curiosity in
            the forefront
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 px-5 w-full">
        <h2
          className={`text-base font-bold text-left mb-10
          transition-opacity duration-1000
          ${animationCounter >= 3 ? "opacity-100" : "opacity-0"}
          `}
        >
          Where curiosity <br /> meets strategy, passion thrives.
        </h2>

        <LinkButton
          title={"Know More"}
          href={"/knowmore"}
          className={`transition-transform duration-1000  w-full
                    ${
                      animationCounter >= 3 ? "translate-y-0" : "translate-y-24"
                    }
                    `}
        />
      </div>
    </div>
  );
};

export default Result;
