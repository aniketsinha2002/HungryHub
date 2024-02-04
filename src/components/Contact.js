
const Contact = () => {
    return (
<div class="flex justify-center items-center h-screen">
    <div class="bg-white p-7 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold mb-8 justify-center text-gray-800">Contact Us</h1>
        <form action="" class="flex flex-col">
            <input type="text" class="border border-gray-300 rounded-md px-10 py-2 mb-4 focus:outline-none focus:border-black" placeholder="NAME" />
            <input type="text" class="border border-gray-300 rounded-md px-10 py-10 mb-4 focus:outline-none focus:border-black" placeholder="MESSAGE" />
            <button type="button" class="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-200 font-semibold">SUBMIT</button>
        </form>
    </div>
</div>
    );
};

export default Contact;