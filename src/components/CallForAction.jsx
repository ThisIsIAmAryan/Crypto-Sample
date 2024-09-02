import PropTypes from "prop-types";

const CallForAction = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-2xl [background:linear-gradient(-83.27deg,_rgba(134,_207,_208,_0.69),_rgba(66,_64,_207,_0.69))] flex flex-col items-center justify-start pt-[43px] pb-9 pl-[27px] pr-5 box-border gap-[49px] max-w-full text-left text-xl text-black font-sub-header mq450:pt-7 mq450:pb-[23px] mq450:box-border gap-6 ${className}`}
    >
      <div className="w-[1065px] h-[378px] relative rounded-2xl [background:linear-gradient(-83.27deg,_rgba(134,_207,_208,_0.69),_rgba(66,_64,_207,_0.69))] hidden max-w-full" />
      <div className="w-[474px] flex flex-col items-start justify-start gap-[39px] max-w-full gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7">
          <div className="relative tracking-[0.1em] leading-[27.5px] uppercase font-semibold z-[1] mq450:text-base mq450:leading-[22px]">
            are you ready?
          </div>
        </div>
        <h1 className="m-0 self-stretch relative text-40xl leading-[100%] capitalize font-bold font-h2 text-white text-center z-[1] mq450:text-16xl mq450:leading-[35px] mq750:text-28xl mq750:leading-[47px]">
          <p className="m-0">be a part of the</p>
          <p className="m-0">next big thing</p>
        </h1>
      </div>
      <div className="w-[474px] flex flex-row items-start justify-start py-0 pl-[61px] pr-[68px] box-border max-w-full mq750:pl-[30px] mq750:pr-[34px] mq750:box-border">
        <button className="cursor-pointer [border:none] py-[19px] px-5 bg-black flex-1 rounded-41xl flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-darkslategray">
          <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-header text-white text-left">
            GET STARTED
          </div>
        </button>
      </div>
    </div>
  );
};

CallForAction.propTypes = {
  className: PropTypes.string,
};

export default CallForAction;
