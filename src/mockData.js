import {v4 as uuidv4} from "uuid"
const mockData = [
    {
        id: uuidv4(),
        title: "📝Por hacer",
        task:[
            {
                id: uuidv4(),
                title: "Estudiar Java"
            },
            {
                id: uuidv4(),
                title: "Estudiar React"
            },
            {
                id: uuidv4(),
                title: "Estudiar C"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✏️En progreso",
        task:[
            {
                id: uuidv4(),
                title: "Proyecto Nro3 React"
            },
            {
                id: uuidv4(),
                title: "Diseño web"
            },
            {
                id: uuidv4(),
                title: "Armar curso"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✔️Completado",
        task:[
            {
                id: uuidv4(),
                title: "Pasear al perro"
            },
            {
                id: uuidv4(),
                title: "Lavar los platos"
            },
            {
                id: uuidv4(),
                title: "Limpiar la casa"
            }
        ]
    },
]

export default mockData