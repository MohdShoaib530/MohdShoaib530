import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohd Shoaib",
  description:
    "Mohd Shoaib is a full stack web developer.",
};

export default function Projects() {
  return (
    <Container>
      <div className="h-screen">
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP.{" "}
      </Paragraph>
      <Contact />
      </div>
    </Container>
  );
}
