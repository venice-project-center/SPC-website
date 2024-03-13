"use client";
import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import React, {Suspense, useState} from "react";
import NavLoading from "@/app/components/nav/NavLoading";
import {FilterByTagMainPage} from "@/app/components/nav/FilterByTagMainPage";

export default function Page() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const handleCheckboxChange = (checkedValues: string[]) => {
        setSelectedTags(checkedValues);
    };
    return(
        <div className={"flex-col xl:flex-row flex mx-10"}>
            <div className={"basis-2/6 back"}>
                <div className={""}>
                    <div className={"flex flex-col text-white mr-5"}>
                        <div className={""}>
                            <h1 className={"text-4xl font-bold mb-5"}>STUDENT PROJECTS</h1>
                        </div>
                        <div className={"static"}>
                            <p className={"my-4"}>
                                Since its founding in 2009, the Santa Fe Project Center center has collaborated with a variety of institutions, non-profits, government agencies and native american communities to address a number of issues impacting the lives of the citizens of Santa Fe and all of New Mexico.
                                The projects with native communities often entail the application of science and technology in the context of traditional indigenous customs.
                            </p>

                        </div>
                        <FilterByTagMainPage onCheckboxChange={handleCheckboxChange}/>
                    </div>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"IQP"} tagsToFilter={selectedTags}></NavListSearch>
            </div>
        </div>
    );
}