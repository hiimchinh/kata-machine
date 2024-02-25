export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        let mid = Math.floor((lo + hi) / 2);
        if (needle === mid) {
            return true;
        } else if (needle > mid) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi)
    return false;
}