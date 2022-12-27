import {useState, createContext} from "react";

const Page = createContext();

const PageProvider = ({children}) => {

    const [page, setPage] = useState(0);
    const [translate, setTranslate] = useState(0);

    const page_1 = () => {
        setPage(1);
    }

    const page_0 = () => {
        setPage(0);
    }
    const page_2 = () => {
        setPage(2);
    }
    const page_3 = () => {
        setPage(3);
    }
    const en_page = () => {
      setTranslate(1);
    }
    const vi_page = () => {
      setTranslate(0);
    }

    const value = {
        page,
        page_1,
        page_0,
        page_2,
        page_3,
        translate,
        en_page,
        vi_page
    }
    return (
        <Page.Provider value={value}>
            {children}
        </Page.Provider>

    )
}
export {Page, PageProvider}