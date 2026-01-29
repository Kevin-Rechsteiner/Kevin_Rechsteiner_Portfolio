import Image from "next/image";

export default function me() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 self-center">Steckbrief</h1>
            <div className="grid grid-cols-2 items-center m-10">
                <div className="flex justify-center items-center">
                    <Image src="/placerholder400x400.svg" alt="steckbrief" width={400} height={400}/>
                </div>
                <div className="flex justify-center items-center text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta eligendi est eveniet excepturi facilis, fugit illo incidunt iste iusto libero modi natus pariatur porro praesentium repudiandae sint, tempore voluptatibus!
                </div>
            </div>
        </div>

    );
}
