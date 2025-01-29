import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// Define proper type for page props
interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  return product ? {
    title: `${product.title} | Your Name`,
    description: product.description,
  } : {
    title: "Project Not Found | Your Name",
    description: "This project could not be found",
  };
}

export default function SingleProjectPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}