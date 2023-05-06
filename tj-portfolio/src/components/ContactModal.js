import {
  EnvelopeIcon,
  PhoneIcon,
  PlayCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-600 bg-opacity-70 min-w-full"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-800 p-6 rounded-lg px-4"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="space-y-4">
          <h4 className="text-amber-600 sm:text-2xl text-center pt-3">
            I look forward to hearing from you!
          </h4>
          <div className="flex flex-col">
            <a
              href="tel:+6513193598"
              className="flex justify-center items-center space-x-2"
            >
              <PhoneIcon className="text-cyan-500 h-7 w-7 animate-pulse" />

              <div className="text-2xl">+651-319-3598</div>
            </a>

            <a
              href="mailto: tjjohnson.86@gmail.com"
              className="flex justify-center items-center space-x-2"
            >
              <EnvelopeIcon className="text-cyan-500 h-6 w-6 animate-pulse" />

              <div className="text-2xl">tjjohnson.86@gmail.com</div>
            </a>
          </div>

          <form className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  placeholder="Name"
                  className="contact-input"
                  type="text"
                />
                <input
                  placeholder="Email"
                  className="contact-input"
                  type="email"
                />
              </div>
              <input
                placeholder="Subject"
                className="contact-input"
                type="text"
              />

              <textarea placeholder="Message" className="contact-input" />
              <button
                type="submit"
                className="bg-amber-600/90 text-slate-600 hover:bg-amber-600 rounded-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <button
          className="absolute top-2 right-2 focus:outline-none"
          onClick={onClose}
        >
          <XCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default ContactModal;