export default function BackgroundLayers() {
  return (
    <>
      <canvas id="scene"></canvas>
      <div id="neural-space" aria-hidden="true"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
    </>
  );
}
