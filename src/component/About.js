import React from "react";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <h3 id="h3" style={{ padding: "50px", textAlign: "center" }}>
      {t("welcome")}
    </h3>
  );
}
export default About;
