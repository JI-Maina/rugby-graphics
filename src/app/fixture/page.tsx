import Image from "next/image";
import React from "react";

const HalftimePage = () => {
  return (
    <main className="pt-16 relative">
      <div className="absolute right-8 top-8">
        <Image
          src="/kawowo-colored.jpg"
          alt="kawowo"
          height={150}
          width={150}
        />
      </div>

      <div className="w-[590px] mx-auto relative">
        <h1 className="text-sm font-bold text-center uppercase m-8">
          full time
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] flex justify-center items-center border rounded-lg bg-blue-400">
          <Image src="/nile-special.png" alt="nile" height={60} width={60} />
        </div>

        <div className="flex border rounded-full bg-red-500">
          <div className="w-[60px] flex items-center justify-center text-white font-bold text-2xl">
            33
          </div>
          <div className="bg-white w-[470px] p-4 flex justify-between font-bold text-blue-800 text-xl uppercase">
            <div>Eagles</div>
            <div>Rams</div>
          </div>
          <div className="w-[60px] flex items-center justify-center text-white font-bold text-2xl">
            31
          </div>
        </div>
      </div>

      <div className="w-[480px] mx-auto">
        <h1 className="text-xl font-bold text-center uppercase m-3">
          Match Statistics
        </h1>

        <StatRow hStat={102} title="passes" aStat={92} />
        <StatRow hStat={88} title="carries" aStat={98} />
        <StatRow hStat={8} title="visit in 22" aStat={7} />
        <StatRow hStat={6} title="turnovers won" aStat={4} />
        <StatRow hStat={15} title="handling errors" aStat={12} />
        <StatRow hStat="66 / 14" title="tackles made/missed" aStat="70 / 20" />
        <StatRow hStat={15} title="penalties" aStat={8} />
        <StatRow hStat="7 / 1" title="lineouts won/lost" aStat="5 / 0" />
        <StatRow hStat="9 / 0" title="scrums won/lost" aStat="10 / 1" />

        <div className="flex justify-end">
          <div className="flex gap-1 justify-center items-center">
            <div className="text-center font-semibold italic">Insights by:</div>
            <div className="mt-4">
              <Image
                src="/tisini.png"
                alt="Tisini"
                height={150}
                width={150}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HalftimePage;

const StatRow = ({
  hStat,
  title,
  aStat,
}: {
  hStat: string | number;
  title: string;
  aStat: string | number;
}) => {
  return (
    <div className="flex mb-1">
      <div className="w-1/3 border text-center font-semibold text-blue-800 bg-white">
        {hStat}
      </div>
      <div className="w-1/3 border mx-1 text-center flex justify-center items-center text-nowrap text-xs text-white font-bold uppercase bg-blue-400">
        {title}
      </div>
      <div className="w-1/3 border text-center font-semibold text-blue-800 bg-white">
        {aStat}
      </div>
    </div>
  );
};
