//Script
// GSAP Initial Animations for Hero Section
gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".hero-button", { duration: 1, y: 50, opacity: 0, delay: 1.5 });

// GSAP Animations for Next Section
gsap.from(".next-title", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".next-description", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".next-button", { duration: 1, y: 50, opacity: 0, delay: 1.5 });
gsap.from(".next-image", { duration: 1, y: 50, opacity: 0, delay: 1 });

// GSAP Animations for Services Section
gsap.from(".services-title", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".service-card", { duration: 1, y: 50, opacity: 0, stagger: 0.3, delay: 1 });

// Mouse Movement Effect for Hero Section
document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const xPos = (clientX / window.innerWidth - 0.5) * 20;
  const yPos = (clientY / window.innerHeight - 0.5) * 20;

  gsap.to(".hero-content", {
    x: xPos,
    y: yPos,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(".hero-background", {
    x: -xPos * 0.5,
    y: -yPos * 0.5,
    duration: 1,
    ease: "power2.out",
  });
});