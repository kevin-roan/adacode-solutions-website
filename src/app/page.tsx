import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Colors from "@/contants/Colors";
import HomeCard from "@/components/HomeCard";
import WhyChooseCard from "@/components/WhyChooseCard";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

const page = () => {
  return (
    <main>
      <div className="flex items-center justify-center gap-10 my-10">
        <div className="w-[40%]">
          <h1
            className="text-6xl font-extrabold"
            style={{ color: Colors.secondary }}
          >
            <span style={styles.span}> Develop</span>Your
            <span style={styles.span}> Skills</span> <br />
            in a new and
            <span style={styles.span}> unique </span>
            way
          </h1>
          <p className="py-3 text-xl" style={{ color: Colors.secondary }}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div>
            <button
              className="p-2 rounded-xl px-4 mr-2 font-bold"
              style={{
                backgroundColor: Colors.primary,
                color: Colors.buttonBg,
              }}
            >
              Get Started
            </button>
            <button
              className="px-4 p-2 rounded-xl font-bold"
              style={{
                backgroundColor: Colors.buttonBg,
                color: Colors.primary,
              }}
            >
              Hire from us
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/heroimage.png"
            alt="hero image"
            height={500}
            width={400}
            className="rounded-[50%]"
          />
        </div>
      </div>
      <section>
        <HomeCard />
      </section>
      <div className="bg-black justify-center items-center  py-10">
        <SectionHeader />
        <div className="flex flex-wrap justify-center">
          <WhyChooseCard />
          <WhyChooseCard />
          <WhyChooseCard />
          <WhyChooseCard />
          <WhyChooseCard />
          <WhyChooseCard />
        </div>
      </div>
      <section className="testimonials">
        <SectionHeader />
        <div className="flex flex-wrap justify-center gap-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
    </main>
  );
};

const styles = {
  span: {
    color: Colors.primary,
  },
};

export default page;
