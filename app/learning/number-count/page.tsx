'use client';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

const NumberCount = () => {
    const containerRef = useRef<SVGSVGElement>(null);
    useGSAP(() => {
        const target = document.querySelector("#manage") as HTMLElement;
        const count = 2.22;
        const dur = 1;

        const proxy = { value: 0 };
        gsap.to(proxy, {
            value: count,
            duration: dur,
            ease: "power1.in", // <-- Add your ease here
            onUpdate: changeNumber
        });

        function changeNumber() {
            target.textContent = proxy.value.toFixed(2) + "%";
        }
    })

    // useGSAP(() => {
    //     const obj = { val: 0 };
    //     const target = document.querySelector("#manage") as HTMLElement;
    //     gsap.to(obj, {
    //     val: 2.22,              // số cuối
    //     duration: 2,           // thời gian (giây)
    //     ease: "power3.out",    // easing mượt
    //     onUpdate: () => {
    //         target.textContent = Math.floor(obj.val * 100) / 100 + "%";
    //     }
    //     });
    // });
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 200 200" fill="#42a6e0">
        <text id="portValueNum" fontSize="80" x="100" y="120" textAnchor="middle"  fontWeight="bold">
            <tspan id="manage">0%</tspan>
        </text>
    </svg>
  );
};

export default NumberCount;