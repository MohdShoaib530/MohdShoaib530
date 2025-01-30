import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Properly await dynamic params
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  return {
    title: product?.title || "Project Not Found",
    description: product?.description || "Project not found",
  };
}

export default async function SingleProjectPage({ params }: PageProps) {
  // Await the params destructing
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}