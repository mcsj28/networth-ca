export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      {/* HERO */}
      <h1 className="text-4xl sm:text-5xl font-bold">
        Canada-First Net-Worth Tracker
      </h1>
      <p className="max-w-xl">
        Instantly see your real TFSA, RRSP & FHSA room—no spreadsheets, no guesswork.
      </p>

      {/* WAIT-LIST FORM */}
      <form
        action="https://tally.so/r/nGa9ZO"
        method="POST"
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          Join wait-list
        </button>
      </form>

      {/* Login link for testers */}
      <a href="/login" className="text-sm underline">
        Already have access? Log in&nbsp;→
      </a>
    </main>
  );
}
