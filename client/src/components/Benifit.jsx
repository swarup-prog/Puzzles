const Benifit = ({ icon: Icon, title, desc }) => {
  return (
    <div style={styles.container}>
      <Icon color="#024E82" size="30px" style={styles.icon} />
      <div style={styles.details}>
        <span style={styles.title}>{title}</span>
        <span style={styles.desc}>{desc}</span>
      </div>
    </div>
  );
};

export default Benifit;

const styles = {
  container: {
    display: "flex",
    gap: 20,
  },

  icon: {
    windth: "30px",
    height: "28px",
  },

  details: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  title: {
    fontFamily: "Baloo 2",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "25.18px",
  },

  desc: {
    color: "#555555",
    width: "189px",
    height: "39px",
    lineHeight: "19.2px",
  },
};
