import React from "react";

function Footer(){
    const d=new Date().getFullYear();
    return <footer>
    <p>Copyright &copy; {d}</p>
    </footer>;
}
export default Footer;