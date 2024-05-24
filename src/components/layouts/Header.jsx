import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import GradientBtn from "../common/GradientBtn";
import { List } from "@phosphor-icons/react";
import { useDisconnect } from "wagmi";
import { useAccount } from "wagmi";

function Header(props) {
  const { open, close } = useWeb3Modal();

  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const handleConectWallet = () => {
    if (isConnected) {
      disconnect();
    } else {
      open();
    }
  };

  const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);

  return (
    <>
      <div className="bg-black/70 py-2 sm:py-5 absolute top-0 left-0 w-full z-30 ">
        <div className="container w-11/12 mx-auto flex justify-between items-center ">
          <div className="flex justify-start items-center gap-2">
            <List
              className="text-white font-bold block sm:hidden"
              size={20}
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            />
            <img src="/logo.png" alt="logo" className=" h-14 sm:h-20" />
          </div>

          <div className="hidden sm:block ">
            <ul className="text-white font-bold flex gap-10  ">
              <li className="cursor-pointer">Mint NFT</li>
              <li className="text-[#00FF93] cursor-pointer">Airdrop</li>
              <li className="cursor-pointer">Stake</li>
            </ul>
          </div>

          <GradientBtn
            onClick={() => handleConectWallet()}
            className="text-base sm:text-3xl"
          >
            {isConnected ? (
              <p>
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            ) : (
              <p> Connect</p>
            )}
          </GradientBtn>
        </div>
      </div>

      <div
        className={`bg-black/80 block sm:hidden absolute top-0 left-0 w-full h-full z-20
        ${isShowMobileMenu ? "block" : "hidden"}
        `}
      >
        <div className="container w-11/12 mx-auto flex flex-col justify-center items-center h-full gap-10">
          <ul className="text-white font-bold flex flex-col gap-10 items-center">
            <li>Mint NFT</li>
            <li className="text-[#00FF93]">Airdrop</li>
            <li>Stake</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
