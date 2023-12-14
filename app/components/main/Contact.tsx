"use client";
import React, { ChangeEvent, useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/rCRzIXymy";

const Contact = () => {
  const [name, setName] = useState("");
  const [contactMail, setContactMail] = useState("");
  const [projectBudget, setProjectBudget] = useState("800");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setInput = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "name":
        setName((prevName) => e.target.value);
        break;
      case "contactMail":
        setContactMail((prevMail) => e.target.value);
        break;
      case "projectBudget":
        setProjectBudget((prevProjectBudget) => e.target.value);
        break;
      default:
        return;
    }
  };

  if (projectBudget === "15000") {
    setProjectBudget((prevProjectBudget) => "15000+");
  }

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        contactMail,
        projectBudget,
      }),
    });
    setIsSubmitted(true);
  };

  return (
    <section className="h-[100vh] w-full flex justify-center">
      {!isSubmitted ? (
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-8 items-center w-[50%]"
        >
          <div>
            <input
              id="name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e)}
              className="bg-white bg-opacity-5 rounded-lg shadow-lg border-2 border-[#2A0E61] text-white p-[1vh] focus:outline-violet-600 focus:outline-none focus:outline-offset-0"
            />
          </div>
          <div>
            <input
              id="contactMail"
              value={contactMail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e)}
              className="bg-white bg-opacity-5 rounded-lg shadow-lg border-2 border-[#2A0E61] text-white p-[1vh] focus:outline-violet-600 focus:outline-none focus:outline-offset-0"
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="steps-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Budget
            </label>
            <input
              type="range"
              min="500"
              max="15000"
              defaultValue="800"
              id="projectBudget"
              step="50"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInput(e);
              }}
            />
            <input
              type="text"
              value={`$${projectBudget}`}
              id="projectBudgetValue"
              readOnly={true}
              disabled={true}
              className="bg-white bg-opacity-5 placeholder:text-white  rounded-lg shadow-lg border-2 border-[#2A0E61] text-white p-[1vh]"
            />
          </div>
          <div>
            <textarea
              id="projectDescription"
              className="w-[70vw] h-[40vh] bg-white bg-opacity-5 rounded-lg shadow-lg border-2 border-[#2A0E61] text-white p-[1vh] focus:outline-violet-600 focus:outline-none focus:outline-offset-0"
              rows={10}
              cols={50}
            />
          </div>
          <button
            className="py-2 button-primary text-center p-[1rem] text-white cursor-pointer rounded-lg max-w-[200px]"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="block text-center">
          <h2 className="text-white text-bold">Form Submitted</h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
