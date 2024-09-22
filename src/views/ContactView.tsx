// import AtomMachine from "components/AtomMachine";
import { useState } from "react";
import { ViewLayout, Button } from "components";

import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    // Handle form submission (e.g., send to an API)
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <ViewLayout id="contact" className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Contact Us
        </h2>
        <p>
          Use this to get a quote, learn more about our offerings, or for
          general questions.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <Field className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </Label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </Field>
            <Field className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </Label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </Field>
            <Field className="mb-4">
              <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                required
              ></Textarea>
            </Field>
            <Button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary"
            >
              Send Message
            </Button>
          </Fieldset>
        </form>
      </div>
    </ViewLayout>
  );
};
export default ContactView;
