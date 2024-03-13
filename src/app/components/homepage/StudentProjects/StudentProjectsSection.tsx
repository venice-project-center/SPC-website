import Link from "next/link";
import Image from "next/image";
import React from "react";
import {newSudentProjectData, StudentProjectCard} from "@/app/components/homepage/StudentProjects/StudentProjectCard";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";

export function StudentProjectsSection() {
    const studentProjects = [
        newSudentProjectData("Interactive Museum Exhibit Featuring Pueblo Influence on New Mexican Contemporary Architecture","https://digital.wpi.edu/downloads/w9505124p?file=thumbnail","https://digital.wpi.edu/concern/student_works/mp48sd573?locale=en"),
        newSudentProjectData("Santa Fe Traffic Operation Center","https://digital.wpi.edu/downloads/hh63sw51d?file=thumbnail","https://digital.wpi.edu/concern/student_works/kh04dq31k?locale=en"),
        newSudentProjectData("Determining the Feasibility of an IQP Project Center in Santa Fe, New Mexico","https://digital.wpi.edu/downloads/6q182k43h?file=thumbnail","https://digital.wpi.edu/concern/student_works/0k225b377?locale=en")
    ]
    return(
        <div className={"text-white"}>

            <div className = {"sampleProjects flex-col xl:flex-row flex"}>
                {studentProjects.map((project)=> {
                    // eslint-disable-next-line react/jsx-key
                    return <StudentProjectCard data={project}></StudentProjectCard>
                })}
            </div>
        </div>
    )
}