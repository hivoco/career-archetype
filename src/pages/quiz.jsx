import CardStack from "@/components/common/CardStack";
import LottieAnimation from "@/components/common/LottieAnimation";
import ProgressBar from "@/components/common/ProgressBar";
import QuizComponent from "@/components/common/QuizComponent";
import TinderCardStack from "@/components/common/TinderCardStack";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [step, setStep] = useState(1); // Current step (starts at 0)
  const router =useRouter()
  useEffect(() => {
    if (step !== 12) return;
      const timer = setTimeout(() => {
        if (step === 12) {
          router.push("/result");
        }
      }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [step,router]);

  return (
    <div className="h-svh bg-dark-brown relative pt-16 w-full ">
      {/* Overlay and Blur */}
      {step === 12 && (
        <div
          className="absolute inset-0 bg-black/60 z-10 backdrop-blur-sm"
        ></div>
      )}

      {/* lottie animation when quiz ends  */}
      {step === 12 && <LottieAnimation />}

      {/* main quiz ui */}
      <div className="flex flex-col gap-y-9 w-full h-full">
        <section className="flex flex-col gap-y-9 w-full">
          <div className="flex w-full justify-center items-center text-white relative">
            <ArrowLeft className="absolute left-0" size={20} />
            <p className=" text-base font-bold text-left self-center ">
              {step > 11 ? 11 : step} of 11
            </p>
          </div>


          <ProgressBar step={step} setStep={setStep} />
        </section>


         {/* quiz question cards stacked  */}
        <CardStack step={step} setStep={setStep} />
      </div>

      <Image
        className="fixed bottom-0 left-1/2 -translate-x-1/2"
        priority={true}
        src={"/images/quiz-bottom-part.png"}
        height={84}
        width={335}
        alt="thunder, stars image"
      />
    </div>
  );
};

export default Quiz;
