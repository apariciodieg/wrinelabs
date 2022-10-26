import Nav from "./Nav";
import Footer from "./Footer";



const Layout = ({ children }) => {
    return (
      <div>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </div>
    );
  };
  
  export default Layout;