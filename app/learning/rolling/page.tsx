'use client';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {gsap} from 'gsap';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.config({ trialWarn: false } as any);

const RollingPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const repeatCount = 9;
        const tl = gsap.timeline({ paused: true });
        const split = new SplitText('.rolling-text', { type: "chars" });
        split.chars.forEach((obj, i) => {
            if (i !== 0) return;
            console.log(obj.childNodes);
            
            let txt = (obj as HTMLElement).innerText;
            let addHtml = `<div class="originalText"> ${txt} </div><div class="cloneText"> ${txt} </div>`;
            obj.innerHTML = addHtml;
            console.log(obj.childNodes[1]);
            
            gsap.set(obj.childNodes[1], {
                yPercent: i % 2 === 0 ? -100 : 100
            });
            let tween = gsap.to(obj.childNodes, {
                repeat: repeatCount,
                ease: "none",
                yPercent: i % 2 === 0 ? "+=100" : "-=100"
            });
            tl.add(tween, 0);
        });
        gsap.to(tl, { progress: 1, duration: 4, ease: "power4.inOut" });

    });
  return (
    <div ref={ref} className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="rolling-text text-[10vw] uppercase font-semibold overflow-hidden leading-none">Rolling</div>
    </div>
  );
};

export default RollingPage;
