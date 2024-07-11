import React, { useEffect, useRef, useState } from 'react';
import ielts from '../../Assets/exam-logo/ielts.png';
import toefl from '../../Assets/exam-logo/toefl.png';
import duolingo from '../../Assets/exam-logo/duolingo.png';
import pearson from '../../Assets/exam-logo/pearson.png';
import gre from '../../Assets/exam-logo/gre.png';
import celpip from '../../Assets/exam-logo/celpip.png';
import logo_calc2 from '../../Assets/exam-logo/Mask group (1).png';
import crs from '../../Assets/exam-logo/crs.png';
import clb from '../../Assets/exam-logo/clb.png';
import svec from '../../Assets/exam-logo/svec.png';
import sw67 from '../../Assets/exam-logo/sw67.png';
import novascotianew from '../../Assets/exam-logo/nova scotia new.png';
import alberta1234 from '../../Assets/exam-logo/alberta 1234.png';
import britishcolumbia1234 from '../../Assets/exam-logo/british columbia 1234.png';
import manitoba1234 from '../../Assets/exam-logo/manitoba 1234.png';
import northwest134 from '../../Assets/exam-logo/northwest 134.png';
import ontario123 from '../../Assets/exam-logo/ontario 123.png';
import saskatchewan1234 from '../../Assets/exam-logo/saskatchewan 1234.png';
import yukon from '../../Assets/exam-logo/yukon.png';
import Instagram from '../../Assets/Instagram_logo.svg';
import Youtube from '../../Assets/youtube.png';
import Twitter from '../../Assets/Thread.jpg';

import LinkedIn from '../../Assets/LinkedIn.png';
import facebook from '../../Assets/Facebook.png';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../globalComponents/MobileContext/IsMobileContext';
import BannerPages from '../Pages/Banner/BannerPages';
import { Bounce } from 'react-reveal';

