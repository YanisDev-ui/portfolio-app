/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Counter Navbar/>
    </div>
  );
}
