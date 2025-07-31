import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
	  <div>
		<p>Copyright ⓒ {year} Parteek</p>
       
        <a style={{ textDecoration: 'none' }} href="" class="text-dark link"><p></p></a>
      </div>		
    </footer>
  );
}

export default Footer;
