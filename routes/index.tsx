import { Head } from "$fresh/runtime.ts";
import Socials from "../components/Socials.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>_official_</title>
      </Head>
      <div class="w-screen h-screen bg-[#e6e1df]">
        <div class="h-full w-full flex justify-center items-center p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-10 max-w-5xl">
            <div class="w-full bg-[#919094] shadow-lg rounded-2xl overflow-hidden sm:max-w-md">
              <img src="/assets/profile.webp" class="self-center"></img>
            </div>
            <div class="grid auto-rows-min gap-10 content-center h-full justify-center items-center text-center">
              <p class="font-mono text-sm text-[#000000b3] font-light">
                Frontend Developer
              </p>
              <hr class="border-[#bfbbb9] border-1 w-[3rem] justify-self-center" />
              <p class="font-['Fraunces'] text-6xl text-[#000000b3] font-semibold">
                David Taylor
              </p>
              <p class="font-mono text-xl text-[#0000007D] font-extralight">
                I have a strong commitment to excellence that drives me to write
                high-quality software.
              </p>
              <button class="rounded-md bg-[#315c80] p-2 w-60 justify-self-center">
                <span class="font-['Fraunces'] text-lg text-white">
                  Get in Touch
                </span>
              </button>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
