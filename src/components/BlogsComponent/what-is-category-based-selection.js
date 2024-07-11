import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/Blogs/Category Based SelectionOpen.jpg";
//import LatestNews from "../Pages/Blogs/LatestNews.js";
import Top10side from "../../Assets/Blogs/TOP 10 UNIVERSITIESside.jpg";
import TopInside from "../../Assets/Blogs/Top In Demand Jobsside.jpg";
import TipsSide from "../../Assets/Blogs/TIPS AND TRICKSside.jpg";
import Everything from "../../Assets/Blogs/EVERYTHING YOU NEED.jpg";
import Tips from "../../Assets/Blogs/TIPS AND TRICKS.jpg";
import Top10 from "../../Assets/Blogs/TOP 10 UNIVERSITIES.jpg";
const Table = () => {
  const data = [
    { name: "French proficiency", ct: "30%" },
    { name: "Healthcare occupations", ct: "15%" },
    { name: "STEM occupations", ct: "25%" },
    { name: "Trade occupations", ct: "5%" },
    { name: "Transport occupations", ct: "3%" },
    { name: "Agriculture and agri-food occupations", ct: "0.5%" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>CATEGORY TARGET</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ct}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const WhatIsCategory = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bubbleRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      // Check if the Home > Blogs > Inner Blogs link is visible
      const innerBlogsLink = document.querySelector(".link");
      if (innerBlogsLink) {
        const bounding = innerBlogsLink.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setShowBackToTop(false);
        } else {
          setShowBackToTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const makeDivRelative = useIsInViewport(bubbleRef);
  {
    /*
  
  const keywords = [
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
  ];
  const Keywords = ({ title }) => {
    return (
      <div className="post-card-keywords">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    );
  };
  */
  }

  const innerPosts = [
    {
      title: "What is Category Based Selection? Everything you need to know",
      description: (
        <p>
          Canada has been a prominent destination for immigrants, known for its
          diverse population that balances economic needs with humanitarian
          goals. Among the various pathways for immigration, the Express Entry
          continues to be at the forefront. This system manages applications for
          three primary economic immigration programs:
          <br />
          <br />
          <ul>
            1. Federal Skilled Worker Program (FSWP)
            <br />
            2. Federal Skilled Trades Program (FSTP)
            <br />
            3. Canadian Experience Class (CEC)
          </ul>
          <br />
          <br />
          Candidates in the Express Entry pool are ranked based on the
          Comprehensive Ranking System (CRS), which considers factors such as
          age, education, work experience, and language proficiency. Periodic
          draws invite the highest-ranking candidates to apply for permanent
          residency.
          <br />
          <br />
          The CRS despite having been used so widely, failed to address the lack
          of skilled workers in the country. This necessity led to the
          introduction of Category Based Selections in May 2023 to fill the
          labour gap.
          <br />
          <br />
          <span>How does it work?</span>
          <br />
          <br />
          Candidates in the Express Entry pool belonging to the following
          categories are invited to apply for Permanent Residency (PR);
          <br />
          <br />
          <ul>
            <li> French proficiency</li>
            <li> Healthcare</li>
            <li> STEM</li>
            <li> Transportation</li>
            <li> Trade</li>
            <li> Agriculture and agri-food</li>
          </ul>
          <br />
          <span>
            What is the share of Invitation to Apply (ITAs) given to each
            category?
          </span>
          <br />
          <br />
          Here’s a breakdown of the ITA share of each category;
          <br />
          <br />
          <Table />
          <br />
          <span>What are the benefits of CBS?</span>
          <br />
          <br />
          <ul>
            1. Targeted Labour Market Needs: By focusing on specific
            occupations, category-based selection ensures that industries facing
            labour shortages can access the skilled workers they need more
            efficiently.
            <br />
            <br />
            2. Regional Development: Provincial needs can vary significantly.
            This system allows regions to attract immigrants who will settle and
            contribute to local economies, promoting balanced regional
            development.
            <br />
            <br />
            3. Diverse Skill Sets: Traditional CRS draws often favour candidates
            with high scores in language proficiency and education, potentially
            overlooking skilled trades and other essential professions.
            Category-based selection broadens the scope, valuing diverse skill
            sets.
            <br />
            <br />
            4. Support for Francophone Communities: By prioritising
            French-speaking candidates, Canada reinforces its commitment to
            bilingualism and the vitality of francophone communities outside
            Quebec.
          </ul>
          <br />
          <br />
          <span>How to know if you are eligible to apply for CBS?</span>
        </p>
      ),
      image: innerBlog,
      date: "29 MAY 2024",
    },
  ];
  const InnerBlog = ({ title, description, image, date }) => {
    return (
      <div className="post-card-inner">
        <h1>{title}</h1>
        <p3>{date}</p3>
        <br />
        <br />
        <img alt="" src={image} />
        <p2>{description}</p2>
      </div>
    );
  };

  const recentBlogs = [
    {
      title: "Top 10 Universities in Canada",
      image: Top10side,
      path: "/blogs/top-10-universities-in-canada",
    },
    {
      title: "Tips and Tricks on Preparing for IELTS",
      image: TipsSide,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
    },
    {
      title: "Top In Demand Jobs in Canada as of 2024",
      image: TopInside,
      path: "/blogs/top-in-demand-jobs-in-canada-as-of-2024",
    },
  ];
  const RecentBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div className="title-recent">
          <a href={path}>
            <h1>{title}</h1>
          </a>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };

  const posts = [
    {
      title: "Tips and Tricks on Preparing for IELTS",
      description:
        "IELTS is an integral requirement for immigrating to Canada.While the preparation may",
      image: Tips,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
      date: "22 MAY 2024",
    },
    {
      title:
        "Everything you need to know about Sponsoring your Spouse, Partner or Child",
      description:
        "Sponsoring your spouse, partner or child involves helping them obtain their PR and being able",
      image: Everything,
      path: "/blogs/everything-you-need-to-know-about-sponsoring-your-spouse-and-partner-or-child",
      date: "30 MAY 2024",
    },
    {
      title: "Top 10 Universities in Canada",
      description:
        "For decades, Canada has been a hotspot for international students.Ambitious youngsters",
      image: Top10,
      path: "/blogs/top-10-universities-in-canada",
      date: "27 MAY 2024",
    },
  ];
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card-similar">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <p3>{date}</p3>
        <br />
        <br />
        <a href={path}>
          <h1>{title}</h1>
        </a>
        <p2>
          {description}{" "}
          <a style={{ color: "#b90124", fontStyle: "italic" }} href={path}>
            Read more...
          </a>
        </p2>
      </div>
    );
  };

  return (
    <>
      <div style={{ background: "#FFF" }}>
        <div className="flex flex-col justify-center w-full md:w-[95%] mb-10">
          <div className="mt-[5rem] lg:mt-[6rem]">
            <div className="w-[95%] mx-auto bg-banner text-white bg-cover bg-center bg-no-repeat h-[12rem] -mt-12 rounded-3xl">
              <div className="flex flex-col justify-between pl-4 md:pl-8 md:px-12 lg:px-16 h-full">
                <p className="text-gray-400 lg:pb-10 pt-12 cursor-pointer relative top-5 lg:top-10">
                  <a
                    href="/"
                    className="text-gray-400 hover:underline text-[13px]"
                  >
                    Home
                  </a>{" "}
                  &gt;{" "}
                  <a
                    className="text-gray-400 hover:underline text-[13px]"
                    href="/blogs"
                  >
                    Blogs
                  </a>{" "}
                  &gt;{" "}
                  <p1 className="text-gray-400 text-[13px]">
                    What is Category Based Selection? Everything you need to
                    know
                  </p1>
                </p>
                <div className="flex w-full h-full items-end">
                  <div className="text-[30px] md:text-[40px] lg:text-[45px] font-normal font-serif leading-normal text-center mx-auto my-0 pb-3">
                    Welcome to Our Blogs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-blog">
          <div>
            <h1 className="title-heading">Recent Blogs</h1>
            <div class="blog-card-container">
              <div className="blog-card-recent">
                {recentBlogs.map((post, index) => (
                  <RecentBlogs key={index} {...post} />
                ))}
              </div>
            </div>
            {/*
            <LatestNews />
            <h1 className="title-heading">Keywords</h1>
            <div className="blog-card-recent">
              {keywords.map((post, index) => (
                <Keywords key={index} {...post} />
              ))}
            </div>
             */}
          </div>
          <div className="blog-cards-container">
            <div className="blog-cards">
              {innerPosts.map((post, index) => (
                <InnerBlog key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
        <div className="similar-blog">
          <div className="similar-div-heading">
            <h1 className="title-heading">Similar Blogs</h1>
            <a href="/blogs">All Articles</a>
          </div>
          <br />
          <div className="blog-cards-similar">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      {showBackToTop && (
        <div
          className={makeDivRelative ? "relativeDiv" : "backToTop"}
          onClick={scrollToTop}
        >
          BACK TO TOP
        </div>
      )}
      <div ref={bubbleRef}></div>
    </>
  );
};

export default WhatIsCategory;
