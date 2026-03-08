export function calculateReputation(actions: number, failures: number) {

    const score = actions * 10 - failures * 5

    return Math.max(score, 0)
}