const ResourcesAndTools = () => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  const [hovering, setHovering] = useState({
    bc: false,
    anip: false,
    mpnp: false,
    mswop: false,
    nspnp: false,
    nt: false,
    pei: false,
    rnip: false,
    snip: false,
    onip: false,
  });

  // console.log(hovering);
  const calculatorData = [
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Ontario',
      image: ontario123,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Alberta',
      image: alberta1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'PNP point calculator',
      name: 'British Columbia',
      image: britishcolumbia1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#B09113', bg: '#B09113', text: '#FFFFFF' },
    },
    {
      description: 'Immigration Pilot points calculator',
      name: 'Rural and Northern',
      image: yukon,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'Skilled workers Overseas Program point calculator',
      name: 'Manitoba',
      image: manitoba1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Nova',
      image: novascotianew,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'Immigration Nominee Program point calculator',
      name: 'Saskatchewan',
      image: saskatchewan1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#116B37', bg: '#116B37', text: '#FFFFFF' },
    },

    {
      description: 'Point calculator',
      name: 'Northwest Territories',
      image: northwest134,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },

    {
      description: 'PNP expression of interest point calculator',
      name: 'Manitoba',
      image: manitoba1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },

    {
      description: 'PNP point calculator',
      name: 'Prince Edward island',
      image: britishcolumbia1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#B09113', bg: '#FFFFFF', text: '#B09113' },
    },
  ];
  const calculatorDataMobile = [
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Ontario',
      image: ontario123,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Alberta',
      image: alberta1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'PNP point calculator',
      name: 'British Columbia',
      image: britishcolumbia1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#B09113', bg: '#B09113', text: '#FFFFFF' },
    },
    {
      description: 'Immigration Pilot points calculator',
      name: 'Rural and Northern',
      image: yukon,
      bg: '#D9D9D9',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'Skilled workers Overseas Program point calculator',
      name: 'Manitoba',
      image: manitoba1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },
    {
      description: 'Immigirant Nominee Program point calculator',
      name: 'Nova',
      image: novascotianew,
      bg: '#FFFFFF',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },
    {
      description: 'Immigration Nominee Program point calculator',
      name: 'Saskatchewan',
      image: saskatchewan1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#116B37', bg: '#116B37', text: '#FFFFFF' },
    },

    {
      description: 'Point calculator',
      name: 'Northwest Territories',
      image: northwest134,
      bg: '#D9D9D9',
      buttonBg: { border: '#035592', bg: '#FFFFFF', text: '#035592' },
    },

    {
      description: 'PNP expression of interest point calculator',
      name: 'Manitoba',
      image: manitoba1234,
      bg: '#D9D9D9',
      buttonBg: { border: '#C7364E', bg: '#C7364E', text: '#FFFFFF' },
    },

    {
      description: 'PNP point calculator',
      name: 'Prince Edward island',
      image: britishcolumbia1234,
      bg: '#FFFFFF',
      buttonBg: { border: '#B09113', bg: '#FFFFFF', text: '#B09113' },
    },
  ];

  const calcRef = useRef(null);
  const quickLinkRef = useRef(null);
  const examGuidesRef = useRef(null);

  const sectionRefs = [
    { section: "calculators", ref: calcRef },
    { section: "quickLinks", ref: quickLinkRef },
    { section: "examGuides", ref: examGuidesRef },
  ];

  const [activeSection, setActiveSection] = useState(sectionRefs[0].section);

  const scrollToRef = (ref) => {
    const scrollTop = ref.current.offsetTop - window.innerHeight * 0.25; // 10% of the window height
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5; // 50% of the window height
      const currentSection = sectionRefs.find(({ ref }) =>
        ref.current.offsetTop <= scrollPosition &&
        ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
          ? true
          : false
      );

      if (currentSection) {
        setActiveSection(currentSection.section);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col justify-center w-full md:w-[95%]'>
      <BannerPages
        link={'resources'}
        title={'Resources And Tools'}
        description={'Resources And Tools'}
      />
      <div
        id='calculator'
        className='flex flex-col items-end justify-center relative right-[2rem] lg:right-[4rem]'
      >
        <div className='w-[90%] lg:w-[70%] flex flex-col items-center lg:items-start justify-center'>
          <div className='font-semibold text-[30px] lg:text-[40px] border-b-[4px] border-[#019989] border-w-[50%] mt-8'>
            Calculators & Tools
          </div>
          <p className='py-4 text-center lg:text-left'>
            Introducing our suite of calculators and tools tailored to transform
            your Canadian dream into reality. From <br /> immigration
            eligibility to language preparedness, our comprehensive scoring
            system provides the insights <br /> you need to navigate your
            journey confidently.
          </p>
        </div>
      </div>

      <Bounce>
        <div
            className='hidden xl:block w-[19rem] h-[18rem] xl:w-[18rem] 2xl:w-[17rem] xl:h-[18rem] fixed top-[13rem] left-14 rounded-3xl bg-white'
            style={{
              boxShadow:
                '0px 4px 23.6px 0px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className='mx-8 mt-14 font-serif border-l-[5px] border-[#009889] flex flex-col items-start justify-center gap-4'>
              <a
                // href='#calculator'
                onClick={() => scrollToRef(calcRef)}
                className={`text-[#009889] text-md px-4 text-nowrap cursor-pointer hover:underline ${activeSection === "calculators" && "font-bold"}`}
              >
                Calculators and Tools
              </a>
              <a
                onClick={() => scrollToRef(quickLinkRef)}
                className={`text-[#009889] text-md px-4 cursor-pointer hover:underline ${activeSection === "quickLinks" && "font-bold"}`}
              >
                Quick Links
              </a>
              <a
                onClick={() => scrollToRef(examGuidesRef)}
                className={`text-[#009889] text-md px-4 cursor-pointer hover:underline ${activeSection === "examGuides" && "font-bold"}`}
              >
                Exam Guides
              </a>
            </div>
            <div className='flex flex-col items-start justify-center ml-6 mt-6'>
              <span className='font-medium ml-4 mb-2'>Follow Us</span>
              <div className='flex items-center justify-center gap-0 '>
                <a
                  href='https://www.linkedin.com/company/aquarian-immigration-services/'
                  className='mx-0 p-2'
                >
                  <img
                    alt=''
                    src={LinkedIn}
                    className='cursor-pointer w-[1.8rem]'
                  />
                </a>
                <a
                  href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
                  className='mx-0 p-2'
                >
                  <img
                    alt=''
                    src={facebook}
                    className='cursor-pointer w-[1.8rem]'
                  />
                </a>

                <a
                  href='https://www.threads.net/@aquarian_immigration'
                  className='mx-0 p-2'
                >
                  <img
                    alt=''
                    src={Twitter}
                    style={{ borderRadius: '5px' }}
                    className='cursor-pointer w-[1.8rem]'
                  />
                </a>
                <a
                  href='https://www.instagram.com/aquarian_immigration/'
                  className='mx-0 p-2'
                >
                  <img
                    alt=''
                    src={Instagram}
                    className='cursor-pointer w-[1.8rem]'
                  />
                </a>
                <a href='https://youtube.com' className='mx-0 p-2'>
                  <img
                    alt=''
                    src={Youtube}
                    className='cursor-pointer w-[1.8rem]'
                  />
                </a>
              </div>
            </div>
        </div>
      </Bounce>

      <div className='flex flex-col items-end justify-center relative right-4 sm:right-8 lg:right-[4rem]'>

        <div  className='w-[90%] lg:w-[70%] flex flex-col items-start justify-center'>
        {/* calculators section */}
          <div ref={calcRef} className='border-[2px] border-[#E0E0E0] w-[99%]  h-auto rounded-[50px] mt-6 mb-10'>
            <div className='font-semibold text-3xl mt-8 ml-[4rem] mb-8'>
              General Calculators
            </div>
            <div className='hidden lg:flex items-center justify-center gap-4'>
              <div className='bg-[#EBE6EF] w-[12rem] h-[18rem] relative rounded-xl flex flex-col items-center justify-start pt-6 gap-3 px-2 group hover:bg-[#F5F5F5] hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  CRS Calculator
                </div>
                <img
                  src={crs}
                  alt='logo'
                  className='rounded-2xl w-20 group-hover:shadow-xl group-hover:w-[6rem] group-hover:mt-[30px] transition-all ease-in-out delay-50 duration-300'
                />
                <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                  Points-based ranking for Express Entry.
                </p>

                <button
                  type='button'
                  onClick={() => (window.location.href = '/crs-calculator')}
                  className='w-40 h-10 border border-[#9A6FBD] text-[#9A6FBD] rounded-full absolute bottom-4 font-normal group-hover:bg-[#9A6FBD] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='bg-[#EFEDE6] w-[27rem] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group hover:bg-[#F5F5F5] hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                  <div className='font-semibold text-lg tracking-tight '>
                    Super Visa Eligibility Calculator
                  </div>
                  <img
                    src={svec}
                    alt='logo'
                    className='rounded-2xl w-20 absolute right-7 top-10 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                  />
                  {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                  <button
                    type='button'
                    className='w-40 h-10 border mt-4 border-[#C09C40] text-[#C09C40] rounded-full font-normal group-hover:bg-[#C09C40] group-hover:text-white transition ease-in-out delay-60 duration-200'
                  >
                    Calculate Now
                  </button>
                </div>
                <div className='bg-[#EFE6E6] w-[27rem] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group hover:bg-[#F5F5F5] hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                  <div className='font-semibold text-lg tracking-tight '>
                    SW 67 Points Calculator
                  </div>
                  <img
                    src={sw67}
                    alt='logo'
                    className='rounded-2xl w-20 absolute right-7 top-10 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                  />
                  {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                  <button
                    type='button'
                    className='w-40 h-10 border mt-4 border-[#D73835] text-[#D73835] rounded-full font-normal group-hover:bg-[#D73835] group-hover:text-white transition ease-in-out delay-60 duration-200'
                  >
                    Calculate Now
                  </button>
                </div>
              </div>
              <div className='bg-[#E6EFEF] w-[12rem] h-[18rem] relative rounded-xl flex flex-col items-center justify-start pt-6 gap-3 px-2 group hover:bg-[#F5F5F5] hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  CLB Calculator
                </div>
                <img
                  src={clb}
                  alt='logo'
                  className='rounded-2xl w-20 group-hover:shadow-xl group-hover:w-[6rem] group-hover:mt-[30px] transition-all ease-in-out delay-50 duration-300'
                />
                <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                  Canadian language proficiency levels for immigrants.
                </p>
                <button
                  type='button'
                  onClick={() => (window.location.href = '/clb-calculator')}
                  className='w-40 h-10 border border-[#25897F] text-[#25897F] rounded-full absolute bottom-4 font-normal group-hover:bg-[#25897F] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
            </div>
            <div className='flex lg:hidden flex-col items-center justify-center gap-4'>
              <div className='bg-[#EBE6EF] w-[90%] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group  hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  CRS Calculator
                </div>
                <img
                  src={crs}
                  alt='logo'
                  className='rounded-2xl w-[4rem] absolute right-7 top-12 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                />
                {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                <button
                  type='button'
                  className='w-40 h-10 border mt-4 border-[#D73835] text-[#D73835] rounded-full font-normal group-hover:bg-[#D73835] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
              <div className='bg-[#E6EFEF] w-[90%] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group  hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  CLB Calculator
                </div>
                <img
                  src={clb}
                  alt='logo'
                  className='rounded-2xl w-[4rem] absolute right-7 top-12 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                />
                {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                <button
                  type='button'
                  className='w-40 h-10 border mt-4 border-[#D73835] text-[#D73835] rounded-full font-normal group-hover:bg-[#D73835] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
              <div className='bg-[#EFEDE6] w-[90%] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group  hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  Super Visa Eligibility Calculator
                </div>
                <img
                  src={svec}
                  alt='logo'
                  className='rounded-2xl w-[4rem] absolute right-7 top-12 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                />
                {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                <button
                  type='button'
                  className='w-40 h-10 border mt-4 border-[#C09C40] text-[#C09C40] rounded-full font-normal group-hover:bg-[#C09C40] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
              <div className='bg-[#EFE6E6] w-[90%] h-[8.5rem] relative rounded-xl flex flex-col items-start justify-start pt-6 gap-3 px-4 group  hover:shadow-2xl transition-all ease-in-out delay-50 duration-200'>
                <div className='font-semibold text-lg tracking-tight '>
                  SW 67 Points Calculator
                </div>
                <img
                  src={sw67}
                  alt='logo'
                  className='rounded-2xl w-[4rem] absolute right-7 top-12 group-hover:shadow-xl  transition-all ease-in-out delay-50 duration-300'
                />
                {/* <p className='text-gray-500 text-[15px] text-center  group-hover:hidden '>
                      Points-based ranking for Express Entry.
                    </p> */}
                <button
                  type='button'
                  className='w-40 h-10 border mt-4 border-[#D73835] text-[#D73835] rounded-full font-normal group-hover:bg-[#D73835] group-hover:text-white transition ease-in-out delay-60 duration-200'
                >
                  Calculate Now
                </button>
              </div>
            </div>
            <div className='font-semibold text-3xl mt-16 ml-[4rem] mb-8'>
              PNP Calculators
            </div>
            <div className='flex items-center justify-center gap-0 mb-14'>
              {' '}
              <div
                style={{
                  boxShadow:
                    '0px 8px 16px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08)',
                }}
                className=' grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 rounded-2xl overflow-hidden bg-[#D9D9D9]'
              >
                {isMobile ? (
                  <>
                    {calculatorDataMobile.map((item, index) => (
                      <div
                        key={index}
                        className={`overflow-hidden w-[11rem] lg:w-[10.5rem] h-[11rem] lg:h-[9.5rem] cursor-pointer 
                       relative flex flex-col items-center group justify-start pt-6 gap-3 px-2  transition-all ease-in-out delay-50 duration-200`}
                        style={{ backgroundColor: item.bg }}
                      >
                        <img
                          src={item.image}
                          alt='logo'
                          className='rounded-2xl w-[4rem] transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-40'
                        />
                        <button
                          type='button'
                          style={{
                            backgroundColor: item.buttonBg.bg,
                            color: item.buttonBg.text,
                            borderColor: item.buttonBg.border,
                          }}
                          className={`w-[9rem] h-[2.3rem] rounded-full font-normal border transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-40`}
                        >
                          Calculate Now
                        </button>

                        <p className='text-gray-500 text-[17px] px-6 lg:px-2 text-center absolute -bottom-[11.5rem] group-hover:block transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-[12rem]'>
                          <span className='font-semibold text-[19px] block'>
                            {item.name}
                          </span>{' '}
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {' '}
                    {calculatorData.map((item, index) => (
                      <div
                        key={index}
                        className={`overflow-hidden w-[13.5rem] lg:w-[10.5rem] h-[12.5rem] lg:h-[9.5rem] cursor-pointer ${
                          index > 4 ? 'rounded-t-xl' : 'rounded-b-xl'
                        } ${index === 5 && 'rounded-t-none rounded-tr-xl '}
                      ${index === 9 && 'rounded-t-none rounded-tl-xl '}
                       relative flex flex-col items-center group justify-start pt-6 gap-3 px-2  transition-all ease-in-out delay-50 duration-200`}
                        style={{ backgroundColor: item.bg }}
                      >
                        <img
                          src={item.image}
                          alt='logo'
                          className='rounded-2xl w-[4rem] transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-40'
                        />
                        <button
                          type='button'
                          style={{
                            backgroundColor: item.buttonBg.bg,
                            color: item.buttonBg.text,
                            borderColor: item.buttonBg.border,
                          }}
                          className={`w-[9rem] h-[2.3rem] rounded-full font-normal border transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-40`}
                        >
                          Calculate Now
                        </button>

                        <p className='text-gray-500 text-[17px] px-6 lg:px-2 text-center absolute -bottom-[11.5rem] group-hover:block transition-all ease-in-out delay-50 duration-300 transform group-hover:-translate-y-[12rem]'>
                          <span className='font-semibold text-[19px] block'>
                            {item.name}
                          </span>{' '}
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>


        {/* quick links section */}
        <div ref={quickLinkRef} className='w-[90%] h-fit'>
          <div
            id='links'
            // ref={quickLinkRef}
            className='font-medium text-3xl border-b-[4px] border-[#019989] border-w-[50%] mt-8'
          >
            Quick Links
          </div>
          <div className='w-full bg-[#D3E5E5] flex items-center relative justify-center py-2 px-2 text-center sm:px-6 rounded-md my-6'>
            <BsArrowRight
              size={25}
              className='absolute left-6 hidden sm:block'
            />
            <div
              className='text-lg tracking-wider'
              style={{ fontWeight: '300' }}
            >
              Canadian Federal Government Sites
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start justify-around w-full gap-4'>
            <div
              className='h-auto sm:max-h-[18rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('https://www.canada.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Canadian Federal Government
                </li>
                <li
                  onClick={() => {
                    window.open('https://ircc.canada.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline '
                >
                  Department of Citizenship and Immigration Canada
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.cbsa-asfc.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline '
                >
                  Canada Border Services Agency
                </li>
                <li
                  onClick={() => {
                    window.open(
                      'https://www.canada.ca/en/revenue-agency/cra-canada.html?utm_campaign=not-applicable&utm_medium=redirect&utm_source=cra-arc.gc.ca_redirect',
                      '_blank'
                    );
                  }}
                  className='cursor-pointer hover:underline '
                >
                  Canadian Tax Office - Home Page
                </li>
              </ul>
            </div>
            <div
              className='h-auto sm:max-h-[18rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('http://www.fin.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  CanadianTax Information
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.international.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Canadian Dept of Foreign Affairs and Trade
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.hc-sc.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Canadian Dept of Health and Aged Care
                </li>
                <li
                  onClick={() => {
                    window.open('http://www.fin.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Canadian Dept Of Finance
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full bg-[#D3E5E5] flex items-center relative justify-center py-2 px-6 rounded-md my-6'>
            <BsArrowRight
              size={25}
              className='absolute left-6 hidden sm:block'
            />
            <div
              className='text-lg tracking-wider'
              style={{ fontWeight: '300' }}
            >
              Canadian Government Sites
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start justify-around w-full gap-4'>
            <div
              className='h-auto sm:max-h-[11rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('https://www.pm.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Prime Minister Of Canada
                </li>
                <li
                  onClick={() => {
                    window.open('http://www.canadianheritage.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Canadian Heritage
                </li>
                <li
                  onClick={() => {
                    window.open('http://direct.srv.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Government Electronic Directory Services
                </li>
              </ul>
            </div>
            <div
              className='h-auto sm:max-h-[11rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('https://www.international.gc.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Foreign Affairs and International Trade
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.tbs-sct.canada.ca/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Treasury Board Secretariat
                </li>
                <li
                  onClick={() => {
                    window.open(
                      'https://natural-resources.canada.ca/',
                      '_blank'
                    );
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Natural Resources Canada
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full bg-[#D3E5E5] flex items-center relative justify-center py-2 px-6 rounded-md my-6'>
            <BsArrowRight
              size={25}
              className='absolute left-6 hidden sm:block'
            />
            <div
              className='text-lg tracking-wider'
              style={{ fontWeight: '300' }}
            >
              Canadian Newspapers
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start justify-around w-full gap-4'>
            <div
              className='h-auto sm:max-h-[23rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('https://nationalpost.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  National Post
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.theglobeandmail.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  The Globe and Mail
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.thestar.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Toronto Star
                </li>
                <li
                  onClick={() => {
                    window.open('https://ottawacitizen.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Ottawa Citizen
                </li>
                <li
                  onClick={() => {
                    window.open('https://ottawasun.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Ottawa Sun
                </li>
                <li
                  onClick={() => {
                    window.open('https://calgaryherald.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Calgary Herald
                </li>
                <li
                  onClick={() => {
                    window.open(
                      'https://www.thespec.com/news/daily-home-delivery-subscription-rates/article_1c9c77bd-f319-5104-a7f1-d4214042290c.html',
                      '_blank'
                    );
                  }}
                  className='cursor-pointer hover:underline'
                >
                  The Spectator
                </li>
              </ul>
            </div>
            <div
              className='h-auto sm:max-h-[23rem] py-6 px-4 bg-white w-full sm:max-w-[18rem] rounded-2xl'
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <ul className='flex flex-col items-start justify-center gap-5 font-normal list-disc pl-6 pr-2 text-[15px]'>
                <li
                  onClick={() => {
                    window.open('https://edmontonjournal.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Edmonton Journal
                </li>
                <li
                  onClick={() => {
                    window.open('https://vancouversun.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Vancouver Sun
                </li>
                <li
                  onClick={() => {
                    window.open('https://vancouversun.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Province
                </li>
                <li
                  onClick={() => {
                    window.open('https://calgaryherald.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Edmonton Sun
                </li>
                <li
                  onClick={() => {
                    window.open('https://montrealgazette.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Montreal Gazette
                </li>
                <li
                  onClick={() => {
                    window.open('https://www.winnipegfreepress.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Winnipeg Free Press
                </li>
                <li
                  onClick={() => {
                    window.open('https://calgaryherald.com/', '_blank');
                  }}
                  className='cursor-pointer hover:underline'
                >
                  Calgary Herald
                </li>
              </ul>
            </div>
          </div>
        </div>
          
        </div>
      </div>

      {/* exams section */}
      <div id='exams' ref={examGuidesRef} className='w-[90%] flex flex-col items-end'>
        <div className='w-[95%] sm:w-[76%] flex flex-col items-start justify-center mt-8'>
          <div className='font-medium text-3xl ml-20'>
            Exam Guides
          </div>
          <div className='w-[90%] h-1 bg-[#019989] ml-20'></div>
          <div className='w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 ml-0 xl:ml-20 flex-wrap xl:flex-nowrap'>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={ielts} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>IELTS Overview</p>
                  <p className='cursor-pointer'>IELTS Syllabus</p>
                  <p className='cursor-pointer'>IELTS Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>IELTS Exam Pattern</p>
                  <p className='cursor-pointer'>IELTS Registration</p>
                  <p className='cursor-pointer'>IELTS Exam Dates</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={toefl} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>TOEFL Overview</p>
                  <p className='cursor-pointer'>TOEFL Exam Dates</p>
                  <p className='cursor-pointer'>TOEFL Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>TOEFL Exam Pattern</p>
                  <p className='cursor-pointer'>TOEFL Registration</p>
                  <p className='cursor-pointer'>TOEFL Vouchers</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={duolingo} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>Duolingo Overview</p>
                  <p className='cursor-pointer'>Duolingo Syllabus</p>
                  <p className='cursor-pointer'>Duolingo Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>Duolingo Exam Pattern</p>
                  <p className='cursor-pointer'>Duolingo Registration</p>
                  <p className='cursor-pointer'>Duolingo Vouchers</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-auto rounded-3xl mt-14 flex items-center justify-center gap-4 xl:ml-20 mb-20 flex-wrap xl:flex-nowrap'>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={pearson} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>PTE Overview</p>
                  <p className='cursor-pointer'>PTE Exam Dates</p>
                  <p className='cursor-pointer'>PTE Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>PTE Exam Pattern</p>
                  <p className='cursor-pointer'>PTE Registration</p>
                  <p className='cursor-pointer'>PTE Vouchers</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={gre} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>GRE Overview</p>
                  <p className='cursor-pointer'>GRE Syllabus</p>
                  <p className='cursor-pointer'>GRE Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>GRE Exam Pattern</p>
                  <p className='cursor-pointer'>GRE Registration</p>
                  <p className='cursor-pointer'>GRE Vouchers</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-center rounded-xl px-4 py-2 flex-wrap w-full md:min-w-[21rem] border border-gray-300 shadow-2xl'>
              <img src={celpip} alt='icon' className='w-[6rem] mx-4 my-2' />
              <div className='flex items-center justify-between w-full px-4 py-2'>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>CELPIP Overview</p>
                  <p className='cursor-pointer'>CELPIP Syllabus</p>
                  <p className='cursor-pointer'>CELPIP Results</p>
                </div>
                <div className='text-[12px] text-gray-500 font-normal underline mt-2 tracking-wider flex flex-col items-start justify-center gap-2'>
                  <p className='cursor-pointer'>CELPIP Exam Pattern</p>
                  <p className='cursor-pointer'>CELPIP Registration</p>
                  <p className='cursor-pointer'>CELPIP Exam Dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndTools;
