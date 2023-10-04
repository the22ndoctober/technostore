import { useEffect, useState } from "react"

type Cordinates = {
    x: number
    y: number
}

const DragnDrop = () => {
    const [cordinates, setCordinates] = useState<Cordinates>({ x: 0, y: 0 })
    const [startPoint, setStartPoint] = useState<Cordinates>({ x: 0, y: 0 })

    useEffect(() => {}, [])
    return (
        <div
            style={{
                width: 800,
                height: 800,
                border: "2px border red",
                position: "relative",
                margin: "0 auto",
                backgroundColor: "rgb(244,244,244)",
            }}
            onDragOver={(e) => {
                e.preventDefault()
            }}
        >
            <div
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                    setStartPoint({
                        x: e.clientX,
                        y: e.clientY,
                    })
                }}
                onDragEnd={(e: React.DragEvent<HTMLDivElement>) => {
                    const differenceX = startPoint.x - e.clientX
                    const differenceY = startPoint.y - e.clientY
                    console.log(differenceX)
                    console.log(differenceY)
                    console.log(cordinates.x - differenceX)
                    console.log(cordinates.y - differenceY)

                    setCordinates((state: Cordinates) => ({
                        x:
                            state.x - differenceX < 0
                                ? 0
                                : state.x - differenceX,
                        y:
                            state.y - differenceY < 0
                                ? 0
                                : state.y - differenceY,
                    }))
                }}
                className="item"
                draggable={true}
                style={{
                    width: 100,
                    height: 100,
                    position: "absolute",
                    backgroundColor: "red",
                    left: cordinates.x,
                    top: cordinates.y,
                    transitionDuration: "0.2s",
                    cursor: "move",
                }}
            ></div>
        </div>
    )
}

export default DragnDrop
