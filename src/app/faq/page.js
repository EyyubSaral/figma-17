const FAQPage = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">FAQ's</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>How do I use the dashboard features?</li>
          <li>Where can I find sensor calibration info?</li>
          <li>How to reset my password?</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQPage;
