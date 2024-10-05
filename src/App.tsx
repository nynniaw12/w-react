import { useState } from 'react'
import Demo from "./Demo";
import Raycasting from "./Raycasting";

enum APP {
    NONE,
    DEMO,
    RAYCASTING
}

export default function Component() {
    const [selected, setSelected] = useState(APP.NONE);

    return (
        <>
            {(selected == APP.NONE) && <div className="container">
                <button className="button" onClick={() => setSelected(APP.DEMO)}>Demo</button>
                <button className="button" onClick={() => setSelected(APP.RAYCASTING)}>Raycasting</button>
            </div>}
            {(selected == APP.DEMO) && < Demo />}
            {(selected == APP.RAYCASTING) && < Raycasting />}
            <style>{`
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100vw;
                padding: 1rem;
                box-sizing: border-box;
            }

            .button {
                width: 100%;
                max-width: 400px;
                background-color: black;
                color: white;
                padding: 1rem 2rem;
                border-radius: 0.5rem;
                font-weight: 600;
                font-size: 1.25rem;
                cursor: pointer;
                border: none;
                margin: 0.5rem 0;
                transition: all 0.3s ease;
            }

            .button:hover {
                background-color: #333;
                transform: scale(1.05);
            }

            @media (min-width: 640px) {
                .button {
                    font-size: 1.5rem;
                    padding: 1.5rem 3rem;
                }
            }

            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

            body {
                font-family: 'Roboto', sans-serif;
            }

            canvas {
                width: calc(50vw);
                height: calc(75vh);
            }

            iframe
            {
                display: none;
            }
            `}</style>

        </>
    );
}
