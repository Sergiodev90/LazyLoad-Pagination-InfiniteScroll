import { useEffect, useRef, useState } from "react";

interface Props {
  image: string;
  id: string;
}

export const LazyLoadImages = (props: Props): JSX.Element => {
  const [src, setSrc] = useState<string>(""); // Inicialmente vacío
  const node = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
          if (entry.isIntersecting) {
            // Cuando la imagen está en el viewport, se asigna el src real
            setSrc(props.image);
            observer.unobserve(entry.target); // Deja de observar esta imagen
          }
        });
      },
      {
        root: null,
        rootMargin: "100px", // Carga la imagen un poco antes de que entre al viewport
        threshold: 0.1, // Carga cuando el 10% de la imagen es visible
      }
    );

    if (node.current) {
      observer.observe(node.current); // Observa la imagen actual
    }

    return () => {
      if (node.current) observer.unobserve(node.current); // Limpia el observer
    };
  }, [props.image]);

  return <img ref={node} src={src} alt={props.id} style={{ width: '500px', height: '500px' }} />;
};
