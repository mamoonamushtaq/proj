interface CourseDetails {
    name: string;
    instructor: string;
    delivery: 'Onsite' | 'Online'; // Assuming that delivery can be only "Onsite" or "Online"
    durationInMonths: number;
  }
  
  const webCourseDetails1: CourseDetails = {
    name: 'Certified Web 3.0 and Metaverse Development',
    instructor: 'Zia Khan',
    delivery: 'Onsite',
    durationInMonths: 12,
  };
  
  console.log(webCourseDetails1);
  