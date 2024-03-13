import Image from "next/image";
import santafe1 from "@/app/resources/spc/2.jpg"
import santafe2 from "@/app/resources/spc/8142867157_fa4052ac8a_b.jpg"
import santafe3 from "@/app/resources/spc/TaosPueblo01.jpg"
import SPC from "@/app/resources/spc_logo_gray.png";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";
import React from "react";

export function HomePageLanding() {
    return(
        <div className={"relative mb-10"}>
            <Image className={"absolute -z-10 w-full"} placeholder={"blur"} src={SPC} alt={"Santafe Project Center"}></Image>

            <div className={"-z-11 sm:mt-10 lg:mt-20 text-white grid xl:grid-cols-2 gap-0 bg-no-repeat mx-5 lg:mx-20 gap-y-10 lg:gap-y-20"}>
                <div className={"grid place-content-start"}>
                    <div className={"text-2xl sm:text-3xl font-bold"}>
                        <p className={"my-10"}>
                            At Santa Fe Project Center, We aim to concretely contribute to a sustainable future for Santa Fe and its inhabitants.
                        </p>
                        <HomePageLink href={"/program"}>
                            <h1 className={"text-base font-bold"}>Future WPI Students</h1>
                        </HomePageLink>
                    </div>
                </div>

                <div className={"grid border-4 place-content-center"}>
                    <Image src={santafe1} alt={"an image inspired by SantaFe"}></Image>
                </div>
                <div className={"grid border-4 place-content-center"}>
                    <Image src={santafe2} alt={"an image inspired by SantaFe"}></Image>
                </div>
                <div className = {"flex-col md:flex-row flex"}>
                    <div className = {"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <h1 className={""}>
                                    OUR
                                </h1>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-48 border border-white"} ></div>
                                </div>
                            </div>
                        </div>
                        <h1 className={"ml-20 md:mr-32"}>
                            HISTORY
                        </h1>
                    </div>
                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className = {"my-5"}>
                                The Santa Fe Project Center was created in 2009. Despite its small size, Santa Fe is a sophisticated, cosmopolitan and eclectic place where exciting opportunities for projects exist with Another, less-known feature of the Santa Fe area is the presence of some of the top scientists in the world, due to the proximity of the Los Alamos and Sandia National Laboratories and the prestigious Santa Fe Institute (SFI). </p>
                        </div>
                    </div>
                </div>
                <div className = {"flex-col md:flex-row flex"}>

                    <div className={"flex flex-col"}>
                        <div className={""}>
                            <p className = {"my-5"}>
                                Since its founding, the Santa Fe Project Center center has collaborated with a variety of institutions, non-profits, government agencies and native american communities to address a number of issues impacting the lives of the citizens of Santa Fe and all of New Mexico.
                                The projects with native communities often entail the application of science and technology in the context of traditional indigenous customs.
                            </p>
                            <HomePageLink href={"/projects"}>
                                <h1 className={"text-base font-bold"}>See All</h1>
                            </HomePageLink>
                        </div>
                    </div>
                    <div className = {"my-5 text-4xl font-bold mr-5  basis-2/12"}>
                        <div className={"grid grid-cols-2 lg:justify-items-center mb-2"}>
                            <div className={"col-span-2 flex-row flex"}>
                                <div className={"mx-2 place-items-center grid"}>
                                    <div className={"h-0 w-48 border border-white"} ></div>
                                </div>
                                <h1 className={""}>
                                    STUDENTS
                                </h1>
                            </div>
                        </div>
                        <h1 className={"ml-20 md:mr-32"}>
                            PROJECTS
                        </h1>
                    </div>
                </div>
                <div className={"grid border-4 place-content-center resize"}>
                    <Image src={santafe3} alt={"an image inspired by SantaFe"}></Image>
                </div>

                <div className={"collapse md:invisible"}/>
            </div>
        </div>
    )
}