import GroupComponent from "../components/GroupComponent";
import TestimonialOne from "../components/TestimonialOne";
import CallForAction from "../components/CallForAction";

const CryptoPage = () => {
  return (
    <div className="w-full relative bg-midnightblue-200 overflow-hidden flex flex-col items-start justify-start pt-[73px] pb-[79px] pl-[181px] pr-[179px] box-border gap-[49px] leading-[normal] tracking-[normal] text-left text-xl text-powderblue font-sub-header mq450:pl-5 mq450:pr-5 mq450:box-border gap-6 mq750:pl-[90px] mq750:pr-[89px] mq750:box-border">
      <div className="w-full h-[15px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-2xl [background:linear-gradient(-83.27deg,_rgba(134,_207,_208,_0.69),_rgba(66,_64,_207,_0.69))]" />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pl-[7px] pr-0 box-border max-w-full text-left text-68xl text-white font-h2">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-xl text-white font-sub-header">
            <a className="[text-decoration:none] relative leading-[28px] uppercase font-bold text-[inherit] inline-block min-w-[87px] z-[2]">
              krypto
            </a>
            <nav className="m-0 h-7 w-[502px] relative max-w-full text-left text-xl text-white font-sub-header">
              <a className="[text-decoration:none] absolute top-[0px] left-[0px] leading-[28px] text-[inherit] inline-block w-[57px] min-w-[57px] z-[3]">
                about
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[134px] leading-[28px] text-[inherit] inline-block w-[65px] min-w-[65px] z-[3]">
                pricing
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[276px] leading-[28px] text-[inherit] inline-block w-[73px] min-w-[73px] z-[3]">
                contact
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[426px] leading-[28px] text-[inherit] inline-block w-[76px] min-w-[76px] whitespace-nowrap z-[3]">
                buy nfts
              </a>
            </nav>
          </header>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[15px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[341px] max-w-full mq750:min-w-full">
                <div className="w-[510px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <img
                      className="h-[1052px] w-[1288px] absolute !m-[0] right-[-742px] bottom-[-590px] z-[1]"
                      alt=""
                      src="/bg-circles.svg"
                    />
                    <h1 className="m-0 flex-1 relative text-inherit leading-[100%] capitalize font-bold font-[inherit] inline-block max-w-full z-[2] mq450:text-[26px] mq450:leading-[35px] mq750:text-[43px] mq750:leading-[52px]">
                      discover and collect rare NFTs
                    </h1>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[25.7px] max-w-full text-lg">
                  <div className="w-[389px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                    <div className="flex-1 relative leading-[27.5px] inline-block max-w-full z-[2]">
                      <p className="m-0">
                        The most secure marketplace for buying
                      </p>
                      <p className="m-0">and selling unique crypto assets.</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq750:flex-wrap">
                    <button className="cursor-pointer [border:none] py-[19.5px] px-[67px] bg-cornflowerblue-100 flex-1 rounded-41xl flex flex-row items-start justify-end box-border min-w-[166px] whitespace-nowrap z-[2] hover:bg-cornflowerblue-200">
                      <div className="h-[66.3px] w-[255px] relative rounded-41xl bg-cornflowerblue-100 hidden" />
                      <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-header text-white text-left inline-block min-w-[111.4px] z-[1]">
                        buy nfts
                      </div>
                    </button>
                    <button className="cursor-pointer border-powderblue border-[1px] border-solid pt-[18px] pb-[17px] pl-[70px] pr-[68px] bg-[transparent] flex-[0.9504] rounded-41xl box-border flex flex-row items-start justify-start min-w-[166px] whitespace-nowrap z-[2] hover:bg-cadetblue-200 hover:border-cadetblue-100 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                      <div className="h-[66.3px] w-[255px] relative rounded-41xl border-powderblue border-[1px] border-solid box-border hidden" />
                      <div className="relative text-xl tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-header text-white text-left inline-block min-w-[117px] z-[1]">
                        SeLl nfts
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="h-[520px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[341px] z-[2] mq750:min-w-full"
                loading="lazy"
                alt=""
                src="/objectother-07@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pl-2.5 pr-[5px] box-border max-w-full text-left text-xl text-white font-sub-header">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14.1px] max-w-full">
          <div className="w-[166px] relative tracking-[0.1em] leading-[28.2px] uppercase font-semibold inline-block shrink-0 z-[2] mq450:text-base mq450:leading-[22px]">
            Featured on
          </div>
          <GroupComponent />
        </div>
      </section>
      <section className="w-[1061px] flex flex-row items-start justify-start pt-0 px-0.5 pb-3.5 box-border max-w-full text-left text-xl text-powderblue font-sub-header">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15px] max-w-full">
            <img
              className="h-[415px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[336px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/objectother-18@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[341px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="w-[137px] relative tracking-[0.1em] leading-[27.5px] uppercase font-semibold inline-block mq450:text-base mq450:leading-[22px]">
                      ANALYTICS
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-40xl text-white font-h2">
                      <h1 className="m-0 self-stretch relative text-inherit leading-[100%] capitalize font-bold font-[inherit] mq450:text-16xl mq450:leading-[35px] mq750:text-28xl mq750:leading-[47px]">
                        built-in analytics to track your nfts
                      </h1>
                      <div className="w-[427px] relative text-lg leading-[27.5px] inline-block max-w-full">
                        Use our built-in analytics dashboard to pull valuable
                        insights and monitor the value of your Krypto portfolio
                        over time.
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[19px] px-[65px] bg-cornflowerblue-100 rounded-41xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-cornflowerblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-header text-white text-left">
                    VIEW OUR PRICING
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px] text-white font-h2">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[54px] box-border min-w-[341px] min-h-[393px] max-w-full mq450:pb-[35px] mq450:box-border mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[50.6px] max-w-full gap-[25px]">
                <div className="flex flex-row items-start justify-start py-0 px-2 text-powderblue font-sub-header">
                  <div className="relative tracking-[0.1em] leading-[27.5px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
                    get our app
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pl-2 pr-0 box-border max-w-full text-40xl">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[100%] capitalize font-bold font-[inherit] inline-block max-w-full mq450:text-16xl mq450:leading-[35px] mq750:text-28xl mq750:leading-[47px]">
                    browse nfts from your smartphone
                  </h1>
                </div>
                <div className="w-[435px] flex flex-col items-start justify-start gap-[27px] max-w-full text-lg">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full">
                    <div className="flex-1 relative leading-[27.5px] inline-block max-w-full">
                      Our Krypto app is the easiest way to keep track of your
                      assets when you’re on the go.
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[19px] px-[62px] bg-cornflowerblue-100 rounded-41xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-cornflowerblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-header text-white text-left">
                      Download on ios
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className="h-[482px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[343px] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/objectother-17@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start gap-12 max-w-full text-left text-xl text-powderblue font-sub-header gap-6 mq1225:flex-wrap">
        <img
          className="w-[484px] relative max-h-full object-cover max-w-full mq1225:flex-1"
          loading="lazy"
          alt=""
          src="/objectother-12@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[351px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full gap-4">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[54px] max-w-full gap-[27px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="w-[162px] relative tracking-[0.1em] leading-[27.5px] uppercase font-semibold inline-block mq450:text-base mq450:leading-[22px]">
                    24/7 ACCEss
                  </div>
                  <h1 className="m-0 relative text-[51px] leading-[100%] capitalize font-bold font-h2 text-white mq450:text-[31px] mq450:leading-[31px] mq750:text-[41px] mq750:leading-[41px]">
                    <p className="m-0">sell your NFTs from</p>
                    <p className="m-0">anywhere at any time</p>
                  </h1>
                </div>
                <div className="w-[427px] relative text-lg leading-[27.5px] font-h2 text-white inline-block max-w-full">
                  Use our built-in analytics dashboard to pull valuable insights
                  and monitor the value of your Krypto portfolio over time.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[19px] px-[65px] bg-cornflowerblue-100 rounded-41xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-cornflowerblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-header text-white text-left">
                VIEW OUR PRICING
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[61px] pl-0 pr-0.5 box-border max-w-full">
        <div className="w-[478px] flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
            <div className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
              testimonials
            </div>
          </div>
          <h1 className="m-0 relative text-40xl leading-[100%] capitalize font-bold font-h2 text-white text-center mq450:text-16xl mq450:leading-[35px] mq750:text-28xl mq750:leading-[47px]">
            <p className="m-0">read what others</p>
            <p className="m-0">have to say</p>
          </h1>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[65px] pl-[7px] pr-2 box-border max-w-full">
        <TestimonialOne />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-12 pl-[7px] pr-2 box-border max-w-full mq450:pb-[31px] mq450:box-border">
        <CallForAction />
      </section>
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-2 box-border max-w-full text-left text-base text-white font-sub-header">
        <div className="flex-1 flex flex-row items-start justify-start gap-[15px] max-w-full mq1225:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start gap-2 min-w-[458px] max-w-full mq750:flex-wrap mq1050:min-w-full">
            <div className="flex-1 relative text-3xl uppercase font-semibold inline-block min-w-[67px] mq450:text-lg">
              krypto
            </div>
            <div className="flex-[0.9593] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border gap-[19px] min-w-[112px] mq450:flex-1">
              <div className="self-stretch relative font-semibold">krypto</div>
              <div className="w-[101px] relative leading-[31px] inline-block">
                <p className="m-0">Home</p>
                <p className="m-0">About</p>
                <p className="m-0">Buy NFTs</p>
                <p className="m-0">Sell NFTs</p>
              </div>
            </div>
            <div className="flex-[0.9773] flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border gap-7 min-w-[114px] mq450:flex-1">
              <div className="self-stretch relative font-semibold">Market</div>
              <div className="w-[137px] h-[115px] relative leading-[31px] inline-block shrink-0">
                <p className="m-0">Browse NFTs</p>
                <p className="m-0">Buy NFTs</p>
                <p className="m-0">Sell NFTs</p>
              </div>
            </div>
            <div className="w-[161px] flex flex-col items-start justify-start gap-[19px]">
              <div className="self-stretch relative font-semibold">contact</div>
              <div className="w-[94px] relative leading-[31px] inline-block">
                <p className="m-0">Email</p>
                <p className="m-0">LinkedIn</p>
                <p className="m-0">Instagram</p>
                <p className="m-0">Twitter</p>
              </div>
            </div>
          </div>
          <div className="w-[345px] flex flex-col items-start justify-start gap-[35px] min-w-[345px] max-w-full text-3xl gap-[17px] mq750:min-w-full mq1225:flex-1">
            <div className="w-[290px] relative font-semibold inline-block mq450:text-lg">
              join our newsletter
            </div>
            <div className="self-stretch rounded-xl bg-midnightblue-100 flex flex-row items-start justify-between pt-px pb-0.5 pl-5 pr-0 box-border max-w-full gap-5 text-base text-gray mq450:flex-wrap mq450:pr-5 mq450:box-border">
              <div className="h-10 w-[345px] relative rounded-xl bg-midnightblue-100 hidden max-w-full" />
              <div className="w-[113px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[31px] z-[1]">
                  Email Address
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[4.5px] px-[34px] bg-cornflowerblue-100 rounded-41xl flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-200">
                <b className="relative text-[15px] leading-[28px] capitalize inline-block font-sub-header text-white text-left min-w-[49px]">
                  Submit
                </b>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CryptoPage;
