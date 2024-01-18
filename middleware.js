import React from "react";
import { NextResponse, userAgent } from "next/server";
import { makeACallTo } from "./utils/network";
async function middleware(req) {
    const response = NextResponse.next();
    if (
        !req.nextUrl.pathname.startsWith("/dashboard") ||
        req.cookies.has("logged")
    ) {
        return ;
    }
    if (!req.cookies.has("Auth")) {
        return NextResponse.redirect(new URL("/authentication", req.url));
    }
    const browser = userAgent(req);
    let log = {
        device: null,
        location: null,
        browserName: null,
        os: null,
    };
    let ip = req.ip;
    if (!ip) {
        ip = await (await fetch("http://ipwho.is/")).json();
    } else {
        ip = await (await fetch("http://ipwho.is/" + req.ip)).json();
    }
    log.location = ip.country + " " + ip.region;
    log.browserName = browser.browser.name;
    log.device = browser.device.vendor + " " + browser.device.model;
    log.os = browser.os.name;
    let token = req.cookies.get("Auth").value;

    makeACallTo("log/", "POST", { Authorization: token }, JSON.stringify(log));
    response.cookies.set("logged", Math.random());
    return response;
}

export default middleware;
