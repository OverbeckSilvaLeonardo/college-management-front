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

export interface TeacherInformation {
  TeacherID: number;
  Salary: number;
  Name: string;
  Birthday: string;
}

export interface Subject {
  SubjectID: number;
  Description: string;
  StudentCount: number;
  TeacherInformation: TeacherInformation;
  StudentsList: StudentsList;
}

export interface SubjectList {
  Subjects: Subject[];
}
