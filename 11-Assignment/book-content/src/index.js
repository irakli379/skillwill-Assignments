import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      image="https://img.wattpad.com/cover/114372045-288-k746281.jpg"
      title="ვეფხისტყაოსანი"
      author="შოთა რუსთაველი"
      description="ვეფხისტყაოსანი — XII საუკუნის ქართველი პოეტის, შოთა რუსთაველის ჩვენამდე მოღწეული ერთადერთი პოემა. შედგება პროლოგის, ძირითადი ნაწილისა და ეპილოგისაგან. შინაარსის მხრივ, ვეფხისტყაოსანი რთული ნაწარმოებია; აქ ორი პარალელური ამბავია მოთხრობილი — არაბეთისა და ინდოეთისა, თუმცა ორივე მათგანი ერთმანეთთან სიუჟეტურად დაკავშირებულია. პოემა მდიდარია პერსონაჟებით. დაწერილია შაირის სტილში, თექვსმეტმარცვლიანი საზომით."
      characters={[
        "ტარიელი",
        "ავთანდილი",
        "ფრიდონი",
        "თინათინი",
        "ნესტან-დარეჯანი",
      ]}
    />
  </React.StrictMode>
);
