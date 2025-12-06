import Squares from './ui/Squares';

export default function FaultyBg() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
            <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal'
                borderColor='rgb(69,68,70)'
                hoverFillColor='#222'
            />
        </div>
    );
}