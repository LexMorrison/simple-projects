import { useNavigate } from "react-router-dom";

import Button from "../../helpers/Button";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <header>
        <Button
          text={"Back to Main"}
          PressMe={goToMainPage}
          className="goBackBtn"
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
