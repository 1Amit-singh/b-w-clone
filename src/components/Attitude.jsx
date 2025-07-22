import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import CardBox from './CardBox';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger)

const Attitude = () => {

  const cardData = [
    {
      rule: "RULE NO.1",
      heading: "DISCIPLINE",
      description: "At our core, we are a team of disciplined professionals who are passionate about our craft. Our process is thorough, ensuring that we create work that is not only buzzworthy, but also surpasses your expectations."
    },
    {
      rule: "RULE NO.2",
      heading: "INNOVATION",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions. Innovation drives every project we undertake, ensuring your brand stays ahead of the competition."
    },
    {
      rule: "RULE NO.3",
      heading: "COLLABORATION",
      description: "We believe in the power of teamwork and open communication. By working closely with our clients, we create solutions that truly reflect their vision and exceed their business objectives."
    },
    {
      rule: "RULE NO.4",
      heading: "EXCELLENCE",
      description: "Quality is never an accident. It's the result of intelligent effort, sincere intention, and skillful execution. We strive for excellence in every pixel, every line of code, and every strategic decision."
    }]

  useGSAP(() => {
    const textSplit1 = SplitText.create(".attitude h1", {
      type: "chars",
    })
    gsap.from(textSplit1.chars, {
      yPercent: 100,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".attitude-section",
        start: "20% bottom",
        end: "bottom bottom",
        markers: true,
        yoyo: true, 
        scrub: 1,
      }
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".attitude-section",
        start: "top top",
        end: "150% top",
        markers: true,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".card-item", {
            scale: 1,
            duration: 0.1,
            ease: "power4.out",
          });
        },
      }
    })
    tl.fromTo(".cards-scroll", {
      x: "100% ",
      ease: "linear",
    }, {
      x: "-100% ",
      ease: "linear",
    })

  })
  return (
    <section className='attitude-section relative overflow-hidden'>
      <div className='min-h-screen h-dvh lg:h-[101vh] bg-primary attitude flex items-center justify-center relative'>
        <h1 className='text-[34vw] text-center font-tunnels-bold text-white lowercase'>Attitude</h1>
        <div className='absolute top-[50%] -translate-y-1/2 left-0 flex gap-44 cards-scroll'>
          {cardData.map((card, index) => (
            <div className={`card-item h-[80vh] flex ${index%2==0 ? "items-start" : "items-end"}`} key={index}>
              <CardBox
                key={index}
                rule={card.rule}
                heading={card.heading}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attitude