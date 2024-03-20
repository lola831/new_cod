import { useState } from "react";

export default function Subscribe () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        // TODO when backend/DB connection is set up
    }

    return (
        <div>
            <h2 className="font-bold text-md pb-4 pl-1">Subscribe to our newsletter</h2>
            <form className="pl-1 text-xs" onSubmit={handleSubmit}>
                <div className="pb-2">
                    <input className="p-1 pl-2" placeholder="Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                </div>
                <div className="pb-3">
                    <input className="p-1 pl-2" placeholder="Email" type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                </div>
                <button className=" bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded">Subscribe</button>
            </form>
        </div>
    )
}
