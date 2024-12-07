import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export function GET() {
    const role = useCurrentRole();

    if(role === UserRole.ADMIN) {
        return new NextResponse(null, { status: 200 })
    }

    return new NextResponse(null, { status: 403 })
}