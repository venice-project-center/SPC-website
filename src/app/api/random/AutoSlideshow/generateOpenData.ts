import {prisma} from "@/app/api/db";

export async function generateOpenData(spcStatement:string,openDataParagraph:string,openDataPic:string) {
    console.log("prisma connection established");
    try {
        console.log("Before opern ddaata creation");
        await prisma.openDataSection.create({
            data: {
                spcStatement:spcStatement,
                openDataParagraph:openDataParagraph,
                openDataPic:openDataPic
            }
        });
        console.log("After opern ddaata  creation");
    } catch(error) {
        console.log("Database error");
        throw error;
    }

}