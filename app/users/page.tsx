export default function users() {
    return (
        <div className= "relative min-h-screen bg-gray-300 flex flex-col justify-center items-center gap-4">

            <div className= "absolute top-12 left-12">
            </div>

            <div className="bg-gray-100 p-8 h-120 w-100 rounded-4xl flex flex-col justify-between text-gray-900">
            <div className="flex gap-4 justify-between items-center">
                <p>Client details</p>
                    <img src="/x.svg" alt="x" className="w-8 h-8" />
                    
            </div>

            <div className="relative bottom-5 right-3 flex -space-x-4 items-center">
             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
             
             <p className="p-8 font-bold">Cornelius Greenfelder</p>
             
            </div>

            <div className="bg-gray-300 p-5 h-34 w-80 rounded-4xl flex flex-col justify-between text-gray-900">
                <p>Projects</p>      

                <div className="flex gap-4 justify-between items-center">
                    <p className="font-bold">Ongoing</p>
                    <p className="font-bold">Completed</p>
                </div>
                <div className="flex gap-4 justify-between items-center">
                    <p className="font-bold">2 ($3.8k)</p>
                    <p className="font-bold">5 ($54k)</p>
                </div>
            </div>

            
                <div className="flex gap-4 justify-between items-center">
                <p className="font-bold">Location</p>
                <p className="font-bold">United States, New York</p>
                </div>
                <div className="flex gap-4 justify-between items-center">
                <p className="font-bold">With Us</p>
                <p className="font-bold">6 Jan 2024</p>
                </div>

            <div className="bg-gray-300 p-5 h-10 w-80 rounded-4xl flex flex-col justify-between text-gray-900">
                <p>Projects</p>
            </div>
            </div>

        </div> 
    );
}