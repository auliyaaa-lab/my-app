export default function Latihan_uts() {
    return(
        <section className="h-screen bg-yellow-50 flex gap-5 p-2 justify-end items-center text-sm ">
            <div className="bg-gray-900 h-180 w-60 rounded-xl flex flex-col justify-around gap-y-1 p-6 text-gray-400">
                    <div>
                        <img src="/paw.svg" alt="paw" className="w-7 h-7 invert"/>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p>ACCOUNT</p>
                        <div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5 items-center">
                                    <img src="/category.svg" alt="category" className="w-4 h-4 invert"/>
                                    <p>Overview</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/mood-happy.svg" alt="happy" className="w-4 h-4 invert"/>
                                    <p>Hire Freelancer</p>
                                        <div className="rounded-full bg-orange-400 w-4 h-4 flex items-center justify-center text-xs">
                                            <p>4</p>
                                        </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/credit-card.svg" alt="credit-card" className="w-4 h-4 invert"/>
                                    <p>Payment</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/shopping-cart.svg" alt="shopping-cart" className="w-4 h-4 invert"/>
                                    <p>My Order</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/building-store.svg" alt="building-store" className="w-4 h-4 invert"/>
                                    <p>My Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-0.5 bg-zinc-800 w-full"/>
                    <div className="flex flex-col gap-5">
                        <p>PRODUCT</p>
                        <div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5 items-center">
                                    <img src="/circle-plus.svg" alt="Add" className="w-4 h-4 invert"/>
                                    <p>Add Organisation</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/package.svg" alt="products" className="w-4 h-4 invert"/>
                                    <p>My Products</p>
                                        <div className="rounded-full bg-orange-400 w-4 h-4 flex items-center justify-center text-xs">
                                            <p>8</p>
                                        </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/stack-3.svg" alt="stocks" className="w-4 h-4 invert"/>
                                    <p>Stocks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-0.5 bg-zinc-800 w-full"/>
                    <div className="flex flex-col gap-5">
                        <p>ADMIN</p>
                        <div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5 items-center">
                                    <img src="/Settings.svg" alt="Settings" className="w-4 h-4 invert"/>
                                    <p>Account Setup</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/users.svg" alt="users" className="w-4 h-4 invert"/>
                                    <p>Manage Users</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <img src="/bolt-off.svg" alt="Logout" className="w-4 h-4 invert"/>
                                    <p>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>    
            </div>
            <div className="bg-gray-900 h-180 w-20 rounded-xl flex flex-col justify-around items-center gap-7 p-7">
                <div className="w-15 h-15 bg-orange-400 rounded-xl flex justify-center items-center">
                    <img src="/paw.svg" alt="paw" className="w-7 h-7 invert"/>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <img src="/category.svg" alt="category" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/mood-happy.svg" alt="happy" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/credit-card.svg" alt="credit-card" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/shopping-cart.svg" alt="shopping-cart" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/building-store.svg" alt="building-store" className="w-7 h-7 invert"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <img src="/circle-plus.svg" alt="Add" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/package.svg" alt="products" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/stack-3.svg" alt="stocks" className="w-7 h-7 invert"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <img src="/Settings.svg" alt="Settings" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/users.svg" alt="users" className="w-7 h-7 invert"/>
                    </div>
                    <div>
                        <img src="/bolt-off.svg" alt="Logout" className="w-7 h-7 invert"/>
                    </div>
                </div>
            </div>
        </section>
    )
}