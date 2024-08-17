import { useRef, useEffect } from "react";
import { useMyContext } from "../CreateContext";
const templates = [
    `M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z`,
    `M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,229.3C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z`,
];

const colors = ["#ff3300", "#ff8400"];

let currentTemplateIndex = 0;


function Wave() {
    const {create} = useMyContext();

    const wavePathRef = useRef(null);

    useEffect(() => {
            const wavePath = wavePathRef.current;
            const newPath = generateSequentialTemplatePath();
            const newColor = generateSequentialColor();

            // Force reflow by reading an element property
            wavePath.getBoundingClientRect();

            // Set new path and color
            wavePath.setAttribute('d', newPath);
            wavePath.setAttribute('fill', newColor);      
    }, [create]);

    function generateSequentialTemplatePath() {
        const template = templates[currentTemplateIndex];
        currentTemplateIndex = (currentTemplateIndex + 1) % templates.length;
        return template;
    }

    function generateSequentialColor() {
        const color = colors[currentTemplateIndex];
        return color;
    }
    return (
        <>
            <div id="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 295">
                    <path ref={wavePathRef} id="wave-path" fill="#ff5500" fillOpacity="1"
                        d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </div>
        </>
    )
}

export default Wave;