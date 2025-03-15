import React from 'react'

const Contact = () => {
  return (
    <form>
    <h2 className="text-2xl font-bold mb-5 text-slate-500">Contact Me</h2>
    <div className="mb-3">
      <input
        type="text"
        placeholder="Your name"
        name="name"
        className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-600 bg-slate-500 border-0 rounded shadow"
      />
    </div>
    <div className="mb-3">
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-600 bg-slate-500 border-0 rounded shadow"
      />
    </div>
    <div className="mb-3">
      <input
        placeholder="Your message"
        name="message"
        className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-600 bg-slate-500  border-0 rounded shadow"
      />
    </div>
    <button className="px-6 mb-10 py-3 text-sm text-gray-400 uppercase transition-all duration-150 ease-linear bg-teal-950 hover:bg-teal-700 rounded-xl">
      Send a message
    </button>
  </form>
  )
}

export default Contact