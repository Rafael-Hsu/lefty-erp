(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  root.classList.add("effects-ready");

  const revealAll = () => {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
  };

  if (reduceMotion.matches) {
    revealAll();
    return;
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -7%" },
  );
  reveals.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    observer.observe(element);
  });

  let scrollFrame = 0;
  const updateScroll = () => {
    scrollFrame = 0;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const progress = available > 0 ? window.scrollY / available : 0;
    root.style.setProperty("--scroll-progress", String(progress));
    root.style.setProperty("--scroll-y", `${window.scrollY}px`);
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
    },
    { passive: true },
  );
  updateScroll();

  if (!finePointer.matches) return;

  root.classList.add("fine-pointer");
  const cursorRing = document.querySelector(".cursor-ring");
  let pointerFrame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ringX = pointerX;
  let ringY = pointerY;

  const animatePointer = () => {
    pointerFrame = 0;
    ringX += (pointerX - ringX) * 0.18;
    ringY += (pointerY - ringY) * 0.18;
    root.style.setProperty("--mouse-x", `${pointerX}px`);
    root.style.setProperty("--mouse-y", `${pointerY}px`);
    root.style.setProperty("--ring-x", `${ringX}px`);
    root.style.setProperty("--ring-y", `${ringY}px`);
    const px = pointerX / window.innerWidth - 0.5;
    const py = pointerY / window.innerHeight - 0.5;
    root.style.setProperty("--parallax-x", `${px * 24}px`);
    root.style.setProperty("--parallax-y", `${py * 18}px`);
    if (Math.abs(pointerX - ringX) > 0.2 || Math.abs(pointerY - ringY) > 0.2) {
      pointerFrame = requestAnimationFrame(animatePointer);
    }
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(animatePointer);
    },
    { passive: true },
  );

  document.querySelectorAll("a, button, [data-tilt]").forEach((element) => {
    element.addEventListener("pointerenter", () => cursorRing?.classList.add("is-active"));
    element.addEventListener("pointerleave", () => cursorRing?.classList.remove("is-active"));
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${-y * 7}deg`);
      card.style.setProperty("--tilt-y", `${x * 8}deg`);
      card.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
})();
