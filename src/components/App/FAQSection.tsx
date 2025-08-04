import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "@/hooks/useTranslation";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is this fitness app?",
      answer: "This app provides a comprehensive fitness solution with personalized workout plans, delicious recipes, and a supportive community to help you reach your health goals."
    },
    {
      question: "Who is this app for?",
      answer: "This app caters to everyone from beginners to seasoned athletes. Whether you're looking to lose weight, gain muscle, improve overall fitness, or train for a specific sport, we have something for you."
    },
    {
      question: "What are the benefits of using this fitness app?",
      answer: "Enjoy personalized workout plans tailored to your fitness level and goals. Access a vast library of delicious and healthy recipes. Track your progress with detailed statistics and celebrate your achievements. Join a supportive community of like-minded individuals."
    },
    {
      question: "What devices is this app compatible with?",
      answer: "This app is available on both iOS and Android devices."
    },
    {
      question: "Does the app require an internet connection?",
      answer: "While an internet connection is required for initial setup and syncing, you can access most features offline, including workouts and recipes."
    },
    {
      question: "Is there a free trial or free version available?",
      answer: "Yes, we offer a 7-day free trial to experience the premium features. After the trial, you can choose from various subscription options to continue your fitness journey."
    },
    {
      question: "What type of workouts are included in the app?",
      answer: "Explore a wide variety of workouts, including strength training, cardio, yoga, HIIT, and more. Our expert trainers design each workout to challenge and motivate you."
    },
    {
      question: "Does the app provide nutrition guidance?",
      answer: "Absolutely! This app offers a vast collection of healthy and delicious recipes, meal plans, and nutritional guidance to support your fitness goals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <T>Frequently Asked Questions</T>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  <T>{faq.question}</T>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  <T>{faq.answer}</T>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};