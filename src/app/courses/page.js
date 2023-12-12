import { LessonCard } from "../components/lessons/lesson_card_unlocked";

export const metadata = {
  title: "List of Courses",
};

async function getCourseList(){
  try {
    const res = await fetch(`http://localhost:8081/courses/listCourses`, {cache:'no-store'})
    if (!res.error){return res.json()}
    else {throw new Error(res.json().error)}
  } catch (error) {
    console.log(error)
  }
  return 0;
}

export default async function courses() {
  const CourseList = await getCourseList().then((Courses) => {return Courses.data})
  //console.log(CourseList)
  return (
    <main className="mx-12 my-8">
      {CourseList.map((courseName, index) => {
        if (index % 2) {
          return (
            <div key={index} className="grid grid-cols-2 gap-8 gap-x-40">
              <div className="place-self-center"></div>
              <LessonCard title={courseName.name} alignment="justify-self-start" />
            </div>
        )} else {
          return (
            <div key={index} className="grid grid-cols-2 gap-8 gap-x-40">
              <LessonCard title={courseName.name} alignment="justify-self-end" /><div className="place-self-center"></div>
            </div>
          )
        }
        })}
    </main>
  );
}