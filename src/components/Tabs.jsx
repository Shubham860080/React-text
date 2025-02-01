import { useState } from "react";

const tabs = ["Home", "About", "Contact"];

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-2 ${activeTab === index ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        <p>Content for {tabs[activeTab]}</p>
      </div>
    </div>
  );
}

export default Tabs;
