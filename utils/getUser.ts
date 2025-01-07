import axios from "axios"

export async function getUser (userId:string) {
    const res = await axios.post(`/api/${userId}`, {userId})
    const userInfo = await res.data.userFound
    console.log(userInfo)
    return userInfo
}