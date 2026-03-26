"use client";

export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-light mb-6 text-gray-900">Get in Touch</h2>
      <p className="text-lg font-serif text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
        I'm always interested in discussing <strong className="text-blue-600">research collaborations</strong>, <strong className="text-blue-600">meaningful projects</strong>, and conversations about AI, ethics, and social impact. Feel free to reach out!
      </p>

      <div className="mb-12">
        <p className="text-base font-serif text-gray-600 mb-3">Email me directly</p>
        <a
          href="mailto:princengojo@g.cjc.edu.ph"
          className="inline-block text-lg font-serif text-blue-600 hover:text-blue-800 font-medium"
        >
          princengojo@g.cjc.edu.ph
        </a>
      </div>

      <div>
        <p className="text-base font-serif text-gray-600 mb-4">Or connect with me on</p>
        <div className="flex justify-center gap-12 text-base font-serif text-gray-700">
          <a href="https://github.com/josh-amir" className="text-blue-600 hover:text-blue-800 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/" className="text-blue-600 hover:text-blue-800 hover:underline">LinkedIn</a>
          <a href="https://linktr.ee/pjngojo" className="text-blue-600 hover:text-blue-800 hover:underline">Linktree</a>
        </div>
      </div>
    </div>
  );
}
