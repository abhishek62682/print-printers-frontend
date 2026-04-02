import { useEffect, useState } from 'react';

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2000);
    const t2 = setTimeout(() => setVisible(false), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`pp-loader ${fadeOut ? 'pp-loader--out' : ''}`}>
      <img
        src="/logo.jpeg"
        alt="Print Printers"
        className="pp-loader__logo"
      />
      <div className="pp-loader__bar-wrap">
        <div className="pp-loader__bar" />
      </div>
    </div>
  );
};

export default PageLoader;