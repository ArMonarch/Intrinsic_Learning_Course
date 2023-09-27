import Link from "next/link"

export default function course({params}){
    return (
        <div className="text-2xl">
            The Course page {params.courseId} Includes Topics

            
            <div>
  
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Course Description</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Introduction to Computer Science and Programming in Python is intended for students with little or no programming experience. It aims to provide students with an understanding of the role computation can play in solving problems and to help students, regardless of their major, feel justifiably confident of their ability to write small programs that allow them to accomplish useful goals. The class will use the Python 3.5 programming language.
This is a half-semester course. Students who successfully complete 6.0001 may continue into 6.0002 Introduction to Computational Thinking and Data Science, which is taught in the second half of the semester.
</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Instructors</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Dr. Ana Bell, 
Prof. Eric Grimson, 
Prof. John Guttag
</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Level</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Undergraduate</dd>
      </div>
      
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Topics</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <li>What is Computation? </li>
            <li>Branching and Iteration</li>
    
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Goals</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <li>Provide an understanding of the role computation can play in solving problems. </li>
            <li>Help students, including those who do not plan to major in Computer Science and Electrical Engineering, feel confident of their ability to write small programs that allow them to accomplish useful goals.</li>
            <li>Position students so that they can compete for research projects and excel in subjects with programming components.</li>
    
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Activities</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <li>Provide an understanding of the role computation can play in solving problems. </li>
            <li>Help students, including those who do not plan to major in Computer Science and Electrical Engineering, feel confident of their ability to write small programs that allow them to accomplish useful goals.</li>
            <li>Position students so that they can compete for research projects and excel in subjects with programming components.</li>
    
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Learning Resource Types</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <li>Provide an understanding of the role computation can play in solving problems. </li>
            <li>Help students, including those who do not plan to major in Computer Science and Electrical Engineering, feel confident of their ability to write small programs that allow them to accomplish useful goals.</li>
            <li>Position students so that they can compete for research projects and excel in subjects with programming components.</li>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Learning Resource Types</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        Each problem set will involve programming in Python. There will be 6 problem sets in the course. There will be two quizzes. All quizzes will be closed-book, though you will be allowed to bring one page of notes to the first quiz and two pages of notes to the second quiz. Pages must be letter-sized, double-sided, either handwritten or typed.
nts.
        </dd>
      </div>

      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Goals</dt>
        <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nykOeWgQcHM?si=7aybwDA5Nc0K4SFj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>


            
            
            
        </div>

    
    )
}