import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
    Info,
    LibraryBig
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import trakz from "../../assets/trakz.png"
import { faqs, features, companyPaths } from './../../config/config';
import RegisterPage from './RegisterPage';


const DefaultHome = () => {

    return (
        <div className="min-h-screen relative z-1">
            {/* Hero Section */}
            <section className="container mx-auto py-24 text-center">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
                    Enhance Team Collaboration <br />
                    <span className="flex mx-auto gap-3 sm:gap-4 items-center">
                        with
                    </span>
                    <div className="flex mx-auto gap-3 sm:gap-4 items-center">
                        <img
                            src={trakz}
                            alt="Trakz logo"
                            className="h-20"
                        />
                    </div>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Simplify project management with our powerful, intuitive solution.
                </p>
                <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
                <ScrollLink to="appFeatures" smooth={true}
                    duration={500}
                    offset={-70}>

                    <Button size="lg" variant="outline" className="font-bold bg-gray-100 text-gray-800 border-gray-300 mr-2">
                        Learn More <Info />
                    </Button>
                </ScrollLink>
                <ScrollLink to="faqs" smooth={true}
                    duration={500}
                    offset={-70}>
                    <Button size="lg" variant="outline" className="w-24 font-bold bg-yellow-500 text-gray-800 border-gray-300">
                        FAQs <LibraryBig />
                    </Button>
                </ScrollLink>
            </section>

            {/* Features Section */}
            <section id="appFeatures" className="bg-gray-900 py-20 px-5">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-gray-800">
                                <CardContent className="pt-6">
                                    <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                                    <h4 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-300">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Companies Carousel */}
            <section className="py-20 relative z-1">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center">
                        Trusted by Industry Leaders
                    </h3>
                    {/* <CompanyCarousel /> */}
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full py-10"
                    >
                        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                            {companyPaths.map(({ name, id, path }) => (
                                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                                    <img
                                        src={path}
                                        alt={name}
                                        width={200}
                                        height={56}
                                        className="h-9 sm:h-14 w-auto object-contain "
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="bg-gray-900 py-20 px-5">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center">
                        Frequently Asked Questions
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center px-5">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold mb-6">
                        Ready to Transform Your Workflow?
                    </h3>
                    <p className="text-xl mb-12">
                        Join thousands of teams already using Trakz to streamline their
                        projects and boost productivity.
                    </p>
                    <Link to="/onboarding">
                        <RegisterPage />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default DefaultHome