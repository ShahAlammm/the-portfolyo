"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import useTestimonial from '../hooks/useTestimonial';
import SkillText from "../elements/SkillText";


export function Testimonial() {

    const [testimonials] = useTestimonial()
    console.log(testimonials)

    return (
        <div className="py-12">
            <SkillText IconText={"Customer Testimonials Section"}/>
            <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}
