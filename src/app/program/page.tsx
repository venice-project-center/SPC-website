import "./programPage.css"
import programHeader from "./program-header.jpg"
import santafe1 from "./santafe1.jpg"
import santafe2 from "./santafe2.jpg"
import santafe3 from "./santafe3.png"
import santafe4 from "./santafe4.jpg"
import Image from "next/image";

export default function Page() {

    let headingTitle = "SANTAFE PROJECT CENTER\nTEAM PROGRAM";
    let infoLabels = ["Program Term : ",
    "Director : ",
    "Housing : ",
    "Center Highlights : ",
    "Program Eligibility : ",
    "Major Eligibility : ",
    "Program Preparation : "];
    let infoDescriptions = ["A term",
    "Fabio Carrera",
    "Shared apartments",
    "Domestic",
    "Good academic standing (not on academic warning or academic probation), Sophomore at the time of application.",
    "All Majors",
    "1/6 PQP in the term preceding departure, ID 2050 in the term preceding departure."];

    let santafePics = [santafe1,
        santafe2,
        santafe3,
        santafe4];

    return (
        <div className = {"programPage flex flex-col"}>
            <div className = {"heading"}>
                <Image src={programHeader} alt={"an image of a student working on a project"}></Image>
                <div className={"overlay"}></div>
                <h1>SANTAFE PROJECT CENTER{"\n"}
                    TEAM PROGRAM</h1>
            </div>
            <div className = {"info1"}>
                    {infoLabels.map((infoLabel,index) => (
                        <div className = {"info_el"} key = {index}>
                            <span className={"label"}>{infoLabel}</span>
                            <span className={"elem"}>{infoDescriptions[index]}</span>
                        </div>
                    ))}
            </div>
            <div className = {"info2"}>
                <div className = {"left"}>
                    <p>Santa Fe is the oldest (1610 AD) and highest (7,200 ft.) state capital in North America. Nestled at the foot of the Sangre de Cristo Mountains, this quaint town of 70,000 is perched high above the Rio Grande in north-central New Mexico. In less than half an hour, it is possible to travel from downtown Santa Fe to the national forest, where skiing above 13,000 feet is available until April.

                        Santa Fe is a major center for Native American culture, a mecca for both active and retired scientists and avant-garde artists. Due to the proximity of the Los Alamos National Lab and the establishment of the world-renowned Santa Fe Institute, founded by George Cowan (WPI Class of ’41), the city has attracted world-class researchers, including several Nobel-prize winners, in the fields of physics, biology, economics, and political science.

                        The teams interact with the local community, especially with native tribes along the Rio Grande. WPI students live near the Santa Fe Plaza, in the downtown area, and travel to local sponsoring agencies by public transportation.</p>
                </div>
                <div className = {"right"}>
                    {santafePics.map((santafePic,index) => (
                        <Image key = {index} src={santafePic} alt={"an image inspired by SantaFe"}></Image>
                    ))}
                </div>
            </div>
        </div>
    );
}