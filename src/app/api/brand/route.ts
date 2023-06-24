import { NextRequest, NextResponse } from "next/server";

function getBrand(req: NextRequest) {
    const host = req.headers.get('host') || ''
    const [siteId] = host.split('.')
    return NextResponse.json({ siteId })
}

export { getBrand as GET }