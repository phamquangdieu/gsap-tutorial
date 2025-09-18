'use client';
import { useGSAP } from "@gsap/react";
import styles from './styles.module.css';
import { useRef } from "react";
import { gsap } from "gsap";
// stagger: animate multiple elements with a delay between each animation start time
// cùng 1 hoạt cảnh cho những item giống nhau như có độ trễ về 
// thời gian bắt đầu bằng stagger giây
const StaggeredPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(`.${styles.box}`, { x: 400, y: 100, duration: 2, stagger: function (index, target, list) {
		// your custom logic here. Return the delay from the start (not between each)
        console.log(index);
        
		return (index ) * 1;
	} });
    })
  return <div ref={containerRef}>
    <div className={styles.box}></div>
    <div className={styles.box}></div>
    <div className={styles.box}></div>
  </div>;
}

export default StaggeredPage;