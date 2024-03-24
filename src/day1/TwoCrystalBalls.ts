export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpStep = Math.floor(Math.sqrt(breaks.length));
    let i = jumpStep;
    for (; i < breaks.length; i + jumpStep) {
        if (breaks[i]) {
            break;
        }
    }
    for (let j = i - jumpStep; j < jumpStep; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}