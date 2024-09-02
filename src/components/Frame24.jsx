

const  = ({ className="" }) => {
  return (
    <div className={`relative w-full flex flex-row items-start justify-start pt-0 px-4 pb-2 box-border text-left text-sm text-silver font-heebo ${className}`}>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <img className="h-4 w-4 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/insight-black-24dp-1.svg" />
            </div>
          </div>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px]">Insight</a>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[18px] gap-2 text-lightgray">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <img className="h-4 w-4 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/mis-black-24dp-1.svg" />
            </div>
          </div>
          <div className="relative inline-block min-w-[25px]">MIS</div>
        </div>
      </div>
    </div>);
};

export default ;
