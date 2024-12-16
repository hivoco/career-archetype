import Lottie from "lottie-react";
import animationData from "@/assets/animation.json";

const LottieAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center h-28 w-4/5 absolute z-50 top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
      <Lottie 
      className="h-64"
      animationData={animationData.animation} loop={true} />

      <p className="font-medium text-base text-left text-white -mt-20">Processing Results</p>
    </div>
  );
};

export default LottieAnimation;
