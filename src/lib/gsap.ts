import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single registration point — import `{ gsap, ScrollTrigger }` from here everywhere
 * so plugins register once and tree-shaking stays predictable.
 */
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
