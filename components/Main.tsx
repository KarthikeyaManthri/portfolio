import { RoughNotationGroup } from "react-rough-notation";
import { HighLighter } from "./Highlighter";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme } = useTheme();
  return (
    <div className="container px-4 mx-aut items-center">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col text-center lg:text-left">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 self-center sm:self-center md:self-center lg:self-start xl:self-start 2xl:self-start">
          <img
            src={"/avatar.png"}
            alt="Profile"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="lg:flex-col">
          <div className="lg:px-4 lg:mt-12 ">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-[#FFB9B9]">
              Hi there 👋
            </h1>
            <div className="mt-6 text-gray-800 dark:text-[white]">
              <div className="mb-4">
                <div className="lg:flex-row">
                  I'm{" "}
                  <RoughNotationGroup show={true}>
                    <HighLighter
                      color={theme === "dark" ? "#FFB9B9" : "#000000"}
                      type="highlight"
                      strokeWidth={4}
                      padding={25}
                    >
                      <span className="text-white dark:text-gray-800 px-2">
                        Karthikeya Manthri
                      </span>
                    </HighLighter>
                  </RoughNotationGroup>
                  {". "}A passionate developer who really loves working on
                  frontend technologies. It's great to see you here!
                </div>
                <br />
                <br />
                <p>
                  I'm a{"  "}
                  <RoughNotationGroup show={true}>
                    <HighLighter
                      color={theme === "dark" ? "#FFB9B9" : "#000000"}
                      type="box"
                      strokeWidth={2}
                    >
                      Senior Software Engineer
                    </HighLighter>
                  </RoughNotationGroup>{" "}
                  working at{" "}
                  <a
                    href="https://www.makemytrip.com"
                    className="font-bold transition-colors hover:text-sky-500 dark:text-[#FFB9B9]"
                    target="_blank"
                    rel="noopener"
                  >
                    MakeMyTrip
                  </a>
                  . Based in India's silicon valley, Bangalore, I have been
                  contributing to the frontend space for nearly{" "}
                  <RoughNotationGroup show={true}>
                    <HighLighter
                      color={theme === "dark" ? "#FFB9B9" : "#000000"}
                      type="circle"
                      strokeWidth={3}
                      padding={8}
                    >
                      3 years
                    </HighLighter>
                  </RoughNotationGroup>{" "}
                  now.
                </p>
              </div>
              <br />
              <p className="mb-4">
                I'm an audiophile and love to sing-along to my favourite tunes
                in my free time. Topping it up with some love for gaming and
                anime, I{" "}
                <RoughNotationGroup show={true}>
                  <HighLighter
                    color={theme === "dark" ? "#FFB9B9" : "#000000"}
                    type="strike-through"
                    strokeWidth={3}
                    padding={1}
                  >
                    perfectly
                  </HighLighter>
                </RoughNotationGroup>{" "}
                try to maintain my outlook between personal and professional
                life's.
              </p>
              <br />
              <p className="mb-4">
                Keep an eye out for this page as I will continuously update it
                with my latest work, projects and experiences. Also a blog's
                section to pen down my personal and technical learnings is in
                the pipeline. This can be a good way for me to learn Notion
                integration for dynamic blogging experience 👀
              </p>
              <br />
              <h2 className="font-bold">Here's to some new beginnings...🥂</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
