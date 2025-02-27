"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <header className="w-full py-10 text-center">
        <h1 className="text-4xl font-bold mt-6">Welcome to My Portfolios</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          I am Makite Desta, a Software Engineer with over 3 years of experience
          in fintech.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I specialize in Web Development using Next.js and MERN, as well as
          Mobile App Development with Flutter.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I have worked on real-world projects like ERP and Mobile Banking, and
          I am currently open to better opportunities, especially remote jobs.
        </p>
        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
          Contact me at:{" "}
          <a
            href="mailto:makimanmtu@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            makimanmtu@gmail.com
          </a>
        </p>
      </header>

      {/* Skills & Experience Section */}
      <main className="w-full max-w-4xl px-6 sm:px-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Work With Me?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-bold">⚡ Fintech Expertise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Extensive experience in financial technology solutions.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-bold">🎨 Web & Mobile Apps</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Skilled in building scalable web and mobile applications.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-bold">🔍 Real-World Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experience in ERP, mobile banking, and enterprise-level solutions.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-bold">🌍 Open to Remote Work</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Looking for exciting remote opportunities to innovate and grow.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center mt-12">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Makite Desta. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
