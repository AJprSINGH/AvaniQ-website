"use client";

import { useEffect } from "react";

const CDN = [
  "https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export default function ClientEffects() {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      for (const src of CDN) {
        try {
          await loadScript(src);
        } catch {
          /* CDN unavailable: site still renders, matching graceful degradation */
        }
      }
      if (cancelled) return;
      cleanup = initSite();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}

function initSite() {
  const cleanups = [];
  const on = (target, type, fn, opt) => {
    target.addEventListener(type, fn, opt);
    cleanups.push(() => target.removeEventListener(type, fn, opt));
  };
  const timers = [];
  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.push(id);
    return id;
  };

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const loader = document.getElementById("loader");
  const hideLoader = () =>
    later(() => {
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }
    }, 1500);
  if (document.readyState === "complete") hideLoader();
  else on(window, "load", hideLoader);

  // Custom cursor + trailing ring.
  const cursor = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor-ring");
  let mx = innerWidth / 2,
    my = innerHeight / 2,
    rx = mx,
    ry = my;
  on(window, "mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });
  let cursorRaf;
  (function cursorLoop() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    if (cursor) {
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    }
    if (ring) {
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
    }
    cursorRaf = requestAnimationFrame(cursorLoop);
  })();
  cleanups.push(() => cancelAnimationFrame(cursorRaf));

  document
    .querySelectorAll("a,button,.service,.project,.founder,.testimonial,.tech-family b")
    .forEach((el) => {
      const enter = () => {
        if (ring) {
          ring.style.width = "52px";
          ring.style.height = "52px";
          ring.style.borderColor = "rgba(38,230,255,.85)";
        }
      };
      const leave = () => {
        if (ring) {
          ring.style.width = "30px";
          ring.style.height = "30px";
          ring.style.borderColor = "rgba(38,230,255,.5)";
        }
      };
      on(el, "mouseenter", enter);
      on(el, "mouseleave", leave);
    });

  // Reveal-on-scroll observer (first pass, persistent like the original).
  document.querySelectorAll(".reveal").forEach((el) => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    io.observe(el);
    cleanups.push(() => io.disconnect());
  });

  // Magnetic buttons.
  document.querySelectorAll(".magnetic").forEach((el) => {
    on(el, "mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.08}px,${
        (e.clientY - r.top - r.height / 2) * 0.08
      }px)`;
    });
    on(el, "mouseleave", () => (el.style.transform = ""));
  });

  // Counter animation: 25 delivered projects, etc.
  const counters = document.querySelectorAll(".counter");
  let counted = false;
  let counterRaf;
  const counterObserver = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (!e.isIntersecting || counted) return;
        counted = true;
        counters.forEach((el) => {
          const target = Number(el.dataset.target || 0),
            start = performance.now(),
            duration = 1500;
          function tick(now) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased);
            if (p < 1) counterRaf = requestAnimationFrame(tick);
          }
          counterRaf = requestAnimationFrame(tick);
        });
      });
    },
    { threshold: 0.25 }
  );
  if (counters.length) counterObserver.observe(counters[0]);
  cleanups.push(() => counterObserver.disconnect());
  cleanups.push(() => cancelAnimationFrame(counterRaf));

  // Contact form: opens the visitor's email client with a clean project brief.
  const form = document.getElementById("contact-form");
  if (form) {
    on(form, "submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name"),
        email = data.get("email"),
        message = data.get("message");
      const subject = encodeURIComponent("New Avaniq project enquiry — " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject:\n${message}`);
      window.location.href = `mailto:hello@avaniqsoftwares.com?subject=${subject}&body=${body}`;
      const status = form.querySelector(".form-status");
      status.textContent = "Opening your email client…";
    });
  }

  // Mobile menu.
  const menu = document.querySelector(".menu"),
    nav = document.querySelector(".nav nav");
  if (menu && nav) {
    on(menu, "click", () => {
      const open = nav.classList.toggle("mobile-open");
      if (open) nav.style.display = "flex";
      else nav.removeAttribute("style");
    });
    nav.querySelectorAll("a").forEach((a) =>
      on(a, "click", () => {
        nav.classList.remove("mobile-open");
        if (innerWidth <= 900) nav.removeAttribute("style");
      })
    );
  }

  // Cinematic Three.js particle universe behind the page.
  const canvas = document.getElementById("scene");
  if (window.THREE && canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
    renderer.setSize(innerWidth, innerHeight);
    const group = new THREE.Group();
    scene.add(group);

    const count = 11000,
      positions = new Float32Array(count * 3),
      colors = new Float32Array(count * 3);
    const c1 = new THREE.Color("#26e6ff"),
      c2 = new THREE.Color("#006dff");
    for (let i = 0; i < count; i++) {
      const r = 1.1 + Math.random() * 3.2,
        theta = Math.random() * Math.PI * 2,
        phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = c1.clone().lerp(c2, Math.random() * 0.82);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.012,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pts = new THREE.Points(geo, mat);
    group.add(pts);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 3),
      new THREE.MeshBasicMaterial({ color: 0x0a2229, wireframe: true, transparent: true, opacity: 0.12 })
    );
    group.add(core);
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const tor = new THREE.Mesh(
        new THREE.TorusGeometry(1.65 + i * 0.43, 0.004, 8, 180),
        new THREE.MeshBasicMaterial({ color: i === 1 ? 0x006dff : 0x26e6ff, transparent: true, opacity: 0.25 })
      );
      tor.rotation.x = Math.PI / 2 + i * 0.43;
      tor.rotation.y = i * 0.55;
      group.add(tor);
      rings.push(tor);
    }

    let scroll = 0,
      target = 0;
    on(window, "scroll", () => {
      target = scrollY / Math.max(1, document.body.scrollHeight - innerHeight);
    }, { passive: true });
    let renderRaf;
    function render() {
      scroll += (target - scroll) * 0.05;
      group.rotation.y += 0.0014;
      pts.rotation.z += 0.0004;
      group.rotation.x = scroll * 0.7;
      group.scale.setScalar(1 + scroll * 1.8);
      group.position.y = scroll * 0.65;
      core.rotation.x += 0.002;
      core.rotation.y += 0.003;
      rings.forEach((r, i) => {
        r.rotation.z += 0.0018 * (i + 1);
      });
      mat.opacity = 0.38 + scroll * 0.48;
      mat.size = 0.009 + scroll * 0.02;
      renderer.render(scene, camera);
      renderRaf = requestAnimationFrame(render);
    }
    render();
    cleanups.push(() => cancelAnimationFrame(renderRaf));
    on(window, "resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
    });
    cleanups.push(() => renderer.dispose());
    cleanups.push(() => geo.dispose());
    cleanups.push(() => mat.dispose());
  }

  // Scroll choreography for content.
  if (window.gsap && window.ScrollTrigger) {
    gsap.to(".hero-content", { y: -70, opacity: 0.25, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
    gsap.to(".space-core", { scale: 1.25, opacity: 0.22, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
    gsap.from(".intro-grid", { y: 70, opacity: 0, scrollTrigger: { trigger: ".intro", start: "top 70%", end: "top 25%", scrub: 1 } });
    gsap.from(".tech-family", { x: -40, opacity: 0, stagger: 0.08, scrollTrigger: { trigger: ".technology", start: "top 75%", end: "top 35%", scrub: 1 } });
    gsap.from(".project", { y: 70, opacity: 0, stagger: 0.1, scrollTrigger: { trigger: ".work", start: "top 75%", end: "top 35%", scrub: 1 } });
    gsap.from(".founder", { y: 55, opacity: 0, stagger: 0.1, scrollTrigger: { trigger: ".founders", start: "top 75%", end: "top 35%", scrub: 1 } });
    gsap.from(".testimonial", { y: 55, opacity: 0, stagger: 0.1, scrollTrigger: { trigger: ".testimonials", start: "top 75%", end: "top 35%", scrub: 1 } });
    gsap.from(".contact-copy", { x: -60, opacity: 0, scrollTrigger: { trigger: ".contact", start: "top 70%", end: "top 30%", scrub: 1 } });
    gsap.from(".contact-form", { x: 60, opacity: 0, scrollTrigger: { trigger: ".contact", start: "top 70%", end: "top 30%", scrub: 1 } });
    cleanups.push(() => ScrollTrigger.getAll().forEach((st) => st.kill()));
  }

  // Interactive particle field that follows the cursor.
  (function () {
    const c = document.createElement("canvas");
    c.id = "cursor-particle-field";
    c.setAttribute("aria-hidden", "true");
    document.body.appendChild(c);
    const ctx = c.getContext("2d");
    let W,
      H,
      D,
      parts = [],
      mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };
    let targetCount = 110;
    let fieldRaf;
    function resize() {
      D = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth;
      H = innerHeight;
      c.width = W * D;
      c.height = H * D;
      c.style.width = W + "px";
      c.style.height = H + "px";
      ctx.setTransform(D, 0, 0, D, 0, 0);
      targetCount = W < 600 ? 65 : 110;
      parts = Array.from({ length: targetCount }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.6 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        tx: 0,
        ty: 0,
      }));
    }
    function loop(t) {
      ctx.clearRect(0, 0, W, H);
      const nearRadius = W < 600 ? 125 : 175;
      parts.forEach((p) => {
        const dx = mouse.x - p.x,
          dy = mouse.y - p.y,
          d = Math.hypot(dx, dy);
        p.vx += Math.sin(t * 0.0004 + p.phase) * 0.0009;
        p.vy += Math.cos(t * 0.00035 + p.phase) * 0.0009;
        if (d < nearRadius) {
          const force = 1 - d / nearRadius;
          p.vx += (dx / d) * (0.018 + force * 0.09);
          p.vy += (dy / d) * (0.018 + force * 0.09);
        }
        if (d < 48 && d > 0) {
          p.vx -= (dx / d) * 0.035;
          p.vy -= (dy / d) * 0.035;
        }
        p.vx *= 0.986;
        p.vy *= 0.986;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        const pulse = 0.55 + 0.45 * Math.sin(t * 0.0015 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(38,230,255,${0.12 + pulse * 0.25})`;
        ctx.fill();

        if (d < nearRadius * 0.7) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(38,230,255,${0.035 + (1 - d / (nearRadius * 0.7)) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      if (mouse.x > 0) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, nearRadius);
        g.addColorStop(0, "rgba(38,230,255,.055)");
        g.addColorStop(0.25, "rgba(0,109,255,.025)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, nearRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      fieldRaf = requestAnimationFrame(loop);
    }
    on(window, "mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });
    on(window, "mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    }, { passive: true });
    on(window, "resize", resize);
    resize();
    fieldRaf = requestAnimationFrame(loop);
    cleanups.push(() => cancelAnimationFrame(fieldRaf));
    cleanups.push(() => c.remove());
  })();

  // Reveal observer for elements added/changed in V4 (unobserves once visible).
  document.querySelectorAll(".reveal").forEach((el) => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    io.observe(el);
    cleanups.push(() => io.disconnect());
  });

  return () => {
    timers.forEach(clearTimeout);
    cleanups.forEach((fn) => {
      try {
        fn();
      } catch {}
    });
  };
}
