// eslint-disable-next-line react/prop-types
export const SubmitButton = ({ children, type = "submit", onClick, isPending }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        type={type}
        disabled={isPending}
        className={`w-full mt-4 p-2 rounded-md text-3xl border-2 border-solid border-slate-400 text-white transition-all ease-in-out duration-500
          ${isPending ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-red-500 hover:scale-90'}`}
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          children
        )}
      </button>
    </div>
  );
};
