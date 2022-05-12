import styles from "@styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQ = () => {
  const faqData = [
    {
      question: "Wen mint?",
      answer: "You'll see soon. Check out our source code to mint your own.",
    },
    {
      question: "What is the point?",
      answer:
        "Exclusive access to public spaces, express pass to stand in the longest lines. You can also check out our source code :)",
    },
    {
      question: "If I have questions, where can I ask?",
      answer: "Please file a ticket in our repo.",
    },
  ];

  return (
    <div id="faq">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.title}>FAQ</h1>
          <div className={styles.content}>
            <Accordion sx={{ width: "100%" }} allowToggle>
              {faqData.map((faq, idx) => {
                return (
                  <AccordionItem key={idx}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <p style={{ fontWeight: "bold" }}>{faq.question}</p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p> {faq.answer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;
