Architecture

  Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  Why did the backend use a NoSQL MongoDB database?

        Our full-stack project leveraged a combination of technologies, including Express, HTML, and JavaScript, to craft a dynamic and responsive user interface. The Express framework, working harmoniously with JavaScript, facilitated the seamless handling of browser requests through meticulously defined routes and controllers. Depending on the nature of the request, Express would dynamically generate pages using Handlebars templates filled with database-driven data or fetch pre-existing static HTML pages. This collaborative integration effectively executed server requests, delivering results to the frontend client.

        In contrast, the Angular segment of the project embraced Single Page Applications (SPAs). During the initial page load, the entire SPA was transmitted to the client, enabling subsequent page rendering and code execution client-side within the browser. Unlike the Express setup, the SPA model minimized backend interactions, as the sole backend responsibility was data retrieval from the database. Although the SPA incurred a slightly longer initial load time, subsequent navigation within the application necessitated no additional server requests.

        The backend harnessed the power of the NoSQL MongoDB database, selected for its scalability and efficient querying capabilities. MongoDB's document-oriented structure seamlessly aligned with JSON formatting, rendering it an optimal choice for integration with frontend applications.

Functionality

  How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
  Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

        JSON, a specification for data formatting, stands distinct from JavaScript, which utilizes JSON for object definition. The frontend and backend harmonized their operations through the utilization of APIs and JSON. RESTful APIs employed JSON for both receiving requests and transmitting responses.

        To augment functionality and streamline efficiency, strategic code refactoring took place. Static HTML pages gave way to Handlebars templates, fostering the reuse of page structures while accommodating dynamic content changes. Furthermore, content data, initially confined to static JSON files within the codebase, found a new home in MongoDB, offering flexibility for content modification or addition without necessitating website code deployment.

Testing

  Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

        Testing in our full-stack application embraced a variety of API testing methods for endpoints, with a keen focus on addressing security concerns. Comprehending the application's methods (HTTP methods like GET, POST, PUT, DELETE), endpoints (API communication interfaces), and security measures (including user authentication and JWT issuance) played a crucial role. Security efforts centered around authenticating users and furnishing them with valid JWTs to access designated endpoints.

Reflection

  How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

        Despite encountering challenges in the application development process, this course significantly broadened my understanding of full-stack development, introducing me to technologies that I have not used before. Through this course, my proficiency in JavaScript has seen improvement. The introduction to the tools and pieces of this course has increased my foundational skills, aligning them with the dynamic requirements of the industry. These enhanced skills collectively contribute to my marketability as a candidate in the competitive field of full-stack development.
