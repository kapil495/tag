function addVignetee(transparancyIn , transparancyOut){
    const style = document.createElement('style')
    const vignette = document.createElement('div')
    vignette.className = "vignette"
    style.textContent = `
    /* Basic styles for the full-screen background */
    .vignette {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 0, 0, ${transparancyIn}) 90%, rgba(0, 0, 0, ${transparancyOut}) 100%);
        pointer-events: none; /* Makes sure the vignette overlay doesn't interfere with interaction */
        z-index: 999; /* Make sure it stays on top */
    }
        `
    document.body.appendChild(vignette)
    document.head.appendChild(style);
}
export { addVignetee };