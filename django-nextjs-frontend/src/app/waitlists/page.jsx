"use client"
import useSWR from 'swr';

import fetcher from "../../lib/fetcher"

const WAITLIST_API_URL = "http://localhost:8001/api/waitlists/"

export default function Waitlists() {
  const {data, error, isLoading} = useSWR(WAITLIST_API_URL, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div>
                {JSON.stringify(data)}
            </div>
        </main>
    </div>
  );
}
