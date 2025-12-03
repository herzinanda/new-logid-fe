export interface WorkProcessStep {
  title: string;
  description: string;
}

import React from "react";

const WorkProcessItem: React.FC<{
  step: WorkProcessStep;
  index: number;
  totalStep: number;
}> = ({ step, index, totalStep }) => {
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const currentStep = formatNumber(index + 1);
  const totalCountFormatted = `(${formatNumber(totalStep)})`;

  return (
    <>
      <article className="w-full py-10 border-b-[1.50px] border-base-grey-stroke hover:border-primary-orange transition-all flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex justify-start   items-center gap-6">
          <div className="justify-start">
            <span className="text-secondary-navy text-xl font-semibold leading-loose">
              {currentStep}
            </span>
            <span className="text-secondary-navy text-xl font-normal leading-loose">
              /
            </span>
            <span className="text-base-grey-stroke text-xl font-normal leading-loose">
              {totalCountFormatted}
            </span>
          </div>
          <i
            className="ph ph-arrow-right text-xl text-secondary-navy"
            aria-hidden="true"
          ></i>
        </div>
        <h3 className="self-stretch justify-start text-secondary-navy text-2xl font-medium leading-tight">
          {step.title}
        </h3>
        <p className="self-stretch justify-start text-base-grey text-base font-normal leading-relaxed">
          {step.description}
        </p>
      </article>
    </>
  );
};

export default WorkProcessItem;
