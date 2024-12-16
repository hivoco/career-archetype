import InstagramStoryPlayer from "@/components/common/InstagramStoryPlayer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const KnowMore = () => {
  const [animationNumber, setAnimationNumber] = useState(0);
  const router =useRouter()
  
  useEffect(() => {
    if (animationNumber === 1) {
      router.push("/signup");
    }
  }, [animationNumber]);


  return (
    <div className="h-full">
      <InstagramStoryPlayer setAnimationNumber={setAnimationNumber} />
    </div>
  );
};

export default KnowMore;
