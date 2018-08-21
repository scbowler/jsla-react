const randomNumber = max => Math.floor(Math.random() * max);

export const randomBackground = () => {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);

    return {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: r+g+b > 280 ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
    };
}
