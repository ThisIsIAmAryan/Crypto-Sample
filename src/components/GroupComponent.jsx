import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-6xs bg-slateblue flex flex-row items-start justify-between pt-[8.1px] pb-2 pl-[39px] pr-[37px] box-border shrink-0 max-w-full gap-5 z-[2] mq1050:flex-wrap ${className}`}
    >
      <div className="h-[87.7px] w-[1065px] relative rounded-6xs bg-slateblue hidden max-w-full" />
      <img
        className="h-[71.6px] w-[194px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="w-[173px] flex flex-col items-start justify-start pt-[21.2px] px-0 pb-0 box-border">
        <img
          className="self-stretch h-[26.2px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
      <div className="w-[69px] flex flex-col items-start justify-start pt-[16.1px] px-0 pb-0 box-border">
        <img
          className="self-stretch h-[39.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="w-[118px] flex flex-col items-start justify-start pt-[21.2px] px-0 pb-0 box-border">
        <img
          className="self-stretch h-[30.2px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
