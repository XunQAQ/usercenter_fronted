import React from 'react';
import { Typography } from 'antd';

const TableList: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Typography.Title level={2}>Development Experience</Typography.Title>

      <Typography.Paragraph>
        During the development of the user center, I spent about a week working on it. I referred to some open-source projects and frameworks online for guidance. Although I had previously worked on similar applications during my time at school, this time I wanted to focus on writing clean and reusable code. The biggest takeaway from this project is not just about the code itself but also about the development process and best practices.
      </Typography.Paragraph>

      <Typography.Title level={3}>Backend</Typography.Title>

      <Typography.Paragraph>
        In the backend, I learned about the importance of encapsulating utility classes, request handlers, and error classes. I found it particularly valuable to introduce a business error class and a Global Exception Handler to provide standardized and secure data for the frontend. I also learned about some agile development plugins and paid attention to logical details. The entire backend development process was meaningful and provided a clear structure.
      </Typography.Paragraph>

      <Typography.Title level={3}>Frontend:</Typography.Title>

      <Typography.Paragraph>
        On the frontend side, I previously had a basic understanding of the (HTML, CSS, JavaScript), but this project motivated me to explore and learn more about Vue, React, and TypeScript. Getting started with these frameworks was relatively easy due to their similarities. Learning TypeScript was especially beneficial for Java programmers like me, as it provided a smoother understanding of libraries like Ant Design Pro. There were also many frontend details to consider, such as API encapsulation, component reusability, efficient routing, utilizing proxies in production mode, handling asynchronous Axios requests (in Umi's REQUEST), request interceptors, response interceptors, and basic configuration. In summary, frontend development requires attention to many fine details.
      </Typography.Paragraph>

      {/* ...other sections... */}

      <Typography.Title level={3}>User Authentication</Typography.Title>

      <Typography.Paragraph>
        I implemented and understood my own approach to user authentication and maintaining login states. I used getRequest to obtain the user's session ID and implemented a timeout mechanism to ensure the login state is preserved.
      </Typography.Paragraph>

      <Typography.Title level={3}>Deployment and Release</Typography.Title>

      <Typography.Paragraph>
        Finally, I gained insights into deployment and release processes. While the basics of deployment are well-known, the highlight for me was learning Docker containerization. Docker is like a mini server within a server, with its own ports and directories. It simplifies environment setup with just a few lines of code. By using Docker images, we can package our code and environment into standalone software units that can be executed using Docker. I also learned about the importance of setting certain headers in the backend to ensure cookie-based authentication works correctly. In particular, the "path" parameter of the cookie should match the current request URL for the set-cookie to take effect. Additionally, I explored different approaches to Nginx reverse proxy configuration and alternative methods without using reverse proxy.
      </Typography.Paragraph>

      <Typography.Title level={3}>Final Thoughts:</Typography.Title>

      <Typography.Paragraph>
        This project serves as a data center for user-related information and can be expanded to provide more features. I look forward to continuing the development of more projects that can help students, such Integrated AI application
      </Typography.Paragraph>
    </div>
  );
};

export default TableList;
