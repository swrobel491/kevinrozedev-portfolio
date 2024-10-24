import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages & Frameworks', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Web & Application Development', slug: 'web_app' }),
	defineSkillCategory({ name: 'Database Management', slug: 'db_manage' }),
	defineSkillCategory({ name: 'Cloud Computing & DevOps', slug: 'cloud_devops' }),
	defineSkillCategory({ name: 'Software Development & Methodologies', slug: 'software_dev' }),
	defineSkillCategory({ name: 'Tools & Productivity', slug: 'tools' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'dotnet',
		color: 'purple',
		description:
			'.NET is a free, open-source, and cross-platform development platform from Microsoft. It enables developers to build a wide range of applications, including web, desktop, mobile, cloud, and IoT, using languages like C#, F#, and VB.NET. With built-in libraries, frameworks like ASP.NET for web, and support for multiple operating systems (Windows, macOS, Linux), .NET offers a unified environment for modern, high-performance app development.',
		logo: Assets.DotNet,
		name: '.NET',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description:
			'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft as part of its .NET framework. It is designed for building a wide range of applications, from web and mobile apps to desktop software and games. C# is known for its simplicity, type safety, and performance, making it a popular choice for both beginners and experienced developers. It supports features like strong typing, garbage collection, and easy integration with other .NET languages.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'Python is a high-level, interpreted language known for its simplicity and readability, making it ideal for beginners and experts alike. It supports multiple programming paradigms and is widely used for web development, data science, artificial intelligence, and automation. Its rich ecosystem of libraries enables rapid development.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description:
			"Java is a platform-independent, object-oriented programming language widely used for building scalable, cross-platform applications. It's popular for enterprise software, Android app development, and web-based applications. Java emphasizes portability, security, and performance.",
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'orange',
		description: `JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic content to websites. It runs in the browser and is essential for front-end development, but with the rise of Node.js, it's also used for server-side scripting.`,
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'typescript',
		color: 'blue',
		description: `TypeScript is a statically typed superset of JavaScript, developed by Microsoft. It adds strong typing, interfaces, and other features, helping developers catch errors during development and making JavaScript more scalable for large projects.`,
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: `Angular is a TypeScript-based front-end web application framework developed by Google. It is used for building dynamic, single-page applications (SPAs) with a focus on modularity, maintainability, and performance.`,
		logo: Assets.Angular,
		name: 'Angular',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: `Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications (SPAs). It is designed to be incrementally adaptable, meaning developers can use Vue for simple parts of an application, or scale it up to create full-fledged web apps. Vue is known for its simplicity, flexibility, and ease of integration, making it a popular choice for both small projects and large-scale applications.`,
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: `React (React.js) is a popular open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs). It focuses on creating reusable UI components that manage their own state and efficiently update the DOM using a virtual DOM. This approach allows React to render changes to the user interface efficiently without reloading the entire page.`,
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: `Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It’s known for its event-driven, non-blocking I/O model, making it ideal for building scalable, real-time applications like web servers and APIs.`,
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'graphql',
		color: 'purple',
		description: `GraphQL is a query language for APIs that allows clients to request exactly the data they need, rather than being restricted to fixed responses. Developed by Facebook, it offers more flexibility and efficiency compared to traditional REST APIs.`,
		logo: Assets.GraphQL,
		name: 'GraphQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: `HTML is the fundamental language for structuring web content. It provides the basic framework of a website, defining elements such as text, images, forms, and links. HTML organizes content into sections like headings, paragraphs, and tables, which can then be styled or made interactive using CSS and JavaScript. It's the starting point for any web page.`,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'web_app'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: `CSS is a stylesheet language used to describe the presentation of a document written in HTML. It enables developers to control the layout, colors, fonts, and overall appearance of web pages. CSS supports responsive design, allowing websites to adapt to different screen sizes. It separates content from presentation, making websites more flexible and easier to maintain.`,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'web_app'
	}),
	defineSkill({
		slug: 'sass',
		color: 'magenta',
		description: `SASS is an advanced CSS preprocessor that enhances CSS by adding features like variables, nested rules, and functions. It helps developers write more organized and reusable code, reducing repetition and improving efficiency. SASS compiles into standard CSS and is widely used in modern web development for building scalable and maintainable stylesheets.`,
		logo: Assets.Sass,
		name: 'SASS',
		category: 'web_app'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'navy',
		description: `Bootstrap is a popular front-end framework that simplifies web development by providing pre-built components like buttons, navigation bars, modals, and forms. It includes a responsive grid system that makes creating mobile-friendly designs faster and easier. Bootstrap’s consistency and ease of use make it a favorite for building professional-looking websites quickly.`,
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'web_app'
	}),
	defineSkill({
		slug: 'swagger',
		color: 'green',
		description: `Swagger is a suite of open-source tools for developing and documenting RESTful APIs. It provides a standardized format for API documentation, allowing developers to automatically generate interactive documentation that helps both developers and consumers understand how an API works. Swagger simplifies API testing and integration by enabling real-time interaction with endpoints.`,
		logo: Assets.Swagger,
		name: 'Swagger',
		category: 'web_app'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'gray',
		description: `Microsoft SQL Server is a relational database management system (RDBMS) developed by Microsoft. It supports a wide range of transaction processing, business intelligence, and analytics applications in enterprise IT environments. Known for its performance, scalability, and integration with Microsoft tools, it is widely used for managing and querying structured data.`,
		logo: Assets.MSSql,
		name: 'Microsoft SQL Server',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'cyan',
		description: `MySQL is an open-source relational database management system commonly used in web applications. It's known for its speed, reliability, and ease of use. MySQL is a central component of the LAMP stack (Linux, Apache, MySQL, PHP/Python/Perl) and is often used to store and retrieve data in web services and content management systems like WordPress.`,
		logo: Assets.MySql,
		name: 'MySQL',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'cyan',
		description: `PostgreSQL is a powerful, open-source object-relational database system that emphasizes extensibility and standards compliance. It supports advanced features like full-text search, JSON, and spatial data, making it a popular choice for complex applications. Known for its robustness, PostgreSQL is often used in large-scale data environments requiring advanced data integrity.`,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents rather than traditional tables. It’s ideal for applications that need to handle large volumes of unstructured or semi-structured data, such as content management systems, big data, and real-time analytics. MongoDB scales horizontally and is designed for high-performance data storage.`,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: `Redis is an in-memory data structure store used as a database, cache, and message broker. It supports data structures like strings, hashes, lists, and sets, and is known for its speed and performance. Redis is often used for caching data to improve application performance and for real-time analytics.`,
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'rabbitmq',
		color: 'orange',
		description: `RabbitMQ is an open-source message broker that facilitates communication between distributed systems by managing message queues. It supports various messaging protocols and helps decouple components of large applications, ensuring reliable and scalable communication across services in microservices architectures.`,
		logo: Assets.RabbitMQ,
		name: 'RabbitMQ',
		category: 'db_manage'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: `AWS is a comprehensive cloud computing platform provided by Amazon, offering a wide range of services including computing power (EC2), storage (S3), and databases (RDS). AWS is highly scalable, allowing businesses to deploy and manage applications in the cloud with pay-as-you-go pricing, and it supports a broad array of tools for development, data analytics, AI, and IoT.`,
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'cyan',
		description: `Microsoft Azure is a cloud computing platform that offers a variety of services such as virtual machines, databases, and AI tools. Azure is known for its seamless integration with other Microsoft products and is widely used for building, deploying, and managing applications and services in the cloud, providing robust options for hybrid cloud environments.`,
		logo: Assets.Azure,
		name: 'Azure',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'gray',
		description: `GCP is Google’s cloud computing platform offering infrastructure as a service (IaaS), platform as a service (PaaS), and a suite of computing services. GCP is known for its high-performance networking, machine learning tools, and data analytics services, and is often chosen by companies needing scalable cloud solutions.`,
		logo: Assets.GCP,
		name: 'GCP',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'cyan',
		description: `Docker is a platform for building, shipping, and running applications in lightweight, portable containers. Containers package an application with all its dependencies, ensuring it runs consistently across different computing environments. Docker has become essential in DevOps for streamlining development, testing, and deployment workflows.`,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: `Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google, Kubernetes is now widely used for managing large-scale, distributed applications in production environments, ensuring high availability and fault tolerance.`,
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description: `Git is a distributed version control system used by developers to track changes in code, collaborate on projects, and manage source code history. Git allows teams to work on different branches of a project simultaneously and merge changes efficiently, making it a cornerstone of modern software development practices.`,
		logo: Assets.Git,
		name: 'Git',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'github',
		color: 'gray',
		description: `GitHub is a web-based platform built around Git that hosts repositories for code collaboration. It provides version control, issue tracking, and project management tools, making it popular for open-source projects and private repositories. GitHub facilitates teamwork and code sharing with features like pull requests and code reviews.`,
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'gitlab',
		color: 'orange',
		description: `GitLab is a DevOps platform that provides version control, CI/CD pipelines, and project management tools, similar to GitHub. It integrates tightly with Git and offers additional features for automating and managing the entire software development lifecycle, from code collaboration to deployment.`,
		logo: Assets.GitLab,
		name: 'GitLab',
		category: 'cloud_devops'
	}),
	defineSkill({
		slug: 'agile',
		color: 'gray',
		description: `Agile is a project management and software development methodology focused on iterative development, collaboration, and flexibility. Agile emphasizes delivering small, incremental improvements to software, allowing teams to adapt to changes quickly and deliver high-quality products in a shorter time frame.`,
		logo: Assets.Agile,
		name: 'Agile',
		category: 'software_dev'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'orange',
		description: `Power BI is a business analytics tool by Microsoft that allows users to visualize data and share insights across their organization. It connects to various data sources and provides interactive dashboards and reports, enabling data-driven decision-making.`,
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'software_dev'
	}),
	defineSkill({
		slug: 'vs',
		color: 'cyan',
		description: `Visual Studio is an integrated development environment (IDE) from Microsoft that supports a wide range of programming languages and tools for building applications. It’s known for its robust features for debugging, testing, and deployment, especially in .NET and C# development.`,
		logo: Assets.VS,
		name: 'Visual Studio',
		category: 'tools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'cyan',
		description: `Visual Studio Code is a lightweight, open-source code editor by Microsoft that supports a wide array of programming languages through extensions. It’s popular for its simplicity, performance, and flexibility, with features like integrated Git, IntelliSense, and a rich plugin ecosystem.`,
		logo: Assets.VSCode,
		name: 'Visual Studio Code',
		category: 'tools'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description: `JIRA is a project management tool developed by Atlassian, primarily used for issue tracking and agile software development. It helps teams plan, track, and manage work using agile methodologies such as Scrum and Kanban, offering powerful workflow customization.`,
		logo: Assets.Jira,
		name: 'Atlassian JIRA',
		category: 'tools'
	}),
	defineSkill({
		slug: 'msoffice',
		color: 'cyan',
		description: `Office 365 is a suite of cloud-based productivity tools provided by Microsoft, including applications like Word, Excel, PowerPoint, Outlook, and Teams. It enables collaboration through real-time document editing and communication, and it integrates with other Microsoft services for enhanced productivity.`,
		logo: Assets.MS365,
		name: 'Microsoft Office 365',
		category: 'tools'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description: `Nginx is a high-performance web server, reverse proxy, and load balancer known for its ability to handle a large number of concurrent connections with low resource usage. It’s often used in modern web application stacks for serving static content, balancing server loads, and improving the performance of dynamic web apps.`,
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'tools'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
