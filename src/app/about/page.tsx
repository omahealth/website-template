import Link from "next/link";

const CLINIC_NAME = process.env.CLINIC_NAME!;
const NP_FIRST_NAME = process.env.NP_FIRST_NAME!;

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-gray-900">{CLINIC_NAME}</Link>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            About {NP_FIRST_NAME}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Learn more about my background, experience, and approach to healthcare.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg mx-auto">
            <h2>Professional Background</h2>
            <p>
              As a board-certified Nurse Practitioner, I bring years of experience in providing 
              comprehensive, patient-centered care. My approach focuses on building strong 
              relationships with patients and developing personalized treatment plans.
            </p>

            <h2>Education & Credentials</h2>
            <p>
              [Education and certification details will be customized for each practitioner]
            </p>

            <h2>Philosophy of Care</h2>
            <p>
              I believe in treating the whole person, not just symptoms. My practice emphasizes 
              preventive care, patient education, and collaborative decision-making to help you 
              achieve your best health outcomes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
