import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// This module is loaded only by the homepage. Mark individual DOM nodes so
// breakpoint changes and Astro lifecycle events never replay a finished reveal.
const revealed = new WeakSet<HTMLElement>();
let activeRoot: HTMLElement | null = null;
let media: gsap.MatchMedia | undefined;

function cleanup() {
  media?.revert();
  media = undefined;
  activeRoot = null;
}

function setupHomeMotion() {
  const hero = document.querySelector<HTMLElement>('.home-hero');
  const root = hero?.closest('main');
  if (!hero || !root || root === activeRoot) return;
  cleanup();
  activeRoot = root;
  media = gsap.matchMedia();

  try {
    media.add(
      {
        mobile: '(max-width: 767px)',
        desktop: '(min-width: 768px)',
        reduced: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { mobile, reduced } = context.conditions!;
        const firstArrival = !revealed.has(hero);
        revealed.add(hero);
        if (reduced) return;

        const distance = mobile ? 12 : 20;
        const duration = mobile ? 0.42 : 0.6;
        const select = (selector: string) =>
          Array.from(root.querySelectorAll<HTMLElement>(selector));

        // Leave CSS/HTML fully visible. Only set an entrance's starting state
        // when it actually enters the viewport; nothing waits hidden offscreen.
        function reveal(targets: HTMLElement[], stagger = 0, y = distance) {
          const fresh = targets.filter((element) => !revealed.has(element));
          fresh.forEach((element) => revealed.add(element));
          const visible = fresh.filter((element) =>
            element.getBoundingClientRect().bottom > 0 &&
            !element.contains(document.activeElement),
          );
          if (!visible.length) return;

          // Deferred ScrollTrigger callbacks must also belong to this context
          // so reduced-motion changes and navigation restore their inline CSS.
          context.add(() => {
            gsap.fromTo(
              visible,
              { y, opacity: 0.6, willChange: 'transform, opacity' },
              {
                y: 0,
                opacity: 1,
                duration,
                stagger,
                ease: 'power3.out',
                overwrite: 'auto',
                clearProps: 'transform,opacity,willChange',
              },
            );
          });
        }

        // One short team entrance. The headline remains readable from frame 1;
        // all transform/opacity styles are removed after arrival.
        if (firstArrival && window.scrollY < 40) {
          const entrance = gsap.timeline({ defaults: {
            duration,
            ease: 'power3.out',
            clearProps: 'transform,opacity,willChange',
          } });
          entrance.fromTo(
            select('.hero-copy h1 > *'),
            { y: distance, opacity: 0.65, willChange: 'transform, opacity' },
            { y: 0, opacity: 1, stagger: mobile ? 0.06 : 0.08 },
            0,
          );
          entrance.fromTo(
            select('.hero-copy > p, .hero-copy > .button'),
            { y: distance, opacity: 0.65, willChange: 'transform, opacity' },
            { y: 0, opacity: 1, stagger: mobile ? 0.08 : 0.1 },
            0.12,
          );
          entrance.fromTo(
            select('.hero-art > img'),
            { y: distance, opacity: 0.6, willChange: 'transform, opacity' },
            { y: 0, opacity: 1, duration: mobile ? 0.45 : 0.65 },
            0.08,
          );
        }

        function onArrival(targets: HTMLElement[], stagger = 0, y = distance) {
          const pending = targets.filter((element) => !revealed.has(element));
          if (!pending.length) return;
          ScrollTrigger.create({
            trigger: pending[0],
            start: 'top 92%',
            once: true,
            onEnter: () => reveal(pending, stagger, y),
          });
        }

        onArrival(select('.home-about .about-copy'), 0, mobile ? 10 : 16);
        onArrival(select('.home-divisions .section-top h2'));
        const divisions = select('.home-divisions .division-card');
        if (mobile) {
          // Stacked cards each enter with their own viewport, never far below it.
          divisions.forEach((card) => onArrival([card]));
        } else {
          onArrival(divisions, 0.1);
        }
        onArrival(select('.vision .split > .stack'), 0, mobile ? 10 : 16);
        onArrival(select('.vision .goals'), 0, mobile ? 10 : 16);
        onArrival(select('.join-banner > .container'), 0, mobile ? 8 : 12);
      },
      root,
    );
  } catch (error) {
    // A partial setup still falls back to the original, readable static page.
    cleanup();
    console.warn('Homepage motion unavailable; static content retained.', error);
  }
}

document.addEventListener('astro:page-load', setupHomeMotion);
document.addEventListener('astro:before-swap', cleanup);
window.addEventListener('pagehide', cleanup);
window.addEventListener('pageshow', setupHomeMotion);
setupHomeMotion();

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    cleanup();
    document.removeEventListener('astro:page-load', setupHomeMotion);
    document.removeEventListener('astro:before-swap', cleanup);
    window.removeEventListener('pagehide', cleanup);
    window.removeEventListener('pageshow', setupHomeMotion);
  });
}
