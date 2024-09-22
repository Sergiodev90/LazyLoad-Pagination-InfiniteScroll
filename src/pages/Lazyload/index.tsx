import { useContext, useEffect, useRef, useState } from "react";
import { getCats } from "../../service";
import { ThemeContext } from "../../context/DataContext";
import { LazyLoadImages } from "../../components/LazyLoadImages";
import './Lazyloader.css';

function LazyloadPage(): JSX.Element {
  const [click, setClick] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { data, setData } = useContext(ThemeContext);
  const FinalNode = useRef<HTMLDivElement | null>(null)

  const handleClick = (): void => {
    setClick(true);
    if (data.length === 0) {
      setLoading(true);
    }
  };
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting && data.length !== 0){
                getCats().then((fetchedData) => {
                    setData((prevData) => [...prevData, ...fetchedData]);
                    setLoading(false)
                });
            }
        })
    },{})



    if(FinalNode.current){
        observer.observe(FinalNode.current)
    }

    return () =>{
        if (FinalNode.current) observer.unobserve(FinalNode.current); // Limpia el observer

    }
  })

  useEffect(() => {
    if (click) {
      getCats().then((fetchedData) => {
        setData((prevData) => [...prevData, ...fetchedData]);
        setLoading(false);
      });
    }
    setClick(false)
  }, [click, setData]);

  return (
    <>
      <h3>Generate Random Images To see</h3>
      <button onClick={handleClick}>
        {!data.length ? 'Start' : 'Get More'}
      </button>
      <div className="LazyloaderContainer">
        {loading && <h1>Loading ...</h1>}
        {data.map((item) => (
          <LazyLoadImages image={item.url} id={item.id} key={item.id} />
        ))}
      </div>
      <div ref={FinalNode}></div>

      
    </>
  );
}

export default LazyloadPage;
