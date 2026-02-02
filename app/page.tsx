import Header from "../components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (

    <div>
<Link href="/Main">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-70 h-15">
        <p className="text-3xl font-bold "> main페이지 이동</p>
      </button>
    </Link>
    </div>
  );
}

