import LinkButton from "@/components/common/LinkButton";
import { ArrowRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Signup() {

  const [email,setEmail]=useState(null)
  const [name,setName]=useState(null)

  return (
    <div className="flex justify-center items-center h-svh bg-dark-brown py-10">
      <div className=" text-white px-8 h-full flex flex-col gap-y-10">
        <section className="flex flex-col gap-y-9">
          <div className="cursor-pointer">
            <MoveLeft size={20} />
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/quiz.png"
              priority={true}
              width={140}
              height={148}
              alt="Picture of icon"
            />

            <h2 className="  text-xl font-bold  text-center tracking-wide">
              To Get Your Report
            </h2>
          </div>
        </section>

        <form className="flex flex-col flex-1 justify-between">
          <div className="">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              minLength="2"
              placeholder="Name"
              className="w-full  text-xs text-left bg-transparent p-3 mb-5 rounded-md border border-off-white outline-none "
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Id"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full  text-xs text-left bg-transparent p-3  rounded-md border border-off-white outline-none "
            />
          </div>

          <Link
            href={"thankYouScreen"}
            className="flex w-full items-center justify-center  h-11 px-2 py-3 gap-2 bg-[#FFF3E140] rounded-[40px] text-white font-semibold text-sm"
          >
            <span>SUBMIT</span>
            <ArrowRight size={20} />
          </Link>

          {/* <LinkButton href={"thankyouscreen"} title={'SUBMIT'} className={'uppercase w-full h-11 bg-[#FFF3E140]'} /> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
