import { useEffect, useState } from "react";
import "./ARViewer.css";

export default function ARViewer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadModelViewer() {
      await import("@google/model-viewer");
      if (mounted) {
        setReady(true);
      }
    }

    loadModelViewer();
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) {
    return (
      <section className="ar-viewer-shell">
        <div className="ar-topbar">
          <div className="ar-pill">Trace Viewer Loading</div>
        </div>

        <div className="viewer-frame viewer-frame--loading">
          <div className="ar-loading">Loading 3D viewer…</div>
        </div>
      </section>
    );
  }

  return (
    <section className="ar-viewer-shell">
      <div className="ar-topbar">
        <div className="ar-pill">Trace Viewer Active</div>
      </div>

      <div className="viewer-frame">
        <model-viewer
          src="/assets/ar/models/kali-cat.glb"
          poster="/assets/ar/posters/kali-poster.webp"
          alt="Kali AR object"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          class="model-viewer"
        >
          <button className="ar-button" slot="ar-button">
            Open in AR
          </button>
        </model-viewer>
      </div>

      <div className="ar-instructions">
        <p>
          Use this viewer as the first layer of your AR system. On desktop, rotate the object.
          On supported mobile devices, open it in AR.
        </p>
      </div>
    </section>
  );
}