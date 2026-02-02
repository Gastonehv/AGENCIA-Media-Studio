import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence, Img, staticFile } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Inter';

// Cargar fuente agresiva
const { fontFamily } = loadFont();

const Title = ({ text, color, bg }: { text: string; color: string; bg: string }) => {
  const frame = useCurrentFrame();
  
  // Efecto de entrada "Golpe" (Scale down rapido)
  const scale = interpolate(frame, [0, 5], [1.5, 1], { extrapolateRight: 'clamp' });
  const opacity = interpolate(frame, [0, 3], [0, 1]);
  
  // Efecto Glitch (pequeño temblor aleatorio simulado)
  const shakeX = interpolate(frame % 2, [0, 1], [-2, 2]);
  
  return (
    <AbsoluteFill style={{ backgroundColor: bg, justifyContent: 'center', alignItems: 'center' }}>
      <h1
        style={{
          fontFamily,
          fontSize: '120px',
          fontWeight: 900,
          color: color,
          textTransform: 'uppercase',
          transform: `scale(${scale}) translateX(${shakeX}px)`,
          opacity,
          letterSpacing: '-5px',
          lineHeight: '0.9',
          textAlign: 'center'
        }}
      >
        {text}
      </h1>
    </AbsoluteFill>
  );
};

const FlashWord = ({ word }: { word: string }) => {
    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <h1 style={{ fontFamily, fontSize: '150px', color: '#fff', fontWeight: 'bold' }}>{word}</h1>
        </AbsoluteFill>
    )
}

const FinalBrand = () => {
    const frame = useCurrentFrame();
    
    // Animación Cerebro: Golpe de zoom + Rotación sutil
    const scaleBrain = interpolate(frame, [0, 5], [1.2, 0.8], { extrapolateRight: 'clamp' }); // Reducido para encajar
    const rotateBrain = interpolate(frame, [0, 60], [0, 5]); // Sutil rotación continua
    
    // Animación Texto: Aparece con delay y glitch
    const opacityText = interpolate(frame, [10, 15], [0, 1]);
    const glitchText = interpolate(frame % 5, [0, 1, 2, 3, 4], [0, 5, -5, 2, 0]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
            {/* CEREBRO */}
            <div style={{ transform: `scale(${scaleBrain}) rotate(${rotateBrain}deg)` }}>
                <Img 
                    src={staticFile('logo/logo-brain-white.png')} 
                    style={{ width: '800px', height: 'auto', objectFit: 'contain' }} 
                />
            </div>

            {/* TEXTO */}
            <div style={{ 
                marginTop: '20px', 
                opacity: opacityText, 
                transform: `translateX(${glitchText}px)` 
            }}>
                <Img 
                    src={staticFile('logo/logo-text-white.png')} 
                    style={{ width: '900px', height: 'auto', objectFit: 'contain' }} 
                />
            </div>
            
            <p style={{ 
                fontFamily, 
                color: '#666', 
                marginTop: '40px', 
                fontSize: '24px', 
                letterSpacing: '5px',
                opacity: interpolate(frame, [20, 30], [0, 1])
            }}>
                CAPITALIZA EL CAOS
            </p>
        </AbsoluteFill>
    );
}

export const ManifestoAd = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* SCENE 1: AGRESIVO - NEGRO */}
      <Sequence from={0} durationInFrames={30}>
        <Title text="TU WEB\nESTÁ MUERTA" color="white" bg="black" />
      </Sequence>

      {/* SCENE 2: INVERSION - BLANCO */}
      <Sequence from={30} durationInFrames={25}>
        <Title text="NADIE\nTE VE" color="black" bg="white" />
      </Sequence>

      {/* SCENE 3: PALABRAS RAPIDAS (SUBLIMINAL) */}
      <Sequence from={55} durationInFrames={5}>
        <FlashWord word="CÓDIGO" />
      </Sequence>
      <Sequence from={60} durationInFrames={5}>
        <FlashWord word="ARTE" />
      </Sequence>
      <Sequence from={65} durationInFrames={5}>
        <FlashWord word="VENTAS" />
      </Sequence>

      {/* SCENE 4: CIERRE - IDENTIDAD GRAFICA */}
      <Sequence from={70} durationInFrames={60}>
         <FinalBrand />
      </Sequence>
    </AbsoluteFill>
  );
};
