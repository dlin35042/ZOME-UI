import React, { useEffect, useState } from "react";
import GradientBtn from "../components/common/GradientBtn";
import CodeOfHodl from "../components/sections/airdrop/CodeOfHodl";
import Hodl from "../components/sections/airdrop/Hodl";
import { toast } from "react-toastify";
import axios from "axios";
import { useAccount } from "wagmi";

function Airdrop(props) {
  const tabs = [
    {
      name: "CODE of HODL",
      slug: "code-of-hodl",
    },
    {
      name: "$HODL",
      slug: "hodl",
    },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].slug);

  const { address, isConnected } = useAccount();

  const [airdropData, setAirdropData] = useState(0);
  const [claiming, setClaiming] = useState(false);

  const fetchAirdropData = async () => {
    try {
      const response = await axios.get(
        `http://65.108.2.116:9010/http://65.108.2.116:8000/api/airdrop/${address}`
      );
      setAirdropData(response.data.amount);
    } catch (error) {
      console.error("Error fetching airdrop data:", error);
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      fetchAirdropData();
    }
  }, [isConnected, address]);

  const handleClaim = async () => {
    setClaiming(true);
    try {
      const response = await axios.post(
        `http://65.108.2.116:9010/http://65.108.2.116:8000/api/airdrop/${address}`
      );
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error claiming airdrop:", error);
    } finally {
      setClaiming(false);
    }
  };

  return (
    <div className="w-full h-full overflow-auto pt-24 sm:pt-48 ">
      <div className="max-w-3xl w-11/12 m-auto border-white border rounded-3xl p-6 sm:p-10">
        <div className="flex justify-center gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-2 sm:x-5 py-2 w-full text-nowrap italic font-bold text-xl sm:text-4xl border-b-2  ${
                activeTab === tab.slug
                  ? " text-white border-white "
                  : "text-white/90 border-transparent "
              }`}
              onClick={() => setActiveTab(tab.slug)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="pt-8">
          {activeTab === "code-of-hodl" ? (
            <CodeOfHodl airdropData={airdropData} />
          ) : (
            <Hodl />
          )}
        </div>
      </div>
      <div className="my-10">
        <div>
          <GradientBtn onClick={handleClaim} disabled={claiming}>
            <p className="italic text-2xl px-4 py-1 font-[800] ">
              {claiming ? "Claiming..." : "Claim"}
            </p>
          </GradientBtn>
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
