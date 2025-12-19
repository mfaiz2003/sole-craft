'use client'
import { useRouter } from "next/navigation";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Login() {
  const router = useRouter();

  return (
    <>
    <Header />
      <h1>Hello Faiz</h1>
      <button onClick={() => router.push('/dashboard/signup')}>
        Click Here
      </button>
    <Footer />
    </>
  );
}