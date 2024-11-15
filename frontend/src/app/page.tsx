import { FbForm } from "@/components/Form";


export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen min-w-screen bg-[#F0F2F5]">
    <div className="bg-white p-10 min-w-[320px] ">
      <p className="text-[#1877F2] text-center text-xl font-bold mb-4">facebook</p>
    <FbForm></FbForm>
    </div>
   </div>
  );
}
