import React from "react";

function Footer(){
   

 const CurrentYear = new Date().getFullYear();
 return (
<p>
    <footer>
    copyright Ⓒ {CurrentYear}
    </footer>
</p>
    );


}



export default Footer;