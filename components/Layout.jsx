import Header from "./Header";
import Footer from "./Footer";
import Provider from "@/app/Provider";

export default function Layout({ children }) {
    return (
        <>
            <Provider>
                <Header />
                <main>{children}</main>
                <Footer/>
            </Provider>
        </>
    )
}