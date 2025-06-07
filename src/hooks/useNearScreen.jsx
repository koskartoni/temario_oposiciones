import { useEffect, useState, useRef } from 'react';
export default function useNearScreen({ once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef(null);
  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        if (once) observer.disconnect();
      } else {
        if (!once) setShow(false);
      }
    };
    const observer = new IntersectionObserver(onChange, { rootMargin: '100px' });
    if (fromRef.current) observer.observe(fromRef.current);
    return () => observer.disconnect();
  }, [once]);
  return { isNearScreen, fromRef };
}