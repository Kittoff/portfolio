/* eslint-disable react/no-unescaped-entities */
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Christophe LOZANO</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              laboriosam ab architecto quaerat molestias!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2
              "
              >
                <span>Download CV</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex  gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
