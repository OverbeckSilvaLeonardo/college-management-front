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

export interface Grade {
  GradeID: number;
  SubjectID: number;
  Subject: string;
  Grade: number;
}

export interface Grades {
  Grades: Grade[];
}

export interface GetStudent {
  StudentID: number;
  StudentName: string;
  Grades: Grades;
}

export interface GetStudentList {
  Students: GetStudent[];
}
