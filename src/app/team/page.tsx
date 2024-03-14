import './team.css';
import {TeamMember} from "@/app/components/random/TeamMember";
import fabio from "@/app/team/fabio.jpg"
import nick from "@/app/team/Nick.jpg"
import alireza from "@/app/team/alireza.jpg"



export default function Page() {

    let teamMembers = [
        "Prof. Fabio Carrera",
        "Nick Leslie",
        "Alireza Dehghan"
    ];
    let teamMemberPics = [
        fabio,
        nick,
        alireza
    ];
    let teamMemberRoles = ["Founder & Director",
        "Former student",
        "Developer / IT"
    ];

    return (
        <div className = {"teamPage flex flex-col xl:flex-row"}>
            <div className = {"contact"}>
                <h1>TEAM</h1>
                <h2>Contacts</h2>
                <a href={"mailto:carrera@wpi.edu"}><p>carrera@wpi.edu</p></a>
                <a href={"mailto:santafeprojectcenter@gmail.com"}><p>santafeprojectcenter@gmail.com</p></a>
            </div>
            <div className = {"members"}>
                {teamMembers.map((teamMember,index) => (
                    <TeamMember sourceImage={teamMemberPics[index]} memberName={teamMember} memberRole={teamMemberRoles[index]} key = {index}></TeamMember>
                ))}
            </div>
        </div>
    );
}


