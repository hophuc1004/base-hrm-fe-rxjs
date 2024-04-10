import React from "react";
// React - router - dom

// Redux

// Type

const Footer = () => {
  return (
    <footer className="bg-white hidden md:block absolute w-full bottom-20 shadow dark:bg-[#323b45]">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/1004hophuc"
            className="flex items-center mb-4 sm:mb-0"
            target="_blank"
          >
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165850/1941-768x591.png"
              className="h-8 mr-3"
              alt="Logo"
            />
          </a>
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-300">
          © 2023{" "}
          <a
            href="https://github.com/1004hophuc"
            target="_blank"
            className="hover:underline"
          >
            Minute
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
