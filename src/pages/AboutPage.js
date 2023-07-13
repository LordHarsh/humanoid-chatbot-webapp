import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-12 py-4 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        SRM Humanoid Profesor
      </h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        A project to develop a humanoid robot that can interact with humans and
        perform various tasks. This is a testing environment for our Chatbot.<br />
        In future, we will be adding and testing more models for the humanoid.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Faculty Team</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">
                  Dr.Subalalitha C.N
                </p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">
                  Dr. Kayalvizhi R
                </p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-red-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">
                  Akiladeswari. P
                </p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">
                  Dr. Madhavan Shanmugavel
                </p>
                <p className="text-sm text-gray-600">Mechatronics Department</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Dr.Sujatha V</p>
                <p className="text-sm text-gray-600">Mechatronics Department</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Dr. Vani</p>
                <p className="text-sm text-gray-600">Mechatronics Department</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray 800">Student Team</h2>

          {/* Add the student team members here */}
          {/* Use the same format as the faculty team members */}
          {/* Use different colors for the circles */}
          {/* For example: */}

          {/*<ul classNmae = "mt - 4 space - y - 2" >*/}
          {/*<li classNmae = "flex items - center" >*/}
          {/*< div classNmae = "w - 12 h - 12 rounded - full bg - orange - 500 flex - shrink - 0" ></div >*/}
          {/*< div classNmae = "ml - 4" >*/}
          {/*< p classNmae = "text - lg font - semibold text - gray - 800" > Member Name </p >*/}
          {/*< p classNmae = "text - sm text - gray - 600" > School of Computing </p >*/}
          {/*</div >*/}
          {/*</li >*/}
          {/*</ul >*/}

          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">
                  Karthick Chidambaram
                </p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Javid</p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-lime-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Harsh Banka</p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Rohan Reddy</p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Shanvi</p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex-shrink-0"></div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">Manoj Routhu</p>
                <p className="text-sm text-gray-600">School of Computing</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Add a button to go back to the home page */}
      {/* Use the Link component from react-router-dom */}
      {/* For example: */}

      {/*<Link to="/" classNmae = "bg - blue - 500 text - white rounded px - 6 py - 2 mt - 8 hover: bg - blue - 600" >*/}
      {/*Go back to home*/}
      {/*</Link >*/}

      <div className="py-5">
      <Link
        to="/"
        className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-8 hover:bg-blue-600"
      >
        Go back to home
      </Link>
      </div>
    </div>
  );
};

export default AboutPage;
