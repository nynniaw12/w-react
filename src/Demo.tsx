import { useEffect, useState } from 'react'

export default function Demo() {
    const [isLoaded, setIsLoaded] = useState(false)
    const handleLoad = async () => {
        const init = await import('./wasm-demo/wr_raycast.js');
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
            }}>WebGPU Pixel Buffer Renderer</h1>

            <section style={{ display: 'flex', flexDirection: 'column' }}>
                <p>
                    It leverages the capabilities of modern GPUs through the WebGPU API for rendering, using a texture buffer between the CPU and the GPU,
                    similar to pixels.rs a vertex buffer of a single triangle along with a simple shader and texture sampler is used for rendering.
                    The below example is compiled to wasm with wasm-pack from rust code and runs on the WebGL backend for WGPU.
                </p>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold' }}>Features</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li><strong>Performance</strong>: Utilizes GPU for faster rendering</li>
                    <li><strong>Flexibility</strong>: Custom rendering algorithms</li>
                    <li><strong>Cross-platform</strong>: WebGPU supports Vulkan, Metal, WebGL, DirectX and OpenGL</li>
                </ul>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold' }}>Demo Controls</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li><strong>T</strong> - Draw a triangle</li>
                    <li><strong>C</strong> - Draw a circle</li>
                    <li><strong>S</strong> - Draw a square</li>
                    <li><strong>Up/Down Arrow</strong> - Shift color</li>
                </ul>
            </section>
            {isLoaded && (
                <>
                    <p style={{
                        textAlign: 'center',
                        color: 'green',
                        fontWeight: 'semibold'
                    }}>
                        Demo Loaded Successfully!
                    </p>
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
                    Load Demo
                </button>
            )}
        </div>
    )
}
