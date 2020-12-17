# Educational Support Environment 

An online tool for educational purposes that supports the learning process of students who are studying through distance-learning courses.


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![made-with-java 14](https://img.shields.io/badge/Made%20with-Java-1f425f.svg)](https://www.java.com/en/)
[![made-with-reactjs](https://img.shields.io/badge/Made%20with-reactjs-1f425f.svg)](https://reactjs.org/)

## Brief Summary

The platform is used by educators to support the learning process of their students with online education. The platform offers teachers features for creating assignments, courses, videos and also allows the teacher to track the Sentiment of the students. The platform offers the opportunity for students to pose questions to their fellow students and to the teachers. This communication is supported for persisted chat and for non-persisted chat (this is called the chatroom environment). 

The target customer is the teacher who is faced with the challenge of teaching students via online platforms, in the context of the Covid19 epidemic and in other difficult situations. The platform is focused on supporting the student audience in the range from 10 to 14 years of age. The platform is designed to support any device that can access the internet, from small screen smart phones to desktop PC.


# Usage

The usage of the site requires membership and therefore registration for the teachers and the students. The user will start by entering a unique email, with name and password. This registration is done on the Landing Page as shown below.


# Local Installation

To run the application locally, the user will need to clone the repo and install support for nodeJS (v 14.9) and Java (v 11). This application was developed in VSCode and IntelliJ Ultimate (with Spring). It is recommneded that the user builds the project using the gradle.build file. The database for the project is run using Postgres inside a docker-compose file which can be found in the repository. 

Once the gradle build is completed, the user can run the Java Spring MVC project from the SkeletonApplication.java file (see code insert).


´´´java

@SpringBootApplication
public class SkeletonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkeletonApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
					.addMapping("/**")
					.allowedOrigins("*")
					.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
			}
		};
	}
}


´´´


## Features



## Class Diagram



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT license applied to this project. Please view the link for further details.
