import {redirect} from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <div className="bg-blue-600 h-full">
    </div>
  )
}
