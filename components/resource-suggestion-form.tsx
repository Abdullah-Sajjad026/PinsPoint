"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const schema = z.object({
  title: z.string().min(1, "Please enter a title"),
  url: z.string().url("Please enter a valid URL"),
});

type ResourceSuggestionFormValues = z.infer<typeof schema>;

/**
 * This component is used to suggest a resource.
 */
export const ResourceSuggestionForm = () => {
  const form = useForm<ResourceSuggestionFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      url: "",
    },
  });

  const handleResourceSubmit = async (data: ResourceSuggestionFormValues) => {
    console.log({ data });
  };

  return (
    <div className="p-4 rounded-xl bg-[hsla(0,0%,100%,.2)] shadow text-base">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleResourceSubmit)}>
          {/* <h3 className="text-xl mb-4 text-green-300 font-medium">
            Suggest a resource
          </h3> */}

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Title</FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Resource Title"
                      className="text-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-red-200 text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* <FormLabel>URL</FormLabel> */}
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Resource URL"
                        className="text-lg"
                      />
                    </FormControl>
                    <FormMessage className="text-red-200 text-base" />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button type="submit" className="mt-4 text-base">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
