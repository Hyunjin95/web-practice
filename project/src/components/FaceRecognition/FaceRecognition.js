import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes, isError, loading }) => {
    return (
        <div className='center ma' style={{ visibility: loading ? 'hidden' : 'visible' }}>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                {
                    boxes.map(box => {
                        return (<div key={box.topRow} className={ isError ? 'error-box' : 'bounding-box' }
                            style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)
                    })
                }
            </div>
        </div>
    );
};

export default FaceRecognition;