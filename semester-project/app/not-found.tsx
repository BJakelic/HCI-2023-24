"use client"

import Image, { StaticImageData } from "next/image";

export default function NotFound() {
    return (
        <main className="flex flex-col justify-around items-center">
            <Image src="/hero/specschecks-icon-404.png" alt="SpecsChecks404" width="400" height="300"/>
            <p>There was a problem.</p>
        </main>
    );
}