import Particles from './ui/Particles';

export default function FaultyBg() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-auto z-0">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
}