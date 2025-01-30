import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  // Properly await dynamic params
  const slug = params.slug
  const product = products.find((p) => p.slug === slug);

  return {
    title: product?.title || "Project Not Found",
    description: product?.description || "Project not found",
  };
}

export default async function SingleProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  // Await the params destructing
  const  slug  =  params.slug;
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