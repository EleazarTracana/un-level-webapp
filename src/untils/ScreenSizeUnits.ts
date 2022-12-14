export const vw = function(percent: number)  {
    let vw100 = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * vw100) / 100;
}

export const vh = function(percent: number)  {
    let vh100 = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * vh100) / 100;
}