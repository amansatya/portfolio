import FaultyTerminal from './ui/FaultyTerminal';

export default function FaultyBg() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full">
            <FaultyTerminal
                scale={1.5}
                gridMul={[2, 1]}
                digitSize={1.5}
                timeScale={1}
                pause={false}
                scanlineIntensity={1}
                glitchAmount={1}
                flickerAmount={1}
                noiseAmp={1}
                chromaticAberration={0}
                dither={0}
                curvature={0}
                tint="#00ff99"
                mouseReact={true}
                mouseStrength={0.2}
                pageLoadAnimation={false}
                brightness={1}
            />
        </div>
    );
}