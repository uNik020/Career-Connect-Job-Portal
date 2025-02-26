import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#512b95]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How can I create an account?</AccordionTrigger>
          <AccordionContent>
            To create an account, simply click the "Sign Up" button on the homepage, provide your email, create a password, and fill in your profile details.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I apply for jobs?</AccordionTrigger>
          <AccordionContent>
            After logging in, browse the job listings by category or location. Once you find a job that interests you, click "Apply" to submit your application.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I save jobs for later?</AccordionTrigger>
          <AccordionContent>
            Yes, you can save jobs by clicking the "Save Job" button on the job listing. This will add it to your saved jobs list for easy access later.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How do I reset my password?</AccordionTrigger>
          <AccordionContent>
            To reset your password, go to the login page and click on "Forgot Password." Enter your registered email, and we will send you a link to reset your password.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Are there any fees for applying to jobs?</AccordionTrigger>
          <AccordionContent>
            No, applying for jobs on Career Connect is completely free. We are committed to providing equal opportunities for all job seekers.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
            If you need help, visit our "Contact Us" page where you can find our support email or submit a help request form.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faq
