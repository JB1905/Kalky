import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

import { useScanner } from 'hooks/useScanner';
import { useImageCrop } from 'hooks/useImageCrop';

import './Scanner.scss';

const Scanner = () => {
  const { getTextFromImage, progress, output } = useScanner();

  const {
    upImg,
    setUpImg,
    onLoad,
    crop,
    setCrop,
    setCompletedCrop,
  } = useImageCrop();

  return (
    <div className="scanner">
      <div
        className="scanner__progress"
        style={{ width: `${progress * 100}%` }}
      />

      <input
        type="file"
        className="scanner__source"
        accept="image/png, image/jpeg"
        onChange={(e) => setUpImg(e.target.files![0].path)}
      />

      {upImg ? (
        <>
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          />

          <button onClick={getTextFromImage}>Get text</button>
        </>
      ) : (
        <p className="data__empty">Load image</p>
      )}

      <div className="scanner__content">
        {output && <textarea value={output} className="scanner__output" />}
      </div>
    </div>
  );
};

export default Scanner;
