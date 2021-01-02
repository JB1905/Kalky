import { useState, useEffect, useRef, useCallback } from 'react';

const pixelRatio = window.devicePixelRatio || 1;

function getResizedCanvas(canvas: HTMLCanvasElement, newWidth: number, newHeight:number) {
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext('2d');
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}

function generateDownload(previewCanvas: HTMLCanvasElement, crop:any) {
  if (!crop || !previewCanvas) {
    return;
  }

  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement('a');

      anchor.download = 'cropPreview.png';

      anchor.href = URL.createObjectURL(blob);

      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    'image/png',
    1
  );
}

export const useImageCrop = () => {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener('load', () => setUpImg(reader.result));

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    ctx.imageSmoothingQuality = 'high';

    ctx!.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  return {
    upImg,
    setUpImg,
    onLoad,
    crop,
    setCrop,
    setCompletedCrop,
  };
};
