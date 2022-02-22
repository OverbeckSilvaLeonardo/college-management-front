export interface Student {
  StudentID: number;
  Name: string;
  AverageGrade: number;
}

export interface StudentsList {
  Students: Student[];
}

export interface Course {
  CourseID: number;
  Description: string;
  StudentCount: number;
  TeacherCount: number;
  StudentsList: StudentsList;
}

export interface CourseList {
  Courses: Course[];
}
