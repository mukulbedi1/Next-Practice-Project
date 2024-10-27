import {extractDataFromToken} from "@/helpers/extractDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await extractDataFromToken(request);
        const user = await User.findById({_id: userId}).select("-password");
        return NextResponse.json({ 
            message: "User found",
            data:user 
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}