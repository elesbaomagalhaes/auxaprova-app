import Image from "next/image"
export default function LoginHeader(){

    return(
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium text-primary">
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-primary-foreground">
            <Image
            aria-hidden
            src="/icon-auxsolar.png"
            alt="aux solar"
            width={27}
            height={27}
            />
            </div>
            aux solar
          </a>
        </div>
    )

}