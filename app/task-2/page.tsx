export default function task2() {
    return (
        <div className= "relative min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-8">
            <div className="absolute top-12 left-12">
        <img src="/chevrons-up.svg" alt="Brand" className="w-8 h-8" />
        </div>


        <div className="flex gap-4">
        <div className="relative bg-blue-300 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="flex gap-4 ">
                <img src="/palette.svg" alt="Design" />
                    <p>design</p>
            </div>
            <div>
                <p className="text-4xl">Adobe Photoshop</p>
                <p>in 3 days</p>
            </div>

            <div className="absolute bottom-5 right-5 flex -space-x-4 items-center">
             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
            
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>

            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="User 3" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
           
            <div className="w-10 h-10 rounded-full bg-white border-4 border-white flex items-center justify-center ring-1 ring-black/5">
              <span className="text-xl font-bold text-blue-950">9+</span>
            </div>
          </div>

        </div>


        <div className="relative bg-green-300 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="absolute top-6 right-6">
                <img src="/carambola.svg" alt="Design" />
            </div>
            <div className="flex gap-4 ">
                <img src="/terminal-2.svg" alt="Design" />
                    <p>AI</p>
            </div>
            <div>
        <p className="text-4xl">DALL・E 2, Midjourney, Stable Diffusion</p>
                <p>in 5 days</p>
            </div>
            <div className="absolute bottom-5 right-5 flex -space-x-4 items-center">
             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
            
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>

            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="User 3" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
           
            <div className="w-10 h-10 rounded-full bg-white border-4 border-white flex items-center justify-center ring-1 ring-black/5">
              <span className="text-xl font-bold text-blue-950">9+</span>
            </div>
          </div>
        </div>
        </div>

        <div className="flex gap-4">
        <div className="bg-purple-300 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="flex gap-4 ">
                <img src="/palette.svg" alt="Design" />
                    <p>design</p>
            </div>
            <div>
                <p className="text-4xl">figma</p>
                <p>8 hours ago</p>
            </div>
        </div>


        <div className="bg-orange-300 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="flex gap-4 ">
                <img src="/code.svg" alt="Design" />
                    <p>Codding</p>
            </div>
            <div>
                <p className="text-4xl">Python</p>
                <p>2 days ago</p>
            </div>
        </div>


        <div className="bg-red-300 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="flex gap-4 ">
                <img src="/palette.svg" alt="Design" />
                    <p>design</p>
            </div>
            <div>
                <p className="text-4xl">Sketch</p>
                <p>4 days ago</p>
            </div>
        </div>
        </div>

        <div className="fixed bottom-19 right-10">
    <p className="text-gray-500 font-medium tracking-wider">Day 020 / 365</p>
    </div>

        </div>

    );
}