import { getCases } from "../../apis/user"



export const GetCase = (id: string) => {
    const contestId = localStorage.getItem("contestId")
    const data = getCases({ contest_id: contestId!, submission_id: id })
    console.log(data);

}