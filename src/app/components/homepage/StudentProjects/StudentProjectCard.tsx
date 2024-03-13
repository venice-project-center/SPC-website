import Link from "next/link";
import Image from "next/image";
import React from "react";

interface StudentProjectCardData {
    backgroundColor:string,
    projectLink:string,
    projectPicture:string,
    projectCaption:string
}

export function newSudentProjectData( caption:string,picture:string,link:string) {
    let data:StudentProjectCardData = {} as StudentProjectCardData;
    data.projectCaption = caption;
    data.projectLink = link;
    data.projectPicture = picture;
    return data;
}

export function StudentProjectCard(props:{data:StudentProjectCardData}) {
    return(
        <div className = "sampleProject">
            <Link href = {props.data.projectLink}>
                <figure className = {"picContainer"}>
                    <Image src={props.data.projectPicture} width={500} height = {500} alt={"iqp image"} className={"studentProjectPic"}></Image>
                    <figcaption style={{"bottom": 0, "transform": "none"}} className="studentProjectTitle">{props.data.projectCaption}</figcaption>
                </figure>
            </Link>
        </div>
    )
}