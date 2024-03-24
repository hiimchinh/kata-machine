export default function bubble_sort(arr: number[]): void {
    for (let last = arr.length; last > 0; last--) {
        for (let j = 0; j < last; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}