import PropTypes from "prop-types";

const TestimonialOne = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-center gap-3 max-w-full text-left text-xl text-white font-sub-header mq1225:flex-wrap ${className}`}
    >
      <div className="flex-[0.9829] flex flex-col items-start justify-start py-0 pl-0 pr-1.5 box-border min-w-[263px] max-w-full mq450:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-32 w-32 absolute !m-[0] top-[-64px] left-[108px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className="flex-1 rounded-3xl bg-midnightblue-100 flex flex-col items-start justify-start pt-[84px] px-[25px] pb-[38px] box-border gap-7 max-w-full">
            <div className="w-[345px] h-[281px] relative rounded-3xl bg-midnightblue-100 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[76px] pr-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold z-[1] mq450:text-base mq450:leading-[22px]">
                olivia cole
              </div>
            </div>
            <div className="self-stretch relative text-lg tracking-[0.02em] leading-[25.5px] font-h2 text-center z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[259px] max-w-full">
        <img
          className="h-32 w-32 absolute !m-[0] top-[-64px] left-[101px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-1@2x.png"
        />
        <div className="flex-1 rounded-3xl bg-midnightblue-100 flex flex-col items-start justify-start pt-[84px] px-[25px] pb-[38px] box-border gap-7 max-w-full">
          <div className="w-[345px] h-[281px] relative rounded-3xl bg-midnightblue-100 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[76px] pr-[77px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold z-[1] mq450:text-base mq450:leading-[22px]">
              evan White
            </div>
          </div>
          <div className="self-stretch relative text-lg tracking-[0.02em] leading-[25.5px] font-h2 text-center z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[259px] max-w-full">
        <img
          className="h-32 w-32 absolute !m-[0] top-[-64px] right-[108px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-2@2x.png"
        />
        <div className="flex-1 rounded-3xl bg-midnightblue-100 flex flex-col items-start justify-start pt-[84px] px-[25px] pb-[38px] box-border gap-7 max-w-full">
          <div className="w-[345px] h-[281px] relative rounded-3xl bg-midnightblue-100 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[76px] pr-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold z-[1] mq450:text-base mq450:leading-[22px]">
              olivia cole
            </div>
          </div>
          <div className="self-stretch relative text-lg tracking-[0.02em] leading-[25.5px] font-h2 text-center z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  className: PropTypes.string,
};

export default TestimonialOne;
