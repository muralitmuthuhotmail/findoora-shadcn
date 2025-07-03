"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card";
import { StarIcon } from "lucide-react";
import { motion } from "motion/react";

// Types
export interface TestimonialData {
  id: number;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  avatar: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index?: number;
  showAnimation?: boolean;
  className?: string;
}

interface TestimonialGridProps {
  testimonials: TestimonialData[];
  columns?: 1 | 2 | 3 | 4;
  showAnimation?: boolean;
  className?: string;
}

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

// Star Rating Component
const StarRating = ({ rating, maxRating = 5, className }: StarRatingProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className || ""}`}
    >
      {[...Array(maxRating)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-6 h-6 ${
            i < rating
              ? "fill-yellow-500 stroke-yellow-500"
              : "fill-muted stroke-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
  index = 0,
  showAnimation = true,
  className,
}: TestimonialCardProps) => {
  const CardWrapper = showAnimation ? motion.div : "div";

  const animationProps = showAnimation
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.2 },
      }
    : {};

  return (
    <CardWrapper {...animationProps} className={className}>
      <Card className="flex flex-col h-full bg-card">
        <CardHeader>
          <StarRating rating={testimonial.rating} />
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-lg text-center">
            &quot;{testimonial.testimonial}&quot;
          </p>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-center gap-3 w-full">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.designation}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </CardWrapper>
  );
};

// Testimonial Grid Component
const TestimonialGrid = ({
  testimonials,
  columns = 3,
  showAnimation = true,
  className,
}: TestimonialGridProps) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`w-full mx-auto grid ${gridClasses[columns]} gap-8 ${className || ""}`}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          showAnimation={showAnimation}
        />
      ))}
    </div>
  );
};

// Default testimonial data
export const DEFAULT_TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 3,
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
];

export {
  StarRating,
  TestimonialCard,
  TestimonialGrid,
  type TestimonialCardProps,
  type TestimonialGridProps,
  type StarRatingProps,
};
