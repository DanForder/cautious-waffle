import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
