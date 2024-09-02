

const  = ({ className="" }) => {
  return (
    <div className={`relative w-full overflow-hidden shrink-0 flex flex-row items-center justify-center ${className}`}>
      <div className="h-4 w-4 relative overflow-hidden shrink-0">
        <img className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full" alt="" />
        <div className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] flex flex-col items-start justify-start gap-[1.5px]">
          <div className="flex flex-row items-start justify-start gap-[1.5px]">
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.5px]">
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.5px]">
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
            <div className="h-[3px] w-[3px] relative bg-gray-light" />
          </div>
        </div>
      </div>
    </div>);
};

export default ;
