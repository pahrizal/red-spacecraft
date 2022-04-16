import React, { FC } from "react";

interface Props {
  label: string;
  value?: string | number;
}
const StatRow: FC<Props> = ({ label, value }) => {
  return (
    <div className="font-exo text-md text-yellow-600 flex flex-row flex-grow items-center justify-between pr-6 border-b border-slate-800">
      <small className="text-white font-ibm self-start">{label}</small>
      <p className="text-sm font-ibm text-right self-start">{value}</p>
    </div>
  );
};

export default StatRow;
