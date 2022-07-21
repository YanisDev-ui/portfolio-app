/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface NavbarProps {
  start: number;
}

export default function Counter(props: NavbarProps) {
  return (
    <section class="py-8 px-4 lg:px-10 bg-gray-800">
  <nav class="relative flex justify-between items-center">
    <a class="text-2xl text-white font-bold" href="#">
      <img class="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"/>
    </a>
    <button class="p-2 navbar-burger">
      <svg class="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
    </button>
  </nav>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
      <div class="flex items-center mb-16 pr-6">
        <a class="ml-10 text-2xl text-gray-800 font-bold" href="#">
          <img class="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"/>
        </a>
      </div>
      <div>
        <ul>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Product</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Story</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Features</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Contact</a></li>
        </ul>
      </div>
      <div class="mt-auto px-10">
        <div class="pt-6"><a class="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
        <p class="mt-6 mb-4 text-lg text-center">
          <span>2021 © Zospace. All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>
  );
}
