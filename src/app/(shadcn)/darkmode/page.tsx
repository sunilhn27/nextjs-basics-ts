"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DatePickerForm } from "@/components/Form-Calendar";

function DarkMode() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <section className="my-12">
   

      <div className="flex justify-center items-center">
        <Button>Click Me</Button>
      </div>

      <div className="flex justify-center items-center mt-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="mx-2">
              A vertically stacked set of interactive headings?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <div className="flex justify-center items-center my-12">
          <AlertDialog>
            <AlertDialogTrigger>
              <p className="border-2 px-4 py-2 rounded-lg">Open</p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="justify-center flex items-center my-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="flex justify-center items-center">
          <DatePickerForm />
        </div>
      </div>
    </section>
  );
}

export default DarkMode;
