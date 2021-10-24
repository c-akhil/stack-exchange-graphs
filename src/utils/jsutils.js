export function debounce(cb, duration = 500) {
    let timmerId;
    return (...params) => {
        clearTimeout(timmerId)
        timmerId = setTimeout(() => {
            cb(...params)
        }, duration)
    }
}