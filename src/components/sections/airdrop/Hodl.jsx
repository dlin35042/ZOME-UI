import React from "react";

function Hodl(props) {
  // End date is UTC 2 am on May 24 2024
  const endDate = new Date("2024-05-24T02:00:00Z");
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const difference = +endDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const list = [
    {
      id: 1,
      text: "Event Duration: The Event Will Ru For 15 Days, From May 9th At 2:00 AM UTC To May 24th at 2:00 AM UTC.",
    },
    {
      id: 2,
      text: "Airdrop Distribution: The Airdrop Will Be Based On The Trading Volume And Listings Of Zome NFTs.",
    },
    {
      id: 3,
      text: "Listing Rewards: Users Whose Listings Rank In The Top 10% By Volume ( Number Of Listings Multiplied By The Amount) Will share 5% Of The Total Airdrop.",
    },
    {
      id: 4,
      text: "Trading Rewards: Traders Will Share 95% Of The Total Airdrop, Distributed I Proportion To Their Trading Volumes.",
    },
    {
      id: 5,
      text: "Eligible Markets: The Event Is Exclusive To The Opensea And OKX NFT Markets.",
    },
  ];

  return (
    <div>
      <div className="text-xl sm:text-4xl font-semibold text-white text-center font-berkshire ">
        <p>
          {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M{" "}
          {timeLeft.seconds}S
        </p>
      </div>
      <div className="gradient-box mt-6">
        <ul className=" p-4 sm:p-6 text-start flex flex-col gap-3 ">
          {list.map((item) => (
            <li key={item.id} className="flex justify-start gap-3 items-center">
              <div>
                <div className="text-[#00FF93]  font-[500] bg-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex justify-center items-center ">
                  {item.id}
                </div>
              </div>
              <div className="text-sm sm:text-base">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hodl;
