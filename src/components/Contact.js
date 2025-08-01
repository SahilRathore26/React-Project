const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="p-4 m-4">
        <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Enter Name"></input>
        <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="Message.."></input>
        <button className="bg-blue-200 border border-black p-2 m-2 rounded-lg cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default Contact;