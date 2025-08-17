"use client";

import { authClient } from "@/lib/auth-client";

import { useSession } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Hello {session?.user?.name}</h1>
    </>
  );
}
