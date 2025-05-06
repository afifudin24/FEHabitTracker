"use client";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import bodyDarkImage from "../../assets/bodydark.svg";
import bodyLightImage from "../../assets/body.svg";
import ButtonHref from "@/components/ButtonHref";
const Section1 = () => {
  const h1Text = [
    "Your New Habit Starts Today",
    "Track. Improve. Repeat.",
    "Master Your Daily Routine",
    "Stay Consistent, Stay Empowered",
    "Small Steps, Big Changes",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // mulai fade out

      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * h1Text.length);
        setTextIndex(randomNum);
        setFade(true); // fade in setelah ganti teks
      }, 400); // durasi fade out
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div>
        <Container>
          <div className="flex flex-col md:flex-row  my-5  gap-5 py-5 justify-between items-center">

            <div className="left md:text-start text-center" data-aos="fade-right" data-aos-duration="1000">
              <div className="title">
              <h1
      className={`h1Text mb-5 font-bold text-[2rem] transition-opacity duration-400 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {h1Text[textIndex]}
    </h1>
                <p className="mb-5">Build better habits, one day at a time. Track your progress and stay motivated on your journey to self-improvement.</p>
                <ButtonHref href="/dashboard" children="Start Tracking"/>
              </div>
            </div>
            <div className="right my-3 md:my-0" data-aos="fade-left" data-aos-duration="1000">
              <Image
                src={bodyDarkImage}
                alt="Dark Image"
                className="hidden w-[100%] object-cover dark:block"
                
              />
              <Image
                src={bodyLightImage}
                alt="Light Image"
                className="dark:hidden w-[100%] object-cover"
                
              />
            </div>



          </div>
        </Container>
      </div>
    );
}

export default Section1;