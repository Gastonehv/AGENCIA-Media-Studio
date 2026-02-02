import { Composition } from 'remotion';
import { ManifestoAd } from './ManifestoAd';
import './style.css'; // Opcional, si usas CSS

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ManifestoAd"
        component={ManifestoAd}
        durationInFrames={130} // ~4.3 segundos a 30fps
        fps={30}
        width={1080}
        height={1920} // Formato Vertical (TikTok/Reels/Shorts)
      />
    </>
  );
};
