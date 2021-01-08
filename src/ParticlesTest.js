import React from 'react'
import Particles from 'react-particles-js'

class ParticlesTest extends React.Component {
    render(){
        return (
            <div className="particles">
            <Particles 
                params={{
                    particles: {
                        shape: {
                            type: 'images',
                            image: [
                                {src: 'path/to/first/image.svg', height: 20, width: 20},
                                {src: 'path/to/second/image.jpg', height: 20, width: 20},
                            ]
                        }
                    }
                }} />
            </div>
        );
    };
 
}

export default ParticlesTest