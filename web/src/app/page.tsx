export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden" >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[288px] w-[526] bg-purple-700" />


      </div>
      <div className=" flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className=" text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  );
}
