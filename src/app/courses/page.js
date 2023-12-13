import { LessonCard } from "../components/lessons/lesson_card_unlocked";

export const metadata = {
  title: "List of Courses",
};

async function getCourseList() {
  try {
    const res = await fetch(`http://localhost:8081/courses/listCourses`, {
      cache: "no-store",
    });
    const Data = res.json();
    if (!Data.error) {
      return Data;
    } else {
      throw new Error(Data.error);
    }
  } catch (error) {
    console.log(error);
  }
  return 0;
}

export default async function courses() {
  const CourseList = await getCourseList().then((Courses) => {
    return Courses.data;
  });
  return (
    <main className="mx-64 my-8 gap-y-12">
      <div>
        {CourseList.map((course, index) => {
          if (index % 2) {
            return (
              <div key={index} className="grid grid-cols-2 gap-8 gap-x-40">
                <div className="place-self-center"></div>
                <LessonCard
                  courseTitle={course.name}
                  courseId={course.id}
                  isLocked={course.isLocked}
                  alignment="justify-self-end"
                  connectorAlign=""
                />
                <div className="place-self-center"></div>
              </div>
            );
          } else {
            return (
              <div key={index} className="grid grid-cols-2 gap-8 gap-x-40">
                <LessonCard
                  courseTitle={course.name}
                  courseId={course.id}
                  isLocked={course.isLocked}
                  alignment="justify-self-start"
                  connectorAligh="right"
                />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
