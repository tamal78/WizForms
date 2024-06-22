"use client";

import React from "react";
import { DollarSign, Filter, Moon, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LandinngPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative isolate z-0 px-6 pt-14 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset="1" stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Build Beautiful Forms Easily</h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Create and customize forms effortlessly. Gather insights and analytics with ease.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <Button asChild>
                  <Link href={"/sign-up"}>Start Building Forms</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Your Form Comapnion</p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Build Forms Effortlessly With Wizforms
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Wizforms provides robust components to create stunning forms without hassle.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <DollarSign className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Secured Submissions</h3>
            <p className="mt-4 text-sm text-gray-400">
              Ensures secure submission of forms with advanced encryption and fraud protection.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500">
              <Zap className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm text-gray-400">
              Optimized for speed and performance, ensuring quick form loads and smooth user experience.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
              <Moon className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Light & Dark Version</h3>
            <p className="mt-4 text-sm text-gray-400">
              Offers both light and dark theme options to cater to different user preferences.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-purple-500">
              <Filter className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-400">
              Enables easy sorting and filtering of content, enhancing user navigation and interaction.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed lg:mx-auto text-gray-400">
              Explore answers to common questions about our form maker.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {[
              {
                title: "How do I create a new form?",
                description:
                  "To create a new form, log in to your account, navigate to the dashboard, and click on the 'Create New Form' button. Follow the intuitive form builder to add fields and customize your form.",
              },
              {
                title: "Can I customize the design of my forms?",
                description:
                  "Yes, our form maker allows you to customize the design of your forms extensively. You can change colors, fonts, layouts, and even add custom CSS to match your brand identity.",
              },
              {
                title: "How can I embed forms on my website?",
                description:
                  "Embedding forms is simple. Once you've created your form, you'll receive an embed code. Copy and paste this code into the HTML of your website where you want the form to appear.",
              },
              {
                title: "Is my data secure with your form maker?",
                description:
                  "Absolutely. We take data security seriously. Your form submissions and user data are encrypted and stored securely. We also offer compliance options like GDPR and CCPA for data protection.",
              },
            ].map((el, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold">{el.title}</h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-400">{el.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-black font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="flex justify-center text-4xl font-semibold pb-10">Pricing</p>
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-center">
              {/* Always Free Plan */}
              <div className="w-full lg:w-2/3">
                <div className="mx-auto max-w-sm rounded-md border pb-8 pl-5 pr-8 pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">ALWAYS FREE</span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">$0</span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t pt-5">
                    <ul className="mb-6">
                      <li className="flex items-center mb-4">
                        <svg
                          className="h-5 w-5 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 11-2 0 1 1 0 012 0zM9 12a1 1 0 011-1h1a1 1 0 010 2H9a1 1 0 01-1-1zm3-8a1 1 0 00-2 0v3a1 1 0 102 0V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Basic Features</span>
                      </li>
                      <li className="flex items-center mb-4">
                        <svg
                          className="h-5 w-5 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 11-2 0 1 1 0 012 0zM9 12a1 1 0 011-1h1a1 1 0 010 2H9a1 1 0 01-1-1zm3-8a1 1 0 00-2 0v3a1 1 0 102 0V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Community Support</span>
                      </li>
                      <li className="flex items-center mb-4">
                        <svg
                          className="h-5 w-5 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 11-2 0 1 1 0 012 0zM9 12a1 1 0 011-1h1a1 1 0 010 2H9a1 1 0 01-1-1zm3-8a1 1 0 00-2 0v3a1 1 0 102 0V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Basic Customization</span>
                      </li>
                      <li className="flex items-center mb-4">
                        <svg
                          className="h-5 w-5 mr-2 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 11-2 0 1 1 0 012 0zM9 12a1 1 0 011-1h1a1 1 0 010 2H9a1 1 0 01-1-1zm3-8a1 1 0 00-2 0v3a1 1 0 102 0V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Basic Analytics</span>
                      </li>
                    </ul>
                    <Button asChild variant={"secondary"}>
                      <Link href={"/sign-up"}>Get Started For Free</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter */}
      <div className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold ">Sign up for our weekly newsletter</h2>
            <p className="mt-4 text-gray-400">
              Stay updated with the latest news, tips, and insights delivered straight to your inbox and enjoy at your
              comfort.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-400">Trusted by over 100,000+ businesses and individuals</p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-400">4.8/5 . 3420 Reviews</span>
                </span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <Button>Subscribe</Button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-400">
                By signing up, you agree to our <a className="underline">terms of service</a> and{" "}
                <a className="underline">privacy policy</a>.
              </span>
            </p>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <img
              className="h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Newsletter"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <section className="relative overflow-hidden border-t py-10">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <svg width="40" height="46" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                      fill="black"
                    />
                  </svg>
                  <span className="ml-4 text-lg font-bold">WizForms</span>
                </div>
                <div>
                  <p className="mb-4  text-base font-medium">The Wizard Forms</p>
                  <p className="text-sm ">&copy; Copyright 2024. All Rights Reserved by WizForms.</p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">Company</h3>
                <ul>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Features</a>
                  </li>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Pricing</a>
                  </li>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Affiliate Program</a>
                  </li>
                  <li>
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Press Kit</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">Support</h3>
                <ul>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Account</a>
                  </li>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Help</a>
                  </li>
                  <li className="mb-4">
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Contact Us</a>
                  </li>
                  <li>
                    <a className=" text-base font-medium text-gray-400 hover:text-gray-700">Customer Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">Legals</h3>
                <ul>
                  <li className="mb-4">
                    <a className=" text-base font-medium thover:text-gray-700 text-gray-400">Terms &amp; Conditions</a>
                  </li>
                  <li className="mb-4">
                    <a className=" text-base font-medium  hover:text-gray-700 text-gray-400">Privacy Policy</a>
                  </li>
                  <li>
                    <a className=" text-base font-medium  hover:text-gray-700 text-gray-400">Licensing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
