import { LessonAndQuizComponent } from "@/components/LessonsAndQuizArrayComponent";

export const metadata = {
    title: "Lesson"
}

async function getCourseLesson (id) {
    try{
        const res = await fetch(`http://localhost:8081/courses/getUnitContent?uid=${id}`, {cache:'no-store'})
        const Data = await res.json()
        if (!Data.error){return Data.data}
        else {throw new Error(Data.error)}
    }catch{}
}

async function SubLessons({params, searchParams}) {
    const lessonId = searchParams.lessonId
    const Lessons = await getCourseLesson(lessonId)
    return(
        <div><LessonAndQuizComponent Lessons={Lessons.content} LessonId={lessonId} LessonName={Lessons.unit}/></div>
    );
};

export default SubLessons;