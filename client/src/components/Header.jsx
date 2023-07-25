const Header = ({ banner, pageTitle }) => {
  const styles = {
    banner: {
      backgroundImage: `url(${banner})`,
      height: "348px",
      display: "flex",
      alignItems: "flex-end",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },

    title: {
      color: "#FFFFFF",
      fontSize: "48px",
      margin: "0 0 70px 63px",
    },
  };

  return (
    <div style={styles.banner}>
      <span style={styles.title}>{pageTitle}</span>
    </div>
  );
};

export default Header;
