"use client";

import {
  SectionLayout,
  SectionHeader,
  SectionContent,
} from "@/components/layout";
import {
  TestimonialGrid,
  DEFAULT_TESTIMONIALS,
} from "@/components/blocks/hero/core";

const Testimonial = () => (
  <SectionLayout variant="fullscreen" spacing="normal" align="center">
    <SectionContent maxWidth="full" className="space-y-14">
      <SectionHeader title="Testimonials" />

      <TestimonialGrid
        testimonials={DEFAULT_TESTIMONIALS}
        columns={3}
        showAnimation={true}
      />
    </SectionContent>
  </SectionLayout>
);

export default Testimonial;
