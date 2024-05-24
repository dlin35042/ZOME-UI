import React from "react";

function CodeOfHodl(props) {
  return (
    <div>
      <div className="text-xl sm:text-3xl font-semibold text-white text-center font-berkshire ">
        <p>
          You'll get
          <br />
          {props.airdropData}
          <br />
          CODE of HODL
        </p>
      </div>
      <div className="gradient-box mt-6 sm:mt-10 mx-3 sm:mx-20 ">
        <p className="p-6 text-base ">
          Users who participated in the zome public sale but did not receive an
          NFT allocation will share all zome sales revenue in proportion to the
          amount they invested
        </p>
      </div>
    </div>
  );
}

export default CodeOfHodl;
