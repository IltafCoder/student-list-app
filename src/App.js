import { useState } from "react"
import Student from "./components/Student"
import "./index.css"

function App () {

    let [studentCount, setStudentCount] = useState(5)
    let [components, setComponents] = useState([1, 2, 3, 4, 5])

    function removeComponent (id) {
        setStudentCount(studentCount - 1)
        setComponents(
            components.filter((c) => {
                return c !== id
            })
        )
    }

    function clearAllStudents () {
        setStudentCount(0)
        setComponents(
            components = []
        )

    }

    let data = {
        "1": {
            username: "Leon",
            age: "22",
            image: "./images/student.png"
        },
        2: {
            username: "Dennis",
            age: "24",
            image: "./images/student_2.jpg"
        },
        3: {
            username: "Prick",
            age: "32",
            image: "./images/student_3.jpg"
        },
        4: {
            username: "Alex",
            age: "27",
            image: "./images/student_4.jpg"
        },
        5: {
            username: "Talor",
            age: "22",
            image: "./images/student_5.jpg"
        }

    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div>

                <h1 className="text-4xl font-bold text-center mt-3">Student List App</h1>
                <p className="mt-5">Number Of Students: {studentCount}</p>
                {components.map((i) => (
                    <Student key={i} id={i} onRemove={removeComponent} username = {data[i].username} age = {data[i].age} image = {data[i].image} />
                ))}
                <button onClick={clearAllStudents} className="bg-cyan-600 text-white cursor-pointer w-full h-10 hover:bg-cyan-500 active:translate-y-1"><i className="fa fa-brush"></i> Clear All</button>

            </div>
        </div>
    )
}

export default App