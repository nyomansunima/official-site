import * as React from 'react'
import { Accordion } from '@shared/components'
import { FAQData, FAQItem } from './faq-item'
import faqsData from './faqs-data.json'

const faqs = faqsData.faqs as FAQData[]

export function FAQListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">FAQs.</span>
        <h2 className="text-lg font-medium">Most asked questions.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="w-full flex mt-10">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-2 w-full"
        >
          {faqs.map((faq, index) => (
            <FAQItem faq={faq} position={index + 1} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}
