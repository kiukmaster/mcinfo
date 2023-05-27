// components/MinecraftSimulator.js
import React, { useEffect, useRef } from 'react';
import { SkinViewer } from 'skinview3d';

function MinecraftSimulator({ skinUrl }) {
  const skinViewerRef = useRef();

  useEffect(() => {
    let skinViewer;

    if (skinViewerRef.current) {
      skinViewer = new SkinViewer({
        canvas: skinViewerRef.current,
        width: 300,
        height: 300,
      });

      skinViewer.loadSkin(skinUrl);

      // 걷는 애니메이션 생성
      function walkingAnimation(time) {
        const current = time / 200;
        skinViewer.playerObject.skin.leftLeg.rotation.x = Math.sin(current) * 0.5;
        skinViewer.playerObject.skin.rightLeg.rotation.x = -Math.sin(current) * 0.5;
        skinViewer.playerObject.skin.leftArm.rotation.x = -Math.sin(current) * 0.5;
        skinViewer.playerObject.skin.rightArm.rotation.x = Math.sin(current) * 0.5;
      }

      const animate = () => {
        walkingAnimation(Date.now());
        skinViewer.render();
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }

    return () => {
      if (skinViewer) {
        // 필요한 경우 animation loop에 추가하세요.
      }
    };
  }, [skinUrl]);

    return (
        <div className='canvmain'>
            <canvas ref={skinViewerRef} />
            <style jsx>{`
                canvas {
                    border: solid 1px white;
                    background: white;
                }
                .canvmain {
                  text-align: center;
                }
            `}</style>
        </div>
    );
}

export default MinecraftSimulator;
