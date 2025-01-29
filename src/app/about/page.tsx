import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Mohd Shoaib",
  description:
    "Mohd Shoaib is a full stack web developer.",
};

export default function AboutPage() {
 
  return (
    <Container>
      <Heading className="font-black mt-4">About Me</Heading>
      <About />
    </Container>
  );
}
