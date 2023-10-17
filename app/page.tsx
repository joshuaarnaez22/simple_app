"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // Changed variable name to "username"
  const [email, setEmail] = useState("");

  // Function to handle the form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const requestBody = {
      username: username,
      email: email,
      // Add other fields as needed
    };
    console.log(requestBody);

    try {
      const response = await fetch(
        `https://simple-app-unya.vercel.app/api/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const { user } = await response.json();

      if (user) {
        if (typeof window !== "undefined") {
          // Perform localStorage action
          localStorage.setItem("username", user.username);
          localStorage.setItem("email", user.email);
        }

        router.push("/users");
      } else {
        if (typeof window !== "undefined") {
          // Perform localStorage action
          localStorage.removeItem("username");
          localStorage.removeItem("email");
        }
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <main className="bg-white h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 m-auto lg:py-0 md:h-screen">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="username" // Changed input name to "username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // Changed variable name to "username"
                  type="text" // Changed input type to "text"
                  name="username"
                  id="username" // Changed input id to "username"
                  placeholder="Your username" // Changed placeholder text
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
