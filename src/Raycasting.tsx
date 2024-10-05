import { useEffect, useState } from 'react'

export default function Raycasting() {
    const [isLoaded, setIsLoaded] = useState(false)
    const handleLoad = async () => {
        const init = await import('./wasm-raycast/wr_raycast.js');
        await init.default();
        console.log("WASM Loaded");
        setIsLoaded(true);
    }

    useEffect(() => {
        if (isLoaded) {
            document.getElementById('_wgpu-fps')?.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        }
    }, [isLoaded]);

    return (
        <div style={{
            maxWidth: '50vw',
            margin: '0 auto',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
        }}>
            <h1 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>WebGPU Raycasting</h1>

            <section style={{ display: 'flex', flexDirection: 'column' }}>
                <p>
                    Raycasting is done with vector and matrix calculus, to get a
                    pseudo 3D feeling with 2-dimensional algebra. The floor and ceiling,
                    the walls, and the sprites are cast in order to achieve this.
                </p>

                <p>
                    Thanks to WASM locked 60 fps is stably achieved on the web.
                </p>

                <p>
                    Two backends one in webgpu and another in raylib are provided
                    for raycasting. Wgpu compiles to web with wasm and it has a
                    much more lower level api.
                </p>

                <p>
                    Both the raylib and wgpu backends share rendering and offloading
                    a pixel buffer. Details of Wgpu implementation are in demo.
                </p>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold' }}>Raycasting Game Controls</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li><strong>Arrow keys</strong> - Move</li>
                    <li><strong>Left shift</strong> - Sprint</li>
                </ul>
            </section>
            {isLoaded && (
                <>
                    <p style={{
                        textAlign: 'center',
                        color: 'green',
                        fontWeight: 'semibold'
                    }}>
                        Raycasting Game Loaded Successfully!
                    </p>
                    <button
                        onClick={() => {
                            const div = document.getElementById('_wgpu');
                            div?.requestFullscreen();
                        }}
                        style={{
                            width: '100%',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.25rem',
                            fontWeight: 'semibold',
                            cursor: 'pointer'
                        }}
                    >
                        Enter Fullscreen
                    </button>
                </>
            )}
            <div id="_wgpu" />
            {!isLoaded && (
                <button
                    onClick={handleLoad}
                    style={{
                        width: '100%',
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        fontWeight: 'semibold',
                        cursor: 'pointer'
                    }}
                >
                    Load Raycasting Game
                </button>
            )}
        </div>
    )
}
