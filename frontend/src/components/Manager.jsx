import React, { useRef, useState, useEffect } from 'react';

const Manager = () => {
    console.log('Manager component rendered');

    const formref = useRef();
    const passwordref = useRef();
    const [form, setform] = useState({
        site: "", username: "", password: ""
    })

    const showpassword = (e) => {
        console.log('Show password clicked');
        const imgElement = e.currentTarget.querySelector('img');
        if (imgElement.src.includes("eyecross.png.png")) {
            imgElement.src = "./eye.png.jpg";
            passwordref.current.type = "text";
        }
        else {
            imgElement.src = "./eyecross.png.png";
            passwordref.current.type = "password";
        }
        console.log('Image src:', imgElement.src);
    };

async function getpasswords  (){
let data = await fetch("http://localhost:3000/");
data = await data.json();
setpasswords(data);
console.log(data);

}

    const [passwords, setpasswords] = useState([]);
    useEffect( () => {
        getpasswords();
    })


    const addpassword = async (e) => {
        e.preventDefault();
        if (!formref.current.checkValidity()) {
            formref.current.reportValidity();
            return;
        }
        let data = await fetch("http://localhost:3000/", {method:"POST",headers :{"Content-Type":"application/json"}, body:JSON.stringify(form)})
        console.log(passwords);
        // setform({ site: "", username: "", password: "" });
    }


        function handlechange(e) {
            setform({
                ...form,
                [e.target.name]: e.target.value
            });
        }

    function handledelete(index) {
        console.log('Delete clicked for index:', index);
        console.log('Current passwords:', passwords);
        let url = "http://localhost:3000/" + passwords[index].id;
        fetch(url, {method : "DELETE"});
    }

        return (
        <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black min-h-screen relative flex flex-col items-center px-2 sm:px-4 md:px-8">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-20 pointer-events-none" />

            <div className="bg-blend-luminosity mycontainer mb-0 relative w-full max-w-2xl mt-8 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl sm:text-4xl text-center text-white mb-2">
                    <span className="text-purple-400">&lt;</span>Password
                    <span className="text-purple-400">Manager&gt;</span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg text-center mb-4">Managing Passwords is No More Hectic!</p>
                <form ref={formref} className="w-full">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <input placeholder="Enter website URL" name="site" value={form.site} required onChange={handlechange} className="rounded-full bg-gray-700 border border-purple-500 text-white w-full p-3 sm:p-4 py-1" type="text" />
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                            <input placeholder="Enter Username" name="username" onChange={handlechange} value={form.username} className="rounded-full bg-gray-700 border border-purple-500 text-white w-full p-3 sm:p-4 py-1" type="text" />
                            <div className="relative w-full">
                                <input ref={passwordref} required name="password" onChange={handlechange} placeholder="Enter Password" value={form.password} className="rounded-full bg-gray-700 border border-purple-500 text-white w-full p-3 sm:p-4 py-1 pr-10" type="password" />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    <button type="button" style={{ width: '20px', height: '20px', background: 'none', border: 'none', padding: 0 }} onClick={showpassword} aria-label="Toggle Password Visibility">
                                        <img src="./eyecross.png.png" alt="Eye Icon" style={{ width: '20px', height: '20px' }} />
                                    </button>
                                </span>
                            </div>
                        </div>
                        <button type="submit" onClick={addpassword} className="flex justify-center gap-2 items-center bg-purple-600 rounded-full hover:scale-105 transition-transform px-4 py-2 w-fit text-white mx-auto">
                            Add Password
                            <lord-icon src="https://cdn.lordicon.com/ueoydrft.json" trigger="hover" colors="primary:#ffffff,secondary:#6b46c1,tertiary:#ebe6ef" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-white to-transparent rounded-full opacity-40 blur-lg shadow-[0_0_60px_20px_rgba(255,255,255,0.5)] pointer-events-none" />

            <div className="passwords mycontainer w-full flex flex-col items-center mt-8 mb-8 px-4">
                {passwords.length === 0 && <h2 className="font-bold text-xl sm:text-2xl py-4 text-white text-center">No Passwords Yet</h2>}
                {passwords.length !== 0 && <h2 className="font-bold text-xl sm:text-2xl py-4 text-white text-center">Your Passwords</h2>}
                <div className="w-full bg-gray-900/70 p-2 sm:p-4 rounded-md shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-gray-300 text-sm sm:text-base">
                            <thead className="bg-purple-700 text-white">
                                <tr>
                                    <th className="py-2 px-2">Site</th>
                                    <th className="py-2 px-2">Username</th>
                                    <th className="py-2 px-2">Password</th>
                                    <th className="py-2 px-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800">
                                {passwords.map((item, index) => (
                                    <tr key={item.id }>
                                        <td className="py-2 px-2 border border-gray-700 text-center break-all">
                                            <a className="text-purple-400" onClick={() => window.open(item.site.startsWith('http') ? item.site : `http://${item.site}`)} href={item.site}>{item.site}</a>
                                        </td>
                                        <td className="py-2 px-2 border border-gray-700 text-center break-all">{item.username}</td>
                                        <td className="py-2 px-2 border border-gray-700 text-center break-all">{item.password}</td>
                                        <td className="py-2 px-2 border border-gray-700 text-center">
                                            <button 
                                                type="button" 
                                                onClick={() => handledelete(index)} 
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200 cursor-pointer w-full"
                                                style={{ zIndex: 10, position: 'relative' }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager
