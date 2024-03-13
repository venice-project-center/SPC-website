
import Link from "next/link";
import React from "react";


export function Footer() {

    return (
        <div className={"grid mx-5 grid-cols-2 md:grid-cols-4 xl:justify-items-center mb-20 border-2"}>
            <div className = {"text-white flex-col my-5"}>
                <h1 className={"font-bold mb-5 text-xl"}>Where we are</h1>
                <p className = {""}>
                    <Link href={"https://www.google.com/maps/place/Santa+Fe,+NM,+USA/@35.6820914,-106.2948691,11z/data=!3m1!4b1!4m10!1m2!2m1!1ssantafe+project+center!3m6!1s0x87185043e79852a9:0x8c902373fd88df40!8m2!3d35.6869752!4d-105.937799!15sChZzYW50YWZlIHByb2plY3QgY2VudGVykgEIbG9jYWxpdHngAQA!16zL20vMGYyNXk?entry=ttu"} target={"_blank"}>
                        Santa FE - New Mexico, United States
                    </Link>
                </p>
            </div>
            <div className={"text-white flex-col flex my-5"}>
                <h1 className={"font-bold mb-5 text-xl"}>What We Do</h1>
                <Link href={"/projects"}>Student Projects</Link>
                <Link href={"/publications"}>Publications</Link>
            </div>
            <div className = {"text-white my-5"}>
                <h1 className = {"font-bold mb-5 text-xl"}>Students</h1>
                <p className = {""}><Link href={"/program"} >Program</Link></p>
                <p className = {""}><Link href={"/team"} >Team</Link></p>
            </div>
            <div className = {"text-white my-5"}>
                <h1 className = {"font-bold mb-5 text-xl"}>WPI</h1>
                <p className = {"wpi"}><Link href={"https://www.wpi.edu/"} target={"_blank"}>WPI</Link></p>
                <p className = {"wpiGlobal"}><Link href={"https://www.wpi.edu/project-based-learning/project-based-education/global-project-program"} target={"_blank"}>WPI Global</Link></p>
            </div>
        </div>
    )
}
