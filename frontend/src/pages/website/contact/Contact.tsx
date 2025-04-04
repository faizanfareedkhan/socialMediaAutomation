import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-24 justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white px-6">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        Feel free to reach out for collaborations or just a friendly chat.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-10">
        {/* Email */}
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Mail size={28} className="text-black dark:text-white mb-4" />
          <p className="text-sm text-gray-500 dark:text-gray-300">Email</p>
          <p className="font-medium">contact@example.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Phone size={28} className="text-black dark:text-white mb-4" />
          <p className="text-sm text-gray-500 dark:text-gray-300">Phone</p>
          <p className="font-medium">+123 456 7890</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <MapPin size={28} className="text-black dark:text-white mb-4" />
          <p className="text-sm text-gray-500 dark:text-gray-300">Location</p>
          <p className="font-medium">New York, USA</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            className="mt-1 p-2 w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg font-bold hover:opacity-80 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
