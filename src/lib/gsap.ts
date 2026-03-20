import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single registration point — import `{ gsap, ScrollTrigger }` from here everywhere
 * so plugins register once and tree-shaking stays predictable.
 */
gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  /** Fewer ScrollTrigger callbacks during fast scroll — better main-thread budget */
  ScrollTrigger.config({
    limitCallbacks: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
  });
}

export { gsap, ScrollTrigger };
