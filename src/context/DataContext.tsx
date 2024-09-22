import { createContext, useState } from "react";
import { Welcome } from "../service/Types";



// type InitialStateTypes = {
//   dataLazy:Welcome[],
//   dataInfinity:Welcome[],
//   dataPagination:[],

// }

// const initialState:InitialStateTypes = {
//     dataLazy:[],
//     dataInfinity:[],
//     dataPagination:[]
// }

// const reducer = (state,action ) =>{
//     action.type
// }

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  data: Welcome[];
  setData: React.Dispatch<React.SetStateAction<Welcome[]>>;
};

// Inicialmente, el contexto es un objeto con el array vacío y una función vacía
const ThemeContext = createContext<ThemeContextType>({
  data: [],
  setData: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProviderProps): JSX.Element => {
  const [data,setData] = useState<Welcome[]>([])

  return (
    <ThemeContext.Provider value={{data,setData }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
