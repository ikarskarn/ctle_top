import React from 'react';
import ReactDOM from 'react-dom'

const STORE = {
    categories: [
        {
            key: 'categoryOne',
            id: 'cat1',
            name: 'Faculty Engagement',
            link: '#cat1',
            courseIds: [48], 
        },
        {
            key: 'categoryTwo',
            id: 'cat2',
            name: 'Pedagogical Content Knowledge',
            link: '#cat2',
            courseIds: [49, 30],
        },
        {
            key: 'categoryThree',
            id: 'cat3',
            name: 'Feedback and Assessment',
            link: '#cat3',
            courseIds: [23, 38, 39, 56, 21],
        },
        {
            key: 'categoryFour',
            id: 'cat4',
            name: 'Inclusive Pedagogy',
            link: '#cat4',
            courseIds: [7, 9, 10, 11, 12, 13, 19, 30, 32, 53, 54],
        },
        {
            key: 'categoryFive',
            id: 'cat5',
            name: 'Curriculum Alignment',
            link: '#cat5',
            courseIds: [17, 55, 58, 49],
        },
        {
            key: 'categorySix',
            id: 'cat6',
            name: 'Classroom Climate',
            link: '#cat6',
            courseIds: [20, 28, 47, 61, 22, 29],
        },
        {
            key: 'categorySeven',
            id: 'cat7',
            name: 'Instructional Strategies',
            link: '#cat7',
            courseIds: [3, 18, 21, 22, 29, 31, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 45, 46, 48, 50, 51, 52, 57, 59, 60, 62, 9, 10, 11, 12, 13, 17, 19, 28, 32],
        },
        {
            key: 'categoryEight',
            id: 'cat8',
            name: 'Faculty Administrative Processes',
            link: '#cat8',
            courseIds: [14, 15, 16, 24, 25, 26], 
        },
        {
            key: 'categoryRandom',
            id: 'random',
            name: 'Choose For Me',
            link: '#',
            courseIds: ['r']
        },
    ],
    courses: {
        3: {
            id: 3,
            category: 7,
            name: 'Brightspace Basics and Beyond',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending.'
        },
        6: {
            id: 6,
            category: 8,
            name: 'Blackboard ILP Final Grade Process',
            courseLink: 'EOL-ELN-007',
            learningTrack: 'none',
            certification: 'none',
            description: 'Submitting your final grades has never been easier!  In this online faculty development opportunity, you will learn the process of submitting your final grades using the Blackboard Intelligent Learning Platform (ILP).  Upon completion, faculty will:  determine and design their grading schema for submitting final grades and describe the process for submitting final grades using the ILP.' 
        },
        7: {
            id: 7,
            category: 4,
            name: 'Virtual Poverty Simulation',
            courseLink: 'SL-INF-200',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        9: {
            id: 9,
            category: 4,
            name: 'Online Accessibility at Central Piedmont: Aligning Student Success and the Law',
            courseLink: 'CTLE-TEA-001',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'This online, self-paced course introduces faculty and teaching staff to online accessibility, an overview of the law, and resources to learn more. Upon completion of this course, learners will be able to: Affirm the importance of designing and delivering accessible online content for student success. Summarize Title II of the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act. Apply foundation online accessibility best practices through the use of resources provided in this course. This course is part of the Online Accessibility Learning Track.'
        },
        10: {
            id: 10,
            category: 4,
            name: 'Introduction to WCAG and Applying Accessible Color Contrast',
            courseLink: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Session 1 of the Application Module provides the learner with a foundation of the Web Content Accessibility Guidelines, or WCAG. The importance of following the guidelines in online learning will be addressed. Also, color contrast will be discussed in terms of why it is important in online accessibility as well as how to check for proper color contrast in online materials. This session includes both lecture and hands-on demonstrations.'
        },
        11: {
            id: 11,
            category: 4,
            name: 'Accessible Images and Videos',
            courseLink: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'This session will focus on creating accessible images and videos and why this is important in an online environment. The learner will be introduced to alternative text as it relates to images. Also, examples of how to write alternative text will be presented. There will be hands-on demonstrations of how to add alternative text to images in Word, PowerPoint, and the LMS. For accessible videos, the learner will be introduced to best practices for captions and transcripts with videos. Demonstrations will include using captions in Panopto and YouTube as well as creating transcripts with Google Voice Typing. WCAG, as it pertains to each topic, will be addressed as well.'
        },
        12: {
            id: 12,
            category: 4,
            name: 'Elements of Accessible Documents and Text',
            courseLink: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        13: {
            id: 13,
            category: 4,
            name: 'Using Accessibility Checkers',
            courseLink: 'currently unavailable',
            learningTrack: 'Online Accessibility',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        14: {
            id: 14,
            category: 8,
            name: 'Accessibility and Digital Learning at CPCC: An Employee Resource Guide',
            courseLink: 'EOL-ELN-001',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        15: {
            id: 15,
            category: 8,
            name: 'Blackboard ILP Final Grade Process',
            courseLink: 'EOL-ELN_007',
            learningTrack: 'none',
            certification: 'none',
            description: 'Submitting your final grades has never been easier!  In this online faculty development opportunity, you will learn the process of submitting your final grades using the Blackboard Intelligent Learning Platform (ILP).  Upon completion, faculty will:  determine and design their grading schema for submitting final grades and describe the process for submitting final grades using the ILP.'
        },
        16: {
            id: 16,
            category: 8,
            name: 'Faculty Analytics Dashboards within Blackboard',
            courseLink: 'EOL-ELN-008',
            learningTrack: 'none',
            certification: 'none',
            description: 'Want to know who’s in your classroom?  The Blackboard Analytics tool provides faculty a one stop snap shot of important information regarding their students and course statistics.  This online faculty development opportunity will guide you in understanding how to use the faculty analytics reports and dashboards to make informed decisions about your classroom strategies.'
        },
        17: {
            id: 17,
            category: 5,
            name: 'Introduction to Cafeteria Learning - Providing Learner Choice in the Classroom',
            courseLink: 'FD-INF-601',
            learningTrack: 'none',
            certification: 'none',
            description: 'Offering flexibility and learner choice in the classroom provides students with different abilities, interests, and learning styles all an opportunity for success.'
        },
        18: {
            id: 18,
            category: 7,
            name: 'PowerPoint as a Teaching Tool',
            courseLink: 'FD-INF-607',
            learningTrack: 'none',
            certification: 'none',
            description: 'In addition to engaging in the do’s and don’ts of creating and the ability to equip your lessons with different types of media, such as images, sounds, and animations, makes PowerPoint a valuable learning aid for students.  However, it is important to understand that there is a correct and effective way to integrate PowerPoint into a lesson.  Join us in this introductory session built to demonstrate the many beneficial ways that PowerPoint can be used as a dynamic teaching tool in the classroom!'
        },
        19: {
            id: 19,
            category: 4,
            name: 'ADA Tips and Tricks for Best Practices',
            courseLink: 'FD-INF-623',
            learningTrack: 'none',
            certification: 'none',
            description: 'Accessibility is not a foreign concept, and has been a part of national legislature for decades. CPCC is on the cusp of being accessible to all through our ADA compliance practices. In this session, you will learn more about how you can make your courses ADA compliant without reinventing the wheel. In fact, there are many tips and tools that can be used to make it easier on you as the instructor of the course. Take time to hear from those who have learned what not to do and what you can and should do! '
        },
        20: {
            id: 20,
            category: 6,
            name: 'Proven Strategies for Faculty Presence and Interaction',
            courseLink: 'FD-INF-633',
            learningTrack: 'none',
            certification: 'none',
            description: 'Are you interested in creating meaningful learning experiences as part of your courses, but not sure where to start?  A few proven strategies and tools can help enhance your teaching giving CPCC students a wonderful learning experience.  Come explore a variety of approaches with us including, using the Grade Center for maximum engagement, incorporating various methods to organizing your instruction and assignments, and establishing teacher presence with sound student success strategies.'
        },
        21: {
            id: 21,
            category: 7,
            name: 'Best Practices in Teaching and Learning for ALL disciplines',
            courseLink: 'FD-LNPZ-116',
            learningTrack: 'none',
            certification: 'none',
            description: 'Throughout the course of the semester, there are numerous teaching tools and resources that can keep students actively participating in class discussions, assignments, and exercises. In this session, participants will learn ways to engage students before the class even starts. After the session, participants will have a plethora of ideas to take into the classroom and engage students throughout the semester no matter what discipline you are teaching.'
        },
        22: {
            id: 22,
            category: 7,
            name: 'Take Out Your Cell Phones: Engaging Students with Polling Technologies',
            courseLink: 'FD-LNPZ-119',
            learningTrack: 'none',
            certification: 'none',
            description: 'Come learn about a variety of polling technologies (such as PollDaddy, Poll Everywhere, Google Forms, Kahoot, and Mentimeter) that will allow instructors to increase student engagement and student interaction in the classroom.'
        },
        23: {
            id: 23,
            category: 3,
            name: 'Affirm your Excellent Teaching Through the Cycle of Assessment, Reflection, and Improvement',
            courseLink: 'FD-LNPZ-124',
            learningTrack: 'none',
            certification: 'none',
            description: 'This session will provide hands on experience of how the cycle of assessment, reflection and improvement works to enhance instruction. Attendees will review various assessment samples and data to reflect for improvement plans.  '
        },
        24: {
            id: 24,
            category: 8,
            name: 'Attendance Recording: Traditional Courses',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        25: {
            id: 25,
            category: 8,
            name: 'Attendance Recording: Online Courses',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        26: {
            id: 26,
            category: 8,
            name: 'Attendance Recording: Hybrid Courses',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Description for this course is Pending'
        },
        28: {
            id: 28,
            category: 6,
            name: 'Ten2Win - Building Community through Classroom Management',
            courseLink: 'FD-TEA-505',
            learningTrack: 'none',
            certification: 'none',
            description: 'Building community in the classroom is an intentional effort to make every student feel respected and valued with a sense of belonging and acceptance.  Faculty who create such a sense of community do so through proactive measures and thoughtful acknowledgement of student success.  Ten2Win, a faculty development program specifically designed with adjuncts in mind, intends to support faculty with best practices aimed at building community in the CPCC classroom.  Join us to discover how you can “win” with ten proven tips in establishing a strong teacher-student relationship.'
        },
        29: {
            id: 29,
            category: 7,
            name: 'QTIPS - Quick, Time-saving Ideas, Practices, and Strategies',
            courseLink: 'FD-TEA-506',
            learningTrack: 'none',
            certification: 'none',
            description: 'Is this your first semester or first year teaching?  Have you had difficulty creating sound instructional and assessment strategies?  Are you looking to learn Quick, Time-saving Ideas, Practices, and Strategies (QTIPS)?  If you answered “Yes” to any of these questions, you would find tremendous value in QTIPS – a faculty development sharing session of activities and assignments transferable to any discipline.'
        },
        30: {
            id: 30,
            category: 4,
            name: 'Teaching for Inclusion: Identifying Your Own Attitudes',
            courseLink: 'FD-TEA-511',
            learningTrack: 'none',
            certification: 'none',
            description: 'Instructors bring a wealth of knowledge, experiences, and range of diversity issues to the classroom. The extent to which these differ from socioeconomic, physical, social, intellectual and cultural backgrounds of the students can impact engagement and interaction in the classroom.  This workshop is based on the assumption that an awareness of our own perspectives, social and cultural identities will better our understanding of others and lay a foundation for mutual respect and engagement.  '
        },
        31: {
            id: 31,
            category: 7,
            name: 'Skills Required to Teach Online Classes',
            courseLink: 'FD-ELN-013',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'If you are interested in teaching online, it is important to realize that, although there are many similarities between online & face-to-face teaching, there are also many differences. Explore some of the resources and skills that are important to have for successfully teaching online including digital access, an understanding of online instructional design, time management skills, strong communication skills, and technical skills. Part of the OTC Prime and Enrich learning tracks.'
        },
        32: {
            id: 32,
            category: 4,
            name: 'Universal Design and Accessibility for Online Learning',
            courseLink: 'FD-ELN-016',
            learningTrack: 'OTC Prime/Enrich/Multimedia',
            certification: 'Online Teaching Certification',
            description: 'Universal Design for Learning (UDL) is a framework that guides the design of learning environments to address the diversity of learners. Learn the principles of UDL and how to implement these principles in your online courses. Part of the OTC Prime, Enrich and Multimedia learning tracks.'
        },
        33: {
            id: 33,
            category: 7,
            name: 'Student Collaboration in Online Classes',
            courseLink: 'FD-ELN-015',
            learningTrack: 'OTC Prime/Enrich/Communications',
            certification: 'Online Teaching Certification',
            description: 'Online learning environments foster additional learning experiences where learners can interact, collaborate, and take ownership of their own learning. This course will help you identify the benefits of collaborative learning activities, and provide you with a variety of ideas regarding types of activities and ways to set up and manage collaboration in your online course. Part of the OTC Prime, Enrich, and Communication learning tracks.'
        },
        34: {
            id: 34,
            category: 7,
            name: 'Student Engagement in Online Classes',
            courseLink: 'FD-ELN-017',
            learningTrack: 'OTC Prime/Enrich/Engagement',
            certification: 'Online Teaching Certification',
            description: 'It is important to promote student engagement in all learning environments, including online. A student’s sense of learning community and instructor presence are connected. Learn strategies regarding how to promote engagement through three types of presence in your online courses. Part of the OTC Prime, Enrich and Engagement learning tracks.'
        },
        35: {
            id: 35,
            category: 7,
            name: 'Best Practices for Communication in Online Classes',
            courseLink: 'FD-ELN-018',
            learningTrack: 'OTC Prime/Enrich/Communications',
            certification: 'Online Teaching Certification',
            description: 'Strong communication is the cornerstone of creating an engaging and successful online classroom. Learn the different categories of communication and best practices for fostering effective communication in your online courses. Part of the OTC Prime, Enrich and Communication learning tracks.'
        },
        36: {
            id: 36,
            category: 7,
            name: 'Copyright and Fair Use for Online Courses',
            courseLink: 'FD-ELN-019',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'Learn the important aspects of Copyright and Fair Use with this search and find experience through our Central Piedmont Library Services’ Copyright Guidelines Website. You will learn about various copyright rules and regulations, identify the four factors of Fair Use, and identify how copyright and Fair Use rules affect your use of materials in various media. Part of the OTC Prime and Enrich learning tracks.'
        },
        37: {
            id: 37,
            category: 7,
            name: 'Student Centered Discussion Ideas',
            courseLink: 'FD-ELN-020',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'In online courses, discussion boards provide a place for interaction between students and instructors. Students are able to share thoughts and review the ideas of others modeled through collegial, dialogic exchanges. Learn how to increase student engagement through best practices for utilizing discussion boards in your online courses. Part of the OTC Enrich and Communication learning tracks.'
        },
        38: {
            id: 38,
            category: 3,
            name: 'Providing Quality Feedback in Online Courses',
            courseLink: 'FD-ELN-021',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'Effective and timely feedback is an important component of online courses. Learn about the challenges and solutions for providing feedback as well as a variety of types and methods of effective feedback. Part of the OTC Enrich and Communication learning tracks.'
        },
        39: {
            id: 39,
            category: 3,
            name: 'Authentic Assessment in Online Courses',
            courseLink: 'FD-ELN-022',
            learningTrack: 'OTC Prime and Enrich',
            certification: 'Online Teaching Certification',
            description: 'Authentic assessment focuses on applying concepts to real world situations. This course will help you learn about the benefits of utilizing authentic assessment and how to implement it into your online course. Part of the OTC Enrich learning track.'
        },
        40: {
            id: 40,
            category: 7,
            name: 'Blended Learning',
            courseLink: 'FD-ELN-023',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Blended learning, such as that found in hybrid courses, is all about the students: combining instruction with digital resources to help increase student achievement and engagement. This course presents ways you can incorporate digital content into your hybrid course in order to enhance student engagement. Part of the OTC Enrich learning track.'
        },
        41: {
            id: 41,
            category: 7,
            name: 'Gamification for Interactive Learning',
            courseLink: 'FD-ELN-024',
            learningTrack: 'OTC Enrich and Engagement',
            certification: 'Online Teaching Certification',
            description: 'Gamification allows you to present educational content to learners in a way that is engaging, visually compelling, and personalized. This course presents ways to make a gamified learning experience successful. Part of the OTC Enrich and Engagement learning tracks.'
        },
        42: {
            id: 42,
            category: 7,
            name: 'Practical Applications for Gamification in the Online Environment',
            courseLink: 'currently unavailable',
            learningTrack: 'OTC Enrich and Engagement',
            certification: 'Online Teaching Certification',
            description: 'This course provides a variety of methods for encouraging active learning by implementing gamification concepts in the online environment.'
        },
        43: {
            id: 43,
            category: 7,
            name: 'Brain-Based eLearning Design',
            courseLink: 'FD-ELN-025',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certifications',
            description: 'In this course, Dr. Joe Pulichino explains how to use techniques for eLearning design based on brain science, that—when applied—make for a more engaging and effective learning experience. Topics include increasing learner attention and connecting with learners, and tips for making the learning stick. Using research on the neuroscience of learning, Joe explores how to create eLearning that is highly effective at helping people learn. Part of the OTC Enrich and Engagement learning tracks.'
        },
        44: {
            id: 44,
            category: 7,
            name: 'Instructional Design for Adult Learners',
            courseLink: 'FD-ELN-026',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Adult learners have specific needs that have to be considered during the instructional design process. This course explores the best practices and techniques that will help instructors teach adult learners. Explore the theory behind adult learning, discover techniques to increase active (vs. passive) learning, and see how to identify and surmount barriers to learning. Part of the OTC Enrich learning track. '
        },
        45: {
            id: 45,
            category: 7,
            name: 'Core Strategies for Teaching in Higher Ed',
            courseLink: 'FD-ELN-027',
            learningTrack: 'OTC Enrich',
            certification: 'Online Learning Certification',
            description: "Join professor Karl Kapp as he walks higher ed instructors through strategies for successfully engaging and teaching college students. Karl covers increasing students' critical thinking skills, teaching with technology, introducing outside resources, and maintaining academic rigor. Outside the classroom, he'll show professors how to stay current, adapt to the evolving academic landscape, and collaborate with peers for career success. Part of the OTC Enrich learning track."
        },
        46: {
            id: 46,
            category: 7,
            name: 'Creating Multimedia Learning',
            courseLink: 'FD-ELN-028',
            learningTrack: 'OTC Enrich and Multimedia',
            certification: 'Online Teaching Certification',
            description: 'Including multimedia in your course content is one of the best ways to enhance student engagement in your online course. Learn how to plan and prepare for a multimedia project, identify tools you can utilize to create quality multimedia, and learn best practices for incorporating multimedia into your online courses. Part of the OTC Enrich, Engagement and Multimedia learning tracks.'
        },
        47: {
            id: 47,
            category: 6,
            name: 'Interpersonal Skills for Effective Online Teaching',
            courseLink: 'FD-ELN-029',
            learningTrack: 'OTC Enrich and Communication',
            certification: 'Online Teaching Certification',
            description: 'This scenario-based course will help you identify and develop the interpersonal skills that enable an instructor to create and maintain an online classroom community. Part of the OTC Enrich and Communication learning tracks.'
        },
        48: {
            id: 48,
            category: 7,
            name: 'eLev8 Your Course Design',
            courseLink: 'FD-ELN-030',
            learningTrack: 'OTC Enrich',
            certification: 'Online Teaching Certification',
            description: 'Central Piedmont is a subscriber to Quality Matters, a standards-based, national leader in quality assurance for online education. The program aims to recognize and implement course design that research has shown leads to improved student outcomes in online and hybrid courses. In this course, you will learn about the eight Specific Review Standards included in the Quality Matters Higher Education Rubric. Part of the OTC Enrich learning track.'
        },
        49: {
            id: 49,
            category: 2,
            name: 'Strategies for Collaborating Across the Discipline',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Faculty collaboration is important for solid course design and professional growth. While there are many ways to approach a collaborative session, a few key elements are critical to making it productive. This session will equip faculty teams with proven strategies to effectively collaborate, share, and make decisions in support of student success.'
        },
        50: {
            id: 50,
            category: 7,
            name: 'Your Role in Blackboard Management',
            courseLink: 'YRBBM-CAL',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'This course will help you identify and manage components of Blackboard necessary to effectively implement an online course in the Central Piedmont Community College environment.  Part of the Foundations for Teaching Online Learning Track.'
        },
        51: {
            id: 51,
            category: 7,
            name: 'Setting Up Your Online Course',
            courseLink: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'Having a well-designed online course is the first step to helping your students succeed in your class. Part of the Foundations for Teaching Online Learning Track.'
        },
        52: {
            id: 52,
            category: 7,
            name: 'Collaborate and Connect',
            courseLink: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'Central Piedmont offers several tools to assist you in staying connected with your students. Part of the Foundations for Teaching Online Learning Track.'
        },
        53: {
            id: 53,
            category: 4,
            name: 'Online Accessibility Resources',
            courseLink: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'It is important that all digital content within your online course can be navigated and read by everyone, regardless of location, experience, technology, or disability.  Part of the Foundations for Teaching Online Learning Track.'
        },
        54: {
            id: 54,
            category: 4,
            name: 'Support Your Students',
            courseLink: 'currently unavailable',
            learningTrack: 'Foundations for Teaching Online',
            certification: 'none',
            description: 'You may not be the only one who is new to teaching and learning online.  Some students may need a little extra support to help them succeed in an online environment. Part of the Foundations for Teaching Online Learning Track'
        },
        55: {
            id: 55,
            category: 5,
            name: 'ABCD Method for Writing Learning Outcomes',
            courseLink: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'Being able to write good learning outcomes is the foundation of effective course design and assessment.  This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
        56: {
            id: 56,
            category: 3,
            name: 'Level Up: Introduction to Rubrics',
            courseLink: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'This introductory course explores how to create a rubric from scratch and provides resources to adapt an existing rubric. This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
        57: {
            id: 57,
            category: 7,
            name: 'Active Learning Strategies',
            courseLink: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'Go beyond the lecture! This important course explores student-centered learning activities during seated or synchrononous live classes. This course is part of the Teaching Essentials and Assessment as Learning Track.'
        },
        58: {
            id: 58,
            category: 5,
            name: 'The Perfect Match: Aligning your course',
            courseLink: 'currently unavailable',
            learningTrack: 'Teaching Essentials and Assessment as Learning',
            certification: 'none',
            description: 'The foundation of effective course design includes aligning outcomes, activities and assessment. This course is part of the Teaching Essential and Assessment as Learning Track.'
        },
        59: {
            id: 59,
            category: 7,
            name: `Don't "flip" out:  Transforming your traditional classroom to a flipped classroom`,
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'This course will discuss how effective "flipping" your classroom can be, how you can transform your classroom into a "flipped" classroom, and how your students can excel in a "flipped" classroom.'
        },
        60: {
            id: 60,
            category: 7,
            name: 'VoiceThread for Online Courses',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'VoiceThread is a Cloud operation that does not require software to install.  It is purchased by the institution and is free to your students.  Students can operate this application on their computers, iPads, or cell phones.  This course will show you how to integrate this operation into your online courses, help you develop useful content that will create interaction between the students as well as faculty, and how to build rubrics into your teaching shell to grade assignments.'
        },
        61: {
            id: 61,
            category: 6,
            name: 'Classroom Setup to Increase Student Engagement in Online Classes',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Teaching online is necessary for College faculty today, and the need for it will only grow over time. At CPCC, statistics indicate that if “online” was a campus, it would be one of the largest campuses at the College. Still, many teachers and students feel that an online class cannot offer the same level of interaction and engagement that a seated class can offer. Lindy Hues has been teaching online since 2012, and has learned some successful strategies to offer an online learning experience that is closer to a seated classroom environment. In this presentation, she will share some examples from the field and offer advice on successful online teaching techniques. Topics will include course setup, teacher engagement techniques, and strategies to increase student engagement.'
        },
        62: {
            id: 62,
            category: 7,
            name: 'Pandemic-Proof Course Design',
            courseLink: 'currently unavailable',
            learningTrack: 'none',
            certification: 'none',
            description: 'Learn how to design your courses to provide the same level of quality and consistency regardless of format or a change in the assigned instructor. This course provides tips for making your assignments clear and easy to engage for both students and facutly should you need to hand off a course to someone else on a short timeline.   '
        },
        'r': {
            id: 'r',
            category: 8,
            name: 'Random Course',
            description: 'Get Rid Of This.'
        },
    },
}

export default STORE;