"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import react, {useState} from 'react';
import { useRouter } from "next/navigation";
export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logged out successfully");
            router.push("/login");
        } catch (error: any) {
            console.log("Logout failed ", error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2 className="p-1 rounded bg-green-500">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button onClick={logout} className="py-2 px-4 rounded mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold">Logout</button>
            <button onClick={getUserDetails} className="py-2 px-4 rounded mt-3 bg-green-800 hover:bg-blue-700 text-white font-bold">Get Details</button>
        </div>
    )
}