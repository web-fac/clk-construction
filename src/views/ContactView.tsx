// import AtomMachine from "components/AtomMachine";
import { useRef, useState } from "react";
import {
  ViewLayout,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Select,
} from "components";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/components/hooks/use-toast"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" })
    .max(400),
  status: z.string(),
});

const ContactView = ({ options }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      status: "", //store selected value
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <ViewLayout
      id="contact"
      className="bg-container py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="fg-container w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Contact Us
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@mycompany.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We will use this to respond to you.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Select Field for Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Options</FormLabel>
                  <FormControl>
                    <Select options={options} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Hey, there!" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>Send us a brief message.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send Message</Button>
          </form>
        </Form>
      </div>
    </ViewLayout>
  );
};
export default ContactView;
