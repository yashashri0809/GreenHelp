import React from "react";
import "./Contact.css";
import Header from "../components/Layout/Header";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons from react-icons library

const Contact = () => {
    return (
        <>
         <Header activeHeading={1} />
         <section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Us</h2>
    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
      Got a technical issue?  Let us know.
    </p>
    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
        <input type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required />
      </div>
      <div>
        <label for="subject" class="block mb-2 text-sm font-medium text-black">Subject</label>
        <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium text-black">Your message</label>
        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
      </div>
      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-black bg-white border border-black rounded-lg sm:w-fit hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-black">Send message</button>
    </form>
  </div>
</section>
        </>
      );
    
};

export default Contact;