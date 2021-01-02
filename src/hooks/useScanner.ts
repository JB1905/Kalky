import { useState, useEffect, useMemo } from 'react';
import { createWorker } from 'tesseract.js';

export const useScanner = () => {
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState(null);

  const worker = useMemo(() => createWorker({
    logger: m => console.log(m),
  }), [])

  const getTextFromImage = () => {};

  // useEffect(() => {
  //   (async () => {
  //     await worker.load();

  //     await worker.loadLanguage('eng');

  //     await worker.initialize('eng');

  //     const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');

  //     // console.log(text);
  //     await worker.terminate();
  //   })();
  // }, [])

  return {
    getTextFromImage,
    progress,
    output,
  };
};
