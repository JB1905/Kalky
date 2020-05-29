import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

// import { useScanner } from 'hooks/useScanner';
// import { useImageCrop } from 'hooks/useImageCrop';

import './Scanner.scss';

const Scanner: React.FC = () => {
  // const { scan, progress, output } = useScanner();

  // const {
  //   src,
  //   setSrc,
  //   crop,
  //   setCrop,
  //   onImageLoaded,
  //   onCropComplete,
  // } = useImageCrop();

  return (
    <div className="scanner">
      <div
        className="scanner__progress"
        // style={{ width: `${progress * 100}%` }}
      />

      <input
        type="file"
        className="scanner__source"
        accept="image/png, image/jpeg"
        // onChange={(e) => setSrc(e.target.files![0].path)}
      />

      {/* {src ? (
        <>
          <ReactCrop
            src={src}
            crop={crop}
            className="scanner__crop"
            onComplete={onCropComplete}
            onImageLoaded={onImageLoaded}
            onChange={setCrop}
          />

          <button onClick={scan}>Get text</button>
        </>
      ) : (
        <p className="data__empty">Load image</p>
      )}

      <div className="scanner__content">
        {output && <textarea value={output} className="scanner__output" />}
      </div> */}
    </div>
  );
};

export default Scanner;
