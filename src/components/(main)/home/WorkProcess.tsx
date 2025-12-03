import { getTranslations } from "next-intl/server";
import React from "react";
import WorkProcessItem, { WorkProcessStep } from "./WorkProcessItem";

const MOCK_MESSAGES = {
  label: "How We Work",
  title: "Our Work Process",
  description: "A proven logistics workflow that ensures every shipment moves efficiently — from planning and coordination to delivery and performance optimization.",
  workProcessItem: [
    {
      title: "Consultation & Planning", 
      description: "We analyze your logistics needs, routes, and timelines to create tailored shipping strategies that maximize efficiency and minimize cost."
    },
    {
      title: "Execution & Coordination", 
      description: "Our team manages every operational detail — from cargo handling and customs clearance to multimodal transport coordination — ensuring smooth, on-time delivery."
    },
    {
      title: "Monitoring & Optimization", 
      description: "We continuously track your shipments and analyze performance data to enhance reliability, transparency, and future logistics efficiency."
    }
  ]
};


const WorkProcess = async () => {
    const t = await getTranslations('workProcess');

    const workProcessItem = t.raw('workProcessItem') as WorkProcessStep[] || [];

    const totalStep = workProcessItem.length;



  return (
    <>
      <section className="section-white" aria-labelledby="work-process-title">
        <div className="wrapper px-5 py-20 lg:px-20 lg:pt-28 lg:pb-20 flex flex-col lg:flex-row justify-start items-start gap-20">
          <div className="flex-1 flex flex-col justify-start items-start gap-10">
            <span className="label label-solid-orange" aria-label={t('label')}>
              {t('label')}
            </span>

            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <h2
                className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                id="work-process-title"
              >
                {t('title')}
              </h2>
              <p className="self-stretch justify-start text-base-grey text-lg font-normal leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>
          <div
            className="max-w-[608px] flex flex-col justify-start items-start"
            aria-label="Work process steps"
          >
            {
                workProcessItem.map((step, index) => (
                    <WorkProcessItem 
                        key={index}
                        step={step}
                        index={index}
                        totalStep={totalStep}
                    />
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
