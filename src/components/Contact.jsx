function Contact() {
  return (
    <div className="my-4 mb-10 font-light">
      <h2 className="text-xl mb-1 font-normal">Contact</h2>
      <ul className="list-disc pl-5 text-gray-600">
        <li>
          <span className="font-medium text-gray-800">LinkedIn : </span>
          <a
            href="https://www.linkedin.com/in/iamit7245/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/iamit7245
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-800">GitHub : </span>
          <a
            href="https://github.com/i-amitsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/i-amitsingh
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-800">Email : </span>
          <a
            href="mailto:amitmansingh2003@gmail.com"
            className="text-blue-600 hover:underline"
          >
            amitmansingh2003@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
