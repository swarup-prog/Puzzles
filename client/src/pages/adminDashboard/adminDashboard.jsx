import { useState } from "react";
import Tab from "./content/Tab";
import AddProductForm from "./content/AddProductForm";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Orders");

  const handleTabClick = (tabTitle) => {
    setActiveTab(tabTitle);
  };

  return (
    <div style={styles.mainContainer}>
      {/* Sider  */}
      <section style={styles.tabsCotainer}>
        <Tab
          title="Orders"
          onClick={handleTabClick}
          isActive={activeTab === "Orders"}
        />
        <Tab
          title="Add Products"
          onClick={handleTabClick}
          isActive={activeTab === "Add Products"}
        />
        <Tab
          title="Reviews"
          onClick={handleTabClick}
          isActive={activeTab === "Reviews"}
        />
      </section>

      {/* Content  */}
      <section style={styles.detailContainer}>
        {activeTab === "Orders" && <div>Orders</div>}
        {activeTab === "Add Products" && <AddProductForm />}
        {activeTab === "Reviews" && <div>Reviews</div>}
      </section>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  mainContainer: {
    display: "flex",
    padding: "20px 165px 0 165px",
  },

  tabsCotainer: {
    display: "flex",
    flex: 0.5,
    flexDirection: "column",
    height: "100vh",
  },

  sidebarTab: {
    display: "flex",
    justifyContent: "center",
    color: "#454545",
    fontWeight: 700,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "10px",
  },

  detailContainer: {
    display: "flex",
    flex: 4,
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: "40px",
    gap: 48,
  },
};
