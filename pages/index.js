import Head from "next/head";
import Landing from "../components/Landing";
import Fluff from "../components/Fluff";

export default function Home() {
  return (
    <div className="bg-background">
      <Head>
        <title>Onboardy</title>
        <meta
          name="description"
          content="Revolutionizing the hiring process!"
        />
        <link rel="icon" href="/Control-V.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center flex-col items-center">
        <Landing />
        <Fluff
          background="bg-green-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-red-100"
          imageFirst={false}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-blue-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-purple-100"
          imageFirst={false}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-orange-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
      </div>

      {/* <Cookies /> */}
      {/* cmd + /  */}
    </div>
  );
}
