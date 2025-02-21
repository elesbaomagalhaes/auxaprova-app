import LoginFooter from "@/components/LoginFooter";
import { LoginForm } from "@/components/LoginForm";
import LoginHeader from "@/components/LoginHeader";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-4">
          <LoginHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
          <LoginFooter />
      </div>
  <div className="relative hidden bg-muted lg:block">
      <div className="z-40 flex items-center justify-center inset-0 absolute h-full">
        <h1 className="text-6xl text-white font-bold text-center shadow-gray-800">
          Aproveite seu tempo precioso, entre para fazer a diferença.
          </h1>
      </div>
      <div className="z-0 object-cover">
        <img
          src="/login/bg-login.JPG"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
  </div> 

    </div>
    </main>
  )
}
