import Colors from "@/contants/Colors";
import React from "react";

const SectionHeader = () => {
  return (
    <div className="py-5">
      <h3 className="text-2xl text-center text-white font-bold">
        Explore
        <span style={styles.span}> Programs</span>
      </h3>
      <h1 className="text-white text-center text-4xl">
        Why Should Choose Adacode ?
      </h1>
    </div>
  );
};

const styles = {
  span: {
    color: Colors.primary,
  },
};

export default SectionHeader;
