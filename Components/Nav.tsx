import React from "react";

type Props = {};

function Nav({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(!openSidebar);
    setOverlay(!overlay);
  };

  const handleCloseSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(false);
    setOverlay(false);
  };

  // loop over data.json planet names- each planet has an onClick that makes a fetch call to the json data.json for the relevant planet
  return (
    <nav>
      <h1>The Planets</h1>
      <ul>{<li></li>}</ul>
    </nav>
  );
}

export default Nav;
